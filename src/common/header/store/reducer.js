import {CHANGE_CLASS_NAME, RESUME_CLASS_NAME} from "./actionTypes";

import {fromJS} from "immutable";

const defaultState = fromJS({  
  refresh: false
})

export default (state=defaultState, action) => {
  if(action.type === CHANGE_CLASS_NAME) {
    
    return state.set("refresh", true);  
    
  }
  
  if(action.type === RESUME_CLASS_NAME) {

    return state.set("refresh", false);
    
  }
   
  return state;
}