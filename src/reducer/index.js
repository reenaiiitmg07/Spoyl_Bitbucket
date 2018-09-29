import { combineReducers } from 'redux';

import {ImageData} from './reducer_data';


let rootReducer = combineReducers({
    data:ImageData
});

export default rootReducer;