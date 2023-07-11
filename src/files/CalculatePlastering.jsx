import React, { useState } from "react";

const CalculatePlastering = () => {
  const [area, setArea] = useState(100);
  const [thickness, setThickness] = useState(12);
  const [specificGravity, setSpecificGravity] = useState(1.5);
  const [plasterType, setPlasterType] = useState("12 mm");
  const [length, setLength] = useState(100);
  const [width, setWidth] = useState(100);
  const [gradeForFooting, setGradeForFooting] = useState("C.M(1:3)");
  const [requiredQuantity, setRequiredQuantity] = useState(null);
  const [cement, setCement] = useState(null);
  const [sand, setSand] = useState(null);

  const calculatePlastering = () => {
    const thicknessInMeters = thickness / 1000;
    const requiredQuantityInCubicMeters = area * thicknessInMeters * specificGravity;
    const cementInKg = requiredQuantityInCubicMeters * 1.2;
    const sandInKg = requiredQuantityInCubicMeters * 4.8;
    setRequiredQuantity(requiredQuantityInCubicMeters);
    setCement(cementInKg);
    setSand(sandInKg);
  };

  return (
    <div>
      <h1>Plastering Calculation</h1>
      <input
        type="number"
        placeholder="Area in square meters"
        min="1"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />
      <input
        type="number"
        placeholder="Thickness in millimeters"
        min="1"
        value={thickness}
        onChange={(e) => setThickness(e.target.value)}
      />
      <input
        type="number"
        placeholder="Specific gravity"
        min="1"
        value={specificGravity}
        onChange={(e) => setSpecificGravity(e.target.value)}
      />
      <select
        onChange={(e) => setPlasterType(e.target.value)}
        value={plasterType}
      >
        <option value="12 mm">12 mm</option>
        <option value="15 mm">15 mm</option>
        <option value="18 mm">18 mm</option>
        <option value="20 mm">20 mm</option>
      </select>
      <input
        type="number"
        placeholder="Length in meters"
        min="1"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <input
        type="number"
        placeholder="Width in meters"
        min="1"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <select
        onChange={(e) => setGradeForFooting(e.target.value)}
        value={gradeForFooting}
      >
        <option value="C.M(1:3)">C.M(1:3)</option>
        <option value="C.M(1:4)">C.M(1:4)</option>
        <option value="C.M(1:5)">C.M(1:5)</option>
        <option value="C.M(1:6)">C.M(1:6)</option>
      </select>
      <button onClick={calculatePlastering}>Calculate</button>
      <p>
        Required quantity of plaster: {requiredQuantity ? requiredQuantity.toFixed(2) : "N/A"} m<sup>3</sup>
      </p>
      <p>
        Cement required: {cement ? cement.toFixed(2) : "N/A"} kg
      </p>
      <p>
        Sand required: {sand ? sand.toFixed(2) : "N/A"} kg
      </p>
      
    </div>
  );
};

export default CalculatePlastering;


      