import React, { useState } from 'react';
import { storage } from '../config/firebase';
import { ref, uploadBytes } from 'firebase/storage';

function UploadFile() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
    const fileRef = ref(storage, `uploads/${file.name}`);

    try {
      await uploadBytes(fileRef, file);
      alert("✅ File uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("❌ Upload failed. Check console.");
    }
  };

  return (
    <div>
      <h3>Upload to Firebase</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadFile;
