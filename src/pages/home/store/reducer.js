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
    
    return state.merge({
      "articleList": state.get("articleList").concat(action.moreArticleList),
      "articlePage": action.nextPage  
    })
  }
  
  return state;
}