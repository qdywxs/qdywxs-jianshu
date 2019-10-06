import axios from "axios";

import {CHANGE_DETAIL_DATA_ACTION} from "./actionTypes";

const changeDetailDataAction = (result) => ({
  type: CHANGE_DETAIL_DATA_ACTION,
  
  title: result.title,
  content: result.content
})


export const getDetailData = () => {
  
  return(dispatch) => {
    axios.get("/api/detailData.json")
      .then((res) => {
        const result = res.data.data;
      
        const action = changeDetailDataAction(result);
      
        dispatch(action); 
      })
      .catch(() => {alert("error")})
  }
}