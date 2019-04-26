const ysqItemsReducerDefaultState = [];

const ysqItemsReducer = (state = ysqItemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return action.questions;
    case 'EDIT_YSQ_ITEM':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.updates
          };
        }
        return item;
      });
    default:
      return state;
  }
};

export { ysqItemsReducer as default };
