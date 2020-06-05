import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

export const initStore = (initialState = {}) => {
	return createStore(rootReducer, initialState);
}

export const wrapper = createWrapper(initStore);
