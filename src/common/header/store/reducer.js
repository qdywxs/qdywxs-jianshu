import {CHANGE_CLASS_NAME, RESUME_CLASS_NAME} from "./actionTypes";

import {fromJS} from "immutable";

const defaultState = fromJS({  /*❗️*/
  refresh: false
})

export default (state=defaultState, action) => {
  if(action.type === CHANGE_CLASS_NAME) {
    
    /*❗️2️⃣-⑤：当用户 mousedown 按钮时，会派发一个 action 给到 reducer，
    reducer 给 store 返回一个新的数据。由于上一步中，我们已经让 state 变为了
    immutable 对象，这里就不能再像原来那样返回“普通对象”了！
    ❗️❗️❗️需要利用 immutable 提供的 set() 方法来设置“数据”！
    它的背后原理为：immutable 对象的 set 方法会结合“之前 immutable 的值”和“设置的值”，
    返回一个全新的对象（它并没有去改“原始 state”）！
    return {
      refresh: true
    }
    */
    return state.set("refresh", true);  /*🚀注意 .set() 方法的格式！*/
    
  }
  
  if(action.type === RESUME_CLASS_NAME) {
    /*同理，把这里的代码注释掉，并进行改写~
    return {
      refresh: false
    }
    */
    return state.set("refresh", false);
    
  }
   
  return state;
}