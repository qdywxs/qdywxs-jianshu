import {fromJS} from "immutable"; 

import {INIT_HOME_DATA, ADD_HOME_DATA, CHANGE_SHOW_TO_TOP} from "./actionTypes";

const defaultState = fromJS({
  labelList: [],
  articleList: [],
  panelsList: [],
  articlePage: 1,
  
  showToTop: false  
  
})

export default (state=defaultState, action) => {  
  if(action.type === INIT_HOME_DATA) {
    return state.merge({  
      labelList: action.labelList,
      articleList: action.articleList,
      panelsList: action.panelsList
    })
  };
  
  if(action.type === ADD_HOME_DATA) {
    return state.merge({
      "articleList": state.get("articleList").concat(action.moreArticleList),
      "articlePage": action.nextPage
    })
  };
  
  
  if(action.type === CHANGE_SHOW_TO_TOP) {
    return state.set("showToTop", action.show);
  }
  
  return state;
};