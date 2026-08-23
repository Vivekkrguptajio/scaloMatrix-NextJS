"use client";
import React, { useState } from 'react';

export default function AdminUploadPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setImageUrl("");
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select an image first.");
      return;
    }

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      setError("Cloudinary settings are missing. Please check your .env.local file.");
      return;
    }

    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setImageUrl(data.secure_url);
      } else {
        setError(data.error?.message || "Image upload failed.");
      }
    } catch (err) {
      setError("An error occurred during upload.");
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(imageUrl);
    alert("URL copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Image Uploader</h1>
        <p className="text-sm text-gray-500 mb-6">Upload images directly to Cloudinary and get the URL to use across your apps.</p>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-orange-50 file:text-orange-600
              hover:file:bg-orange-100 transition-colors"
          />
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
            {error}
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className={`w-full py-3 px-4 rounded-xl text-white font-medium transition-all ${
            uploading || !file
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-orange-600 hover:bg-orange-700 hover:shadow-lg hover:-translate-y-0.5"
          }`}
        >
          {uploading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Uploading...
            </span>
          ) : (
            "Upload to Cloudinary"
          )}
        </button>

        {imageUrl && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Upload Successful!</h3>
            <img src={imageUrl} alt="Uploaded preview" className="w-full h-40 object-cover rounded-lg mb-4 border border-gray-200" />
            
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={imageUrl}
                className="flex-1 p-2 text-sm bg-gray-50 border border-gray-200 rounded-lg text-gray-600 outline-none"
              />
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
