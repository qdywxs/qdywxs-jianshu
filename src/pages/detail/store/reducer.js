import {fromJS} from "immutable";

import {CHANGE_DETAIL_DATA_ACTION} from "./actionTypes";

const defaultState = fromJS({
  title: "",
  content: ""
});

export default (state=defaultState, action) => {
  if(action.type === CHANGE_DETAIL_DATA_ACTION) {
    return state.merge({
      title: action.title,
      content: action.content
    })
  }
  
  return state;
}