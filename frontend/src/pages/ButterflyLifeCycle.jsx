import React from 'react';

const ButterflyLifeCycle = () => {
  return (
    <div className="flex justify-center mt-10 space-x-10">
      <LifeStage name="Egg" />
      <LifeStage name="Caterpillar" />
      <LifeStage name="Chrysalis" />
      <LifeStage name="Butterfly" />
    </div>
  );
};

const LifeStage = ({ name }) => {
  return (
    <div className="text-center">
      <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
        <img
          src={`/${name.toLowerCase()}.jpg`}
          alt={name}
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div>{name}</div>
    </div>
  );
};

export default ButterflyLifeCycle;
