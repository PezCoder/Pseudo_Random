import ActionType from '../actions/ActionTypes';

const initialState = null;

var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

const alerts = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case ActionType.SHOW_ALERT:
            payload.id = ID();
            return payload;
        case ActionType.CLOSE_ALERT:
            return null;
        default:
            return state;
    }
};


export default alerts;
