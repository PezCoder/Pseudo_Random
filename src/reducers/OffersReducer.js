import ActionType from '../actions/ActionTypes';

const initialState = {
  offers: [],
  activeOffer: null,
};

const OfferReducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionType.POPULATE_OFFERS:
    return {
      ...state,
      offers: action.payload,
    };
    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload,
      };
  default:
    return state;
  }
};


export default OfferReducer;
