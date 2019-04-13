import React from 'react';

const YsqItemScore = () => {
  const addScore = (e) => {
    e.preventDefault();
    // setScore(e.target.value);
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
