import clickReducer, { DUCK_NAME as COMBINE} from './clickReducer';
//import { otherReducer } from './otherReducer';
import { combineReducers } from 'redux';

export const reducers = {
    [COMBINE]: clickReducer
}

export const rootReducer = combineReducers(reducers);