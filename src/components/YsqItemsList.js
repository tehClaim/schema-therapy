// YSQ - Young Schema Questionnaire
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ysqItemsSelector from '../selectors/ysqItems';
import { startSetQuestions } from '../actions/ysqItems';
import YsqItem from './YsqItem';


const YsqItemsList = ({ ysqItems, _startSetQuestions }) => {
  const [page, setPage] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState([]);
  useEffect(() => {
    _startSetQuestions();
  }, []);

  useEffect(() => {
    setCurrentPageItems(ysqItemsSelector(ysqItems, page, 5));
  }, [ysqItems, page]);

  const onPrevPage = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };

  const onNextPage = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <div className="content-container">
      {currentPageItems.map((question) => (
        <YsqItem key={question.id} id={question.id} />
      ))}
      <button type="button" onClick={onPrevPage}>prev Page</button>
      <button type="button" onClick={onNextPage}>next Page</button>
    </div>
  );
};

YsqItemsList.propTypes = {
  ysqItems: PropTypes.arrayOf(PropTypes.object),
  _startSetQuestions: PropTypes.func.isRequired
};

YsqItemsList.defaultProps = {
  ysqItems: []
};

const mapStateToProps = ({ ysqItems }) => {
  return {
    ysqItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _startSetQuestions: () => dispatch(startSetQuestions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YsqItemsList);
