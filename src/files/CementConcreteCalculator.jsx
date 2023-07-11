import React, { useState, useEffect } from 'react';

const CementConcreteCalculator = () => {
  const [areaOfSlab, setAreaOfSlab] = useState(0);
  const [depthOfSlab, setDepthOfSlab] = useState(0);
  const [cementToTotalAggregatesRatio, setCementToTotalAggregatesRatio] = useState(0);
  const [sandToTotalAggregatesRatio, setSandToTotalAggregatesRatio] = useState(0);
  const [volumeOfConcrete, setVolumeOfConcrete] = useState(0);
  const [cementContent, setCementContent] = useState(0);
  const [sandContent, setSandContent] = useState(0);
  const [aggregateContent, setAggregateContent] = useState(0);

  const calculateCementConcrete = () => {
    const unit = document.querySelector('[name="units"]').value;
    if (unit === 'feet') {
      const areaOfSlabInMeters = areaOfSlab / 3.28084;
      const depthOfSlabInMeters = depthOfSlab / 12 / 3.28084;
      const volumeOfConcreteInCubicMeters = areaOfSlabInMeters * depthOfSlabInMeters;
      const cementContentInCubicMeters = volumeOfConcreteInCubicMeters * cementToTotalAggregatesRatio / 4;
      const sandContentInCubicMeters = volumeOfConcreteInCubicMeters * sandToTotalAggregatesRatio / 4;
      const aggregateContentInCubicMeters = volumeOfConcreteInCubicMeters - cementContentInCubicMeters - sandContentInCubicMeters;
      setVolumeOfConcrete(volumeOfConcreteInCubicMeters);
      setCementContent(cementContentInCubicMeters);
      setSandContent(sandContentInCubicMeters);
      setAggregateContent(aggregateContentInCubicMeters);
    } else if (unit === 'meters') {
      const volumeOfConcreteInCubicMeters = areaOfSlab * depthOfSlab;
      const cementContentInCubicMeters = volumeOfConcreteInCubicMeters * cementToTotalAggregatesRatio / 4;
      const sandContentInCubicMeters = volumeOfConcreteInCubicMeters * sandToTotalAggregatesRatio / 4;
      const aggregateContentInCubicMeters = volumeOfConcreteInCubicMeters - cementContentInCubicMeters - sandContentInCubicMeters;
      setVolumeOfConcrete(volumeOfConcreteInCubicMeters);
      setCementContent(cementContentInCubicMeters);
      setSandContent(sandContentInCubicMeters);
      setAggregateContent(aggregateContentInCubicMeters);
    }
  };
  return (
    <div>
      <h1>Cement Concrete Calculator</h1>
      <input
        type="number"
        placeholder="Area of Slab (feet)"
        onChange={(e) => setAreaOfSlab(e.target.value)}
      />
      <input
        type="number"
        placeholder="Depth of Slab (inches)"
        onChange={(e) => setDepthOfSlab(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cement:Total Aggregates Ratio"
        onChange={(e) => setCementToTotalAggregatesRatio(e.target.value)}
      />
      <input
        type="number"
        placeholder="Sand:Total Aggregates Ratio"
        onChange={(e) => setSandToTotalAggregatesRatio(e.target.value)}
      />
      <button onClick={calculateCementConcrete}>Calculate Cement Concrete</button>
      <h2>Volume of Concrete: {volumeOfConcrete} cubic feet</h2>
      <h2>Cement Content: {cementContent} cubic feet</h2>
      <h2>Sand Content: {sandContent} cubic feet</h2>
      <h2>Aggregate Content: {aggregateContent} cubic feet</h2>
    </div>
  );
};

export default CementConcreteCalculator;
