
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary with the provided URL
// If the URL is in .env.local, dotenv will load it. 
// Let's also allow falling back to a direct CLOUDINARY_URL if it's missing in env.
const url = "cloudinary://456597772184416:HsSfzgGdpK2ezl9yvyfNpaEtkfU@dqtzchlqj";
const regex = /^cloudinary:\/\/([^:]+):([^@]+)@(.+)$/;
const match = url.match(regex);
if (match) {
  cloudinary.config({
    api_key: match[1],
    api_secret: match[2],
    cloud_name: match[3]
  });
}

const publicDir = path.join(__dirname, 'public');
const mappingFile = path.join(__dirname, 'cloudinary_mapping.json');

const supportedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];

const getFilesRecursively = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(file));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (supportedExtensions.includes(ext)) {
        results.push(file);
      }
    }
  });
  
  return results;
};

const uploadImages = async () => {
  console.log('Scanning public directory for images...');
  const files = getFilesRecursively(publicDir);
  console.log(`Found ${files.length} images to upload.`);
  
  const mapping = {};
  
  for (const file of files) {
    // Determine the folder structure relative to 'public'
    const relativePath = path.relative(publicDir, file);
    // Replace Windows backslashes with forward slashes for Cloudinary folder path
    const posixPath = relativePath.split(path.sep).join('/');
    
    const folderPath = 'shopify-app/' + posixPath.substring(0, posixPath.lastIndexOf('/'));
    
    // Using posixPath as public_id (without extension) if we want exact mapping,
    // or we can let Cloudinary generate it. But it's better to preserve the filename.
    const filenameWithoutExt = path.basename(file, path.extname(file));
    
    console.log(`Uploading ${posixPath}...`);
    try {
      const result = await cloudinary.uploader.upload(file, {
        folder: folderPath === 'shopify-app/' ? 'shopify-app' : folderPath,
        public_id: filenameWithoutExt,
        use_filename: true,
        unique_filename: false,
        overwrite: true
      });
      mapping['/' + posixPath] = result.secure_url;
      console.log(`Success: ${result.secure_url}`);
    } catch (err) {
      console.error(`Failed to upload ${posixPath}:`, err.message);
    }
  }
  
  fs.writeFileSync(mappingFile, JSON.stringify(mapping, null, 2));
  console.log(`\nAll uploads completed. Mapping saved to ${mappingFile}`);
};

uploadImages();
