import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import YsqItemScore from './YsqItemScore';

const YsqItem = ({ id, text, initScore }) => {
  const [score, setScore] = useState(initScore);

  useEffect(() => {
    console.log('on q modified', score);
  }, [score]);

  return (
    <>
      <div>{text}</div>
      <YsqItemScore />
    </>
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
