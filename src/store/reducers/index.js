import { combineReducers } from 'redux';
import languageReducer from './i18n.reducer';

const createReducer = asyncReducers => 
    combineReducers({
        common: languageReducer,
        ...asyncReducers
    });
    
export default createReducer;