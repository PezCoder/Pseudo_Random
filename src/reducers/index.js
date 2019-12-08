import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import BottomSheetReducer from './BottomSheetReducer';
import ALertReducer from './AlertReducer';
import OffersReducer from './OffersReducer';
import BadgeReducer from './BadgeReducer';
import CommonReducer from './CommonReducer';

const allReducers = combineReducers({
  user: UserReducer,
  bottomSheet: BottomSheetReducer,
  alert: ALertReducer,
  offers: OffersReducer,
  badges: BadgeReducer,
  common: CommonReducer,
});

export default allReducers;