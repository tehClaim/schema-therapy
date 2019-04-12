import React, { useState } from 'react';
import PropTypes from 'prop-types';
import YsqItemScore from './YsqItemScore';
import YsqItemContext from '../context/YsqItemContext';


const YsqItem = ({ question }) => {
  const [score, setScore] = useState(0);


  return (
    <YsqItemContext.Provider value={{ setScore }}>
      <div> {question} </div>
      <YsqItemScore />
    </YsqItemContext.Provider>
  );
};

YsqItem.propTypes = {
  question: PropTypes.string.isRequired
};

export { YsqItem as default };
