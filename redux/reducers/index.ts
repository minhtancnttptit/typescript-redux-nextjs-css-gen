import { CombinedState, combineReducers } from 'redux';
import boxShadowReducer from './BoxShadowReducer';

const rootReducer = combineReducers({
	boxShadow: boxShadowReducer,
})

export default rootReducer;
