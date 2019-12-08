import ActionType from '../actions/ActionTypes';

const initialState = {
  isLoading: null,
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionType.SHOW_GLOBAL_LOADER:
    return {
      ...state,
      isLoading: true,
    };
    case ActionType.HIDE_GLOBAL_LOADER:
      return {
        ...state,
        isLoading: false,
      };
  default:
    return state;
  }
};


export default CommonReducer;
