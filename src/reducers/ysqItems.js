const ysqItemsReducerDefaultState = [];

const ysqItemsReducer = (state = ysqItemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      console.log('in reducer');
      return action.questions;
    default:
      return state;
  }
};

export { ysqItemsReducer as default };
