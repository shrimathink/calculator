
import { useState } from 'react';
import AreaCalculator from './files/AreaCalculator';
import WaterSumpTankCalculator from './files/WaterSumpTankCalculator';
import CarpetAreaCalculator from './files/CarpetAreaCalculator';
import CalculatePlastering from './files/CalculatePlastering';
function App() {
  const [buildupArea, setBuildupArea] = useState(0);
  const [costPerSquareFoot, setCostPerSquareFoot] = useState(0);
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [cementRequirement, setCementRequirement] = useState(0);
  const [sandRequirement, setSandRequirement] = useState(0);
  const [steelRequirement, setSteelRequirement] = useState(0);
  const [finisherRequirement, setFinisherRequirement] = useState(0);
  const [fillingRequirement, setFillingRequirement] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const calculateEstimatedCost = () => {
    setEstimatedCost(buildupArea * costPerSquareFoot);
    setCementRequirement(estimatedCost * 0.15);
    setSandRequirement(estimatedCost * 0.25);
    setSteelRequirement(estimatedCost * 0.10);
    setFinisherRequirement(estimatedCost * 0.20);
    setFillingRequirement(estimatedCost * 0.10);
    setTotalCost(estimatedCost + cementRequirement + sandRequirement + steelRequirement + finisherRequirement + fillingRequirement);
  };

  return (
    <div>
      <h1>Construction Cost Estimator</h1>
      <input
        type="number"
        placeholder="Buildup Area (ft2)"
        onChange={(event) => setBuildupArea(event.target.value)}
      />
      <input
        type="number"
        placeholder="Cost per Square Foot (Rs)"
        onChange={(event) => setCostPerSquareFoot(event.target.value)}
      />
      <button onClick={calculateEstimatedCost}>Calculate</button>
      <h2>Estimated Cost: {estimatedCost} Rs</h2>
      <h3>Material Requirements</h3>
      <p>
        Cement requirement: {cementRequirement} bags
      </p>
      <p>
        Sand requirement: {sandRequirement} tons
      </p>
      <p>
        Steel requirement: {steelRequirement} kg
      </p>
      <p>
        Finisher requirement: {finisherRequirement} liters
      </p>
      <p>
        Filling requirement: {fillingRequirement} tons
      </p>
      <p>
        Total Cost: {totalCost} Rs
      </p>
      <div>
        <AreaCalculator/>
        <WaterSumpTankCalculator/>
        <CarpetAreaCalculator/>

        <CalculatePlastering/>
      </div>
    </div>
  );

  
    
  
}

export default App;
