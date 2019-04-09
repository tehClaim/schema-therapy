import React, { useState } from 'react';
import YsqItemScore from './YsqItemScore';
import YsqItemContext from '../context/YsqItemContext';

const YsqItem = () => {
  const [score, setScore] = useState(0);


  return (
    <YsqItemContext.Provider value={{ setScore }}>
      <div> {score} </div>
      <YsqItemScore />
    </YsqItemContext.Provider>
  );
};

export { YsqItem as default };
