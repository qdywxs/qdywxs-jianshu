import {CHANGE_CLASS_NAME, RESUME_CLASS_NAME} from "./actionTypes";

const defaultState = {
  refresh: false
}

export default (state=defaultState, action) => {
  if(action.type === CHANGE_CLASS_NAME) {
    return {
      refresh: true
    }
  }
  
  if(action.type === RESUME_CLASS_NAME) {
    return {
      refresh: false
    }
  }
   
  return state;
}