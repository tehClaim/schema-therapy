import database from '../firebase/firebase';

// SET_QUESTIONS
export const setQuestions = (questions) => ({
  type: 'SET_QUESTIONS',
  questions
});

export const startSetQuestions = () => (dispatch, getState) => (
  database.ref('questions')
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
    })
);
