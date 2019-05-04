import database from '../firebase/firebase';

// SET_SCHEMAS
export const setSchemas = (schemas) => ({
  type: 'SET_SCHEMAS',
  schemas
});

export const startSetSchemas = () => {
  return (dispatch, getState) => {
    return database.ref('schemas')
      .once('value')
      .then((snapshot) => {
        const schemas = [];
        snapshot.forEach((childSnapshot) => {
          schemas.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setSchemas(schemas));
      });
  };
};
