import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import BottomSheetReducer from './BottomSheetReducer';


const allReducers = combineReducers({
    user: UserReducer,
    bottomSheet: BottomSheetReducer
});

export default allReducers;