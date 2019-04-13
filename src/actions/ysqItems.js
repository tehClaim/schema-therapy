import database from '../firebase/firebase';

// SET_QUESTIONS
export const setQuestions = (questions) => ({
  type: 'SET_QUESTIONS',
  questions
});

export const startSetQuestions = () => {
  return (dispatch, getState) => {
    console.log('f never calls');
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
