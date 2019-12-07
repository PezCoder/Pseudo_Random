import ActionType from '../actions/ActionTypes';

const initialState = {
    completed: [],
    upcoming: []
};

const BadgeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.POPULATE_COMPLETED_BADGE:
            return {
                ...state,
                completed: action.payload,
            };
        case ActionType.POPULATE_UPCOMING_BADGE:
            return {
                ...state,
                upcoming: action.payload,
            };
        default:
            return state;
    }
};


export default BadgeReducer;
