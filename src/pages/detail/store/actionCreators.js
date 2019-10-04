import axios from "axios";

import {CHANGE_DETAIL_DATA_ACTION} from "./actionTypes";

import {fromJS} from "immutable";


const changeDetailDataAction = (result) => ({
  type: CHANGE_DETAIL_DATA_ACTION,

  title: fromJS(result.title),
  content: fromJS(result.content)
})


export const getDetailData = (id) => {  
  
  return(dispatch) => {
    

    axios.get("/api/detailData.json?id=" + id)  
      .then((res) => {
        const result = res.data.data;
      
        const action = changeDetailDataAction(result);
      
        dispatch(action); 
      })
      .catch(() => {alert("error")})
  }
}