import database from '../firebase/firebase';

// SET_QUESTIONS
export const setQuestions = (questions) => ({
  type: 'SET_QUESTIONS',
  questions
});

export const startSetQuestions = () => {
  return (dispatch, getState) => {
    return database.ref('questions')
      .once('value')
      .then((snapshot) => {
        const questions = [];
        snapshot.forEach((childSnapshot) => {
          questions.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setQuestions(questions));
      });
  };
};

// EDIT_YSQ_ITEM
export const editYsqItem = (id, updates) => ({
  type: 'EDIT_YSQ_ITEM',
  id,
  updates
});
