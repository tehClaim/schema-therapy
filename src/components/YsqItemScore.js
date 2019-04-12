import React, { useContext } from 'react';
import YsqItemContext from '../context/YsqItemContext';

const YsqItemScore = () => {
  const { setScore } = useContext(YsqItemContext);
  const addScore = (e) => {
    e.preventDefault();
    setScore(e.target.value);
  };

  return (
    <select onChange={addScore}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
    </select>
  );
};

export { YsqItemScore as default };
