import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editYsqItem } from '../actions/ysqItems';

const YsqItem = ({ dispatch, id, text, score: initScore }) => {
  const options = [{
    label: '1 = Completely untrue of me',
    value: 1
  }, {
    label: '2 = Mostly untrue of me',
    value: 2
  }, {
    label: '3 = Slightly more true than untrue',
    value: 3
  }, {
    label: '4 = Moderately true of me',
    value: 4
  }, {
    label: '5 = Mostly true of me',
    value: 5
  }, {
    label: '6 = Describes me perfectly',
    value: 6
  }];
  const [score, setScore] = useState(options.find((option) => option.value === initScore));

  useEffect(() => {
    console.log('score changed');
    if (score) {
      dispatch(editYsqItem(id, { score: parseInt(score, 10) }));
    }
  }, score);
  const onScoreChange = (option) => {
    setScore(option);
  };
  return (
    <>
      <div>{text}</div>
      <Select
        value={score}
        isSearchable
        options={options}
        onChange={onScoreChange}
      />
    </>
  );
};

YsqItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  score: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

YsqItem.defaultProps = {
  score: undefined
};

const mapStateToProps = (state, props) => state.ysqItems.find((item) => item.id === props.id);

export default connect(mapStateToProps)(YsqItem);
