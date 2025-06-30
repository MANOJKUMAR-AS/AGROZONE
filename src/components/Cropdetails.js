import React, { useEffect, useState } from 'react';

const cropData = {
  rice: "Rice requires standing water and high humidity.",
  wheat: "Wheat grows well in temperate zones.",
  maize: "Maize is a summer crop and needs warm temperatures."
};

const CropDetails = ({ crop }) => {
  const [details, setDetails] = useState('');

  useEffect(() => {
    if (crop) {
      // Simulating API call delay
      const timeout = setTimeout(() => {
        setDetails(cropData[crop]);
      }, 1000);

      return () => clearTimeout(timeout); // cleanup
    }
  }, [crop]);

  return (
    <div>
      <h3>Crop Details</h3>
      {details ? <p>{details}</p> : <p>Please select a crop.</p>}
    </div>
  );
};

export default CropDetails;
