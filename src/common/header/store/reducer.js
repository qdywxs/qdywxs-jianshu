/*4️⃣-㉑：先引入“常量”；*/
import {CHANGE_CLASS_NAME, RESUME_CLASS_NAME, CHANGE_LIST} from "./actionTypes";

import {fromJS} from "immutable";

const defaultState = fromJS({  /*❗️*/
  refresh: false,
  list: []
})

export default (state=defaultState, action) => {
  if(action.type === CHANGE_CLASS_NAME) {
    return state.set("refresh", true); 
  }
  
  if(action.type === RESUME_CLASS_NAME) {
    return state.set("refresh", false); 
  }
  
  /*4️⃣-㉒：编写替换“数据”的逻辑；*/
  if(action.type === CHANGE_LIST) {
    return state.set("list", action.data)
  }
   
  return state;
}