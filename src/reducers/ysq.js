const ysqReducerDefaultState = [];

const ysqReducer = (state = ysqReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      console.log('in reducer', action);
      return action.questions;
    default:
      return state;
  }
};

export { ysqReducer as default };
