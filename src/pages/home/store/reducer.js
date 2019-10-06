import {fromJS} from "immutable"; 

import {INIT_HOME_DATA} from "./actionTypes";

const defaultState = fromJS({
  labelList: [],
  
  articleList: [],
  
  panelsList: []
  
})

export default (state=defaultState, action) => {  
  if(action.type === INIT_HOME_DATA) {
    return state.merge({  
      labelList: action.labelList,
      articleList: action.articleList,
      panelsList: action.panelsList
    })
  }
  
  return state;
}