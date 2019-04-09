import React, { useContext } from 'react';
import YsqItemContext from '../context/YsqItemContext';

const YsqItemScore = () => {
  const { setScore } = useContext(YsqItemContext);
  const addScore = (e) => {
    e.preventDefault();
    console.log(e);
    setScore(e.value);
  };

  return (
    <form onSubmit={addScore}>
      <button type="submit" value={1}>1</button>
      <button type="submit" value={2}>2</button>
      <button type="submit" value={3}>3</button>
      <button type="submit" value={4}>4</button>
      <button type="submit" value={5}>5</button>
      <button type="submit" value={6}>6</button>
    </form>
  );
};

export { YsqItemScore as default };
