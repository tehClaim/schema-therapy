// YSQ - Young Schema Questionnaire

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ysqItemsSelector from '../selectors/ysqItems';
import { startSetQuestions } from '../actions/ysqItems';
import YsqItem from './YsqItem';


const YsqItemsList = ({ dispatch, ysqItems }) => {
  const pageSize = 5; // TODO: should be dynamic (user input)
  const [page, setPage] = useState();
  const [maxPage, setMaxPage] = useState();
  const [currentPageItems, setCurrentPageItems] = useState([]);

  useEffect(() => {
    dispatch(startSetQuestions()).then(() => {
      setPage(1);
    });
  }, []);

  useEffect(() => {
    if (ysqItems.length > 0 && page) {
      setMaxPage(Math.ceil(ysqItems.length / pageSize));
      setCurrentPageItems(ysqItemsSelector(ysqItems, page, pageSize));
    }
  }, [ysqItems, page]);

  return (
    <div className="content-container">
      {currentPageItems.map((question) => (
        <YsqItem key={question.id} id={question.id} />
      ))}
      <button
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={!page || page === 1}
      >prev Page
      </button>
      <button
        type="button"
        onClick={() => setPage(page + 1)}
        disabled={!page || page === maxPage}
      >next Page
      </button>
    </div>
  );
};

YsqItemsList.propTypes = {
  ysqItems: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired
};

YsqItemsList.defaultProps = {
  ysqItems: []
};

const mapStateToProps = ({ ysqItems }) => {
  return {
    ysqItems
  };
};

export default connect(mapStateToProps)(YsqItemsList);
