import {fromJS} from "immutable"; 

import {INIT_HOME_DATA, ADD_HOME_DATA} from "./actionTypes";

const defaultState = fromJS({
  labelList: [],
  articleList: [],
  panelsList: [],
  
  articlePage: 1
  
})

export default (state=defaultState, action) => {  
  if(action.type === INIT_HOME_DATA) {
    return state.merge({  
      labelList: action.labelList,
      articleList: action.articleList,
      panelsList: action.panelsList
    })
  }
  
  if(action.type === ADD_HOME_DATA) {
    
    /*❗️2️⃣-⑫：替换初的 articlePage！
    先注释掉下面这行代码，我们需要用 state.merge() 来改写~
    return state.set("articleList", state.get("articleList").concat(action.moreArticleList))
    */
    return state.merge({
      "articleList": state.get("articleList").concat(action.moreArticleList),
      "articlePage": action.nextPage  /*❗️2️⃣-⑬：这行代码写完，我们的“页码”就自动加了 1！*/
    })
  }
  
  return state;
}