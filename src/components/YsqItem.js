import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import YsqItemScore from './YsqItemScore';
import YsqItemContext from '../context/YsqItemContext';
import YsqPageContext from '../context/YsqPageContext';

const YsqItem = ({ id, text, initScore }) => {
  const [score, setScore] = useState(initScore);
  const { dispatchQuestions } = useContext(YsqPageContext);

  useEffect(() => {
    console.log('on q modified', score);
  }, [score]);

  return (
    <YsqItemContext.Provider value={{ setScore }}>
      <div>{text}</div>
      <YsqItemScore />
    </YsqItemContext.Provider>
  );
};

YsqItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  initScore: PropTypes.number
};

YsqItem.defaultProps = {
  initScore: 0
};

export { YsqItem as default };
