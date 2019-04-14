import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editYsqItem } from '../actions/ysqItems';

const YsqItem = ({ id, text, _editYsqItem }) => {
  const addScore = (e) => {
    e.preventDefault();
    const scoreValue = parseInt(e.target.value, 10);
    _editYsqItem(id, { score: scoreValue });
  };
  return (
    <>
      <div>{text}</div>
      <select onChange={addScore}>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </select>
    </>
  );
};

YsqItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  _editYsqItem: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => state.ysqItems.find((item) => item.id === props.id);

const mapDispatchToProps = (dispatch) => {
  return {
    _editYsqItem: (id, updates) => dispatch(editYsqItem(id, updates))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YsqItem);
