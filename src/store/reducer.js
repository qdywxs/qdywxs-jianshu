import {combineReducers} from "redux";  /*🔟-⑨-2：从 redux 中引入一个名为 
                                        combineReducers 的函数，其用于“合并”那些
                                        小的 reducer；*/

import {reducer as headerReducer} from "../common/header/store";  /*🔟-⑨-1：先将小的 reducer
                                                         拿到大的 reducer 中；*/

/*❓🔟-⑨-3：怎么“合并”呢？*/
const reducer = combineReducers({  /*🔟-⑨-4：直接调用这个“函数”，传入小的 reducer；*/
  header: headerReducer
})

/*🔟-⑨-4：最后，将这个“合并”好的 reducer 导出！*/
export default reducer;