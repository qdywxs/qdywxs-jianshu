import axios from "axios";

import {INIT_HOME_DATA} from "./actionTypes";


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
        console.log(result);
      
        const action = initHomeData(result);
      
        dispatch(action); 
      })
      .catch(() => {alert("error")})
  }
}