import ActionType from '../actions/ActionTypes';

const initialState = {
  offers: []
};

const OfferReducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionType.POPULATE_OFFERS:
    return {
      ...state,
      offers: action.payload,
    };
  default:
    return state;
  }
};


export default OfferReducer;
