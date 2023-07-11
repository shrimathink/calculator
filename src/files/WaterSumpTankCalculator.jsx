import React, { useState } from "react";

const WaterSumpTankCalculator = () => {
  const [diameter, setDiameter] = useState(0);
  const [depth, setDepth] = useState(0);
  const [waterLevel, setWaterLevel] = useState(0);
  const [volume, setVolume] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const calculateVolume = () => {
    const radius = diameter / 2;
    const volume = (3.14159 * radius ** 2 * depth) - (3.14159 * radius ** 2 * waterLevel);
    setVolume(volume);
  };

  const calculateQuantity = () => {
    const bricksPerSquareFoot = 60;
    const quantityWithWastage = volume * bricksPerSquareFoot * 1.1;
    setQuantity(quantityWithWastage);
  };

  return (
    <div>
      <h1>Water Sump/Tank Calculator</h1>
      <input
        type="number"
        placeholder="Diameter (ft)"
        onChange={(event) => setDiameter(event.target.value)}
      />
      <input
        type="number"
        placeholder="Depth (ft)"
        onChange={(event) => setDepth(event.target.value)}
      />
      <input
        type="number"
        placeholder="Water Level (ft)"
        onChange={(event) => setWaterLevel(event.target.value)}
      />
      <button onClick={calculateVolume}>Calculate</button>
      <p>Volume: {volume}</p>
      <button onClick={calculateQuantity}>Calculate Quantity</button>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default WaterSumpTankCalculator;
