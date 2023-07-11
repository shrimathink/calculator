import React, { useState } from 'react';

const CarpetAreaCalculator = () => {
  const [bedroomArea, setBedroomArea] = useState(0);
  const [livingRoomArea, setLivingRoomArea] = useState(0);
  const [kitchenArea, setKitchenArea] = useState(0);
  const [balconyArea, setBalconyArea] = useState(0);
  const [toiletsArea, setToiletsArea] = useState(0);
  const [thicknessOfInnerWalls, setThicknessOfInnerWalls] = useState(0);
  const [carpetArea, setCarpetArea] = useState(0);

  const calculateCarpetArea = () => {
    const totalArea = bedroomArea * 3.28084 + livingRoomArea * 3.28084 + kitchenArea * 3.28084 + balconyArea * 3.28084 + toiletsArea * 3.28084;
    const carpetArea = totalArea - (thicknessOfInnerWalls / 12);
    setCarpetArea(carpetArea);
  };

  return (
    <div>
      <h1>Carpet Area Calculator</h1>
      <input
        type="number"
        placeholder="Bedroom Area (feet)"
        onChange={(e) => setBedroomArea(e.target.value)}
      />
      <input
        type="number"
        placeholder="Living Room Area (feet)"
        onChange={(e) => setLivingRoomArea(e.target.value)}
      />
      <input
        type="number"
        placeholder="Kitchen Area (feet)"
        onChange={(e) => setKitchenArea(e.target.value)}
      />
      <input
        type="number"
        placeholder="Balcony Area (feet)"
        onChange={(e) => setBalconyArea(e.target.value)}
      />
      <input
        type="number"
        placeholder="Toilets Area (feet)"
        onChange={(e) => setToiletsArea(e.target.value)}
      />
      <input
        type="number"
        placeholder="Thickness of Inner Walls (inches)"
        onChange={(e) => setThicknessOfInnerWalls(e.target.value)}
      />
      <button onClick={calculateCarpetArea}>Calculate Carpet Area</button>
      <h2>Carpet Area: {carpetArea} square feet</h2>
    </div>
  );
};

export default CarpetAreaCalculator;
