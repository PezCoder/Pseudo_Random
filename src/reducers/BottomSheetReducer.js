import ActionType from '../actions/ActionTypes';


const initialState = {
    data: null
};


const BottomSheetReducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionType.SET_BOTTOM_SHEET:
            return {
                ...state,
                data: action.payload
            };
        case ActionType.CLOSE_BOTTOM_SHEET:
            return {
                ...state,
                data: null,
            };
        default:
            return state;
    }
};

export default BottomSheetReducer;