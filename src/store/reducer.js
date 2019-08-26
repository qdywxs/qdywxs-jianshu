/*2️⃣-①：之前，我们的 combineReducers 来自 redux。但有了 redux-immutable 后，
redux-immutable 也为我们提供了一个 combineReducers。
用它生成的“数据”就为“immutable 对象”
import {combineReducers} from "redux";  
*/
import {combineReducers} from "redux-immutable";

import {reducer as headerReducer} from "../common/header/store"; 


const reducer = combineReducers({  /*2️⃣-②：❗️生成的 reducer 是一个“immutable 对象”！*/
  header: headerReducer
})


export default reducer;