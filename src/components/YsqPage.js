// YSQ - Young Schema Questionnaire
import React, { useEffect, useReducer } from 'react';
import YsqPageContext from '../context/YsqPageContext';
import YsqItem from './YsqItem';
import ysqReducer from '../reducers/ysq';
import { setQuestions, startSetQuestions } from '../actions/ysq';


const YsqPage = () => {
  const [questions, dispatchQuestions] = useReducer(ysqReducer, []);

  useEffect(() => {
    const data = [{
      text: 'first q'
    }, {
      text: '2nd q'
    }, {
      text: '3rd q'
    }];
    startSetQuestions()(dispatchQuestions);
  }, []);

  useEffect(() => {
    console.log('on q modified', questions);
  }, [questions]);

  return (
    <YsqPageContext.Provider value={{ dispatchQuestions }}>
      <div className="content-container">
        {questions.map((question) => (
          <YsqItem key={question.id} {...question} />
        ))}
      </div>
    </YsqPageContext.Provider>
  );
};

export { YsqPage as default };
