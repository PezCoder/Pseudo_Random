import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import BottomSheetReducer from './BottomSheetReducer';
import ALertReducer from './AlertReducer';
import OffersReducer from './OffersReducer';

const allReducers = combineReducers({
    user: UserReducer,
    bottomSheet: BottomSheetReducer,
    alert: ALertReducer,
    offers: OffersReducer,
});

export default allReducers;