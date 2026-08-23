const fs = require('fs');
const path = require('path');

const mappingPath = path.join(__dirname, 'cloudinary_mapping.json');
const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));

// Optimize URLs: insert q_auto,f_auto
// Example: https://res.cloudinary.com/dqtzchlqj/image/upload/v1787509463/shopify-app/lap_view/Drapes.webp
// Becomes: https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509463/shopify-app/lap_view/Drapes.webp
const optimizedMapping = {};
for (const [localPath, cloudUrl] of Object.entries(mapping)) {
  optimizedMapping[localPath] = cloudUrl.replace('/upload/v', '/upload/q_auto,f_auto/v');
}

const componentsDir = path.join(__dirname, 'src', 'components');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx') || dirFile.endsWith('.js') || dirFile.endsWith('.tsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync(componentsDir);
// Also include app/page.jsx if exists
const appPage = path.join(__dirname, 'src', 'app', 'page.jsx');
if (fs.existsSync(appPage)) {
  files.push(appPage);
}

let totalReplacements = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // Replace each image path in the content
  // We need to be careful with paths. They usually look like "/photsWork/..." or "/lap_view/..."
  // Some paths might have spaces, in the mapping they are URL encoded (e.g. "%20"). We should decode or handle both.
  
  for (const [localPath, cloudUrl] of Object.entries(optimizedMapping)) {
    // localPath is like "/lap_view/Drapes.webp"
    // Sometimes in JSX it's written as src="/lap_view/Drapes.webp"
    
    // We can do a global string replace for the exact local path
    const pathVariations = [
      localPath,
      localPath.replace(/ /g, '%20'),
      decodeURIComponent(localPath)
    ];
    
    // Unique variations
    const uniqueVars = [...new Set(pathVariations)];
    
    for (const p of uniqueVars) {
      if (content.includes(p)) {
        // Regex to replace exact match surrounded by quotes or backticks
        // Like src="/path" or `url('/path')`
        // We will just do a global replace of the string if it's inside quotes.
        const regex = new RegExp(`(["'\`])${p.replace(/[.*+?^$\/{}()|[\\]\\\\]/g, '\\$&')}(["'\`])`, 'g');
        content = content.replace(regex, `$1${cloudUrl}$2`);
        changed = true;
        totalReplacements++;
      }
    }
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated images in ${path.basename(file)}`);
  }
}

console.log(`\nFinished! Made ${totalReplacements} image path replacements.`);
