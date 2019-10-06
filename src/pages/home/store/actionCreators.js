import axios from "axios";

import {INIT_HOME_DATA, ADD_HOME_DATA} from "./actionTypes";

import {fromJS} from "immutable";


const initHomeData = (result) => ({
  type: INIT_HOME_DATA, 
 
  labelList: fromJS(result.labelList),
  articleList: fromJS(result.articleList),
  panelsList: fromJS(result.panelsList)
});

export const getHomeInfo = () => {
  return(dispatch) => {
    axios.get("/api/homeData.json")
      .then((res) => {
        const result = res.data.data;
      
        const action = initHomeData(result);
        dispatch(action); 
      })
      .catch(() => {alert("error")})
  }
}

const addHomeData = (result, nextPage) => ({  
  type: ADD_HOME_DATA,
  moreArticleList: fromJS(result.moreArticleList),
  
  nextPage
})

export const getMoreList = (page) => { 
  return(dispatch) => {

    axios.get("/api/homeList.json?page=" + page)
    
      .then((res) => {
        const result = res.data.data;
        
        const action = addHomeData(result, page + 1);  
      
        dispatch(action); 
      })
      .catch(() => {alert("error")})
  }
}