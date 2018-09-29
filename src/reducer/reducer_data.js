import {IMAGE_DATA, IMAGE_TERM_DATA} from '../action/index';

export  function ImageData (state=[],action){
    console.log(action.payload);
    
    switch(action.type){
        
        case IMAGE_DATA:
            return action.payload.data
        case IMAGE_TERM_DATA:
            return action.payload.data.results
        default:
                return state
    }
} 