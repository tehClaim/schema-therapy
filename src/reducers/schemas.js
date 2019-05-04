const schemasReducerDefaultState = [];

const schemasReducer = (state = schemasReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SCHEMAS':
      return action.schemas;
    default:
      return state;
  }
};

export { schemasReducer as default };
