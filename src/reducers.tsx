import { combineReducers } from 'redux';
import { infoPageReducer } from './info-page/info-page.reducer';

export const reducers = combineReducers({
	infoPage: infoPageReducer,
});
