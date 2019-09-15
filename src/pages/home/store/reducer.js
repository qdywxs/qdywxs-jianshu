import {fromJS} from "immutable"; 

/*7️⃣-①：先引入“常量”；*/
import {INIT_HOME_DATA} from "./actionTypes";

const defaultState = fromJS({
  labelList: [],
  
  articleList: [],
  
  panelsList: []
  
})

export default (state=defaultState, action) => {  
  /*7️⃣-②：编写替换“数据”的逻辑；*/
  if(action.type === INIT_HOME_DATA) {
    return state.merge({  /*❗️注意 merge 的使用！*/
      labelList: action.labelList,
      articleList: action.articleList,
      panelsList: action.panelsList
    })
  }
  
  return state;
}