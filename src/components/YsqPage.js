// YSQ - Young Schema Questionnaire
import React, { useEffect } from 'react';
import YsqItem from './YsqItem';
import { setQuestions, startSetQuestions } from '../actions/ysqItems';


const YsqPage = () => {
  const questions = [{
    id: 1,
    text: 'dummy'
  }, {
    id: 2,
    text: 'dummy second'
  }, {
    id: 3,
    text: 'dummy third'
  }];
  useEffect(() => {
    // startSetQuestions()(dispatchQuestions);
  }, []);

  return (
    <div className="content-container">
      {questions.map((question) => (
        <YsqItem key={question.id} {...question} />
      ))}
    </div>
  );
};

export { YsqPage as default };
