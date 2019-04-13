// YSQ - Young Schema Questionnaire
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetQuestions } from '../actions/ysqItems';
import YsqItem from './YsqItem';


const YsqItemsList = (props) => {
  const questions = [{
    id: '1',
    text: 'dummy'
  }, {
    id: '2',
    text: 'dummy second'
  }, {
    id: '3',
    text: 'dummy third'
  }];
  useEffect(() => {
    console.log('once at load', props.ysqItems);
    props.startSetQuestions();
  }, []);

  return (
    <div className="content-container">
      {props.ysqItems.map((question) => (
        <YsqItem key={question.id} {...question} />
      ))}
    </div>
  );
};

YsqItemsList.propTypes = {
  ysqItems: PropTypes.arrayOf(PropTypes.object)
};

YsqItemsList.defaultProps = {
  ysqItems: []
};

const mapStateToProps = ({ ysqItems }) => {
  console.log('mapping state to props');
  return {
    ysqItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startSetQuestions: () => dispatch(startSetQuestions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YsqItemsList);
