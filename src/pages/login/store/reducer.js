import {fromJS} from "immutable";  

import {CHANGE_LOGIN_DATA_ACTION, LOGOUT} from "./actionTypes";

const defaultState = fromJS({
  login: false 
});

export default (state=defaultState, action) => {
  if(action.type === CHANGE_LOGIN_DATA_ACTION) {
    return state.set("login", action.login);
  };
  
  if(action.type === LOGOUT) {
    return state.set("login", action.login);
  }
  
  return state;
}