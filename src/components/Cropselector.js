import React, { useState } from 'react';

const CropSelector = ({ onCropSelect }) => {
  const [selectedCrop, setSelectedCrop] = useState('');

  const handleChange = (e) => {
    const crop = e.target.value;
    setSelectedCrop(crop);
    onCropSelect(crop);
  };

  return (
    <div>
      <label>Select Crop: </label>
      <select value={selectedCrop} onChange={handleChange}>
        <option value="">--Choose--</option>
        <option value="rice">Rice</option>
        <option value="wheat">Wheat</option>
        <option value="maize">Maize</option>
      </select>
    </div>
  );
};

export default CropSelector;
