import axios from "axios";

import {CHANGE_LOGIN_DATA_ACTION, LOGOUT} from "./actionTypes";

const changeLoginDataAction = () => ({
  type: CHANGE_LOGIN_DATA_ACTION,
  login: true 
})

export const loginAction = (account, password) => {  
  return(dispatch) => {
    axios.get("/api/loginData.json?account=" + account + "&password=" + password) 
      .then((res) => {
        const result = res.data.data;
        if(result) { 
          const action = changeLoginDataAction();
          dispatch(action);   
        }else {
          alert("登录失败！")
        }
      })
      .catch(() => {alert("error")})
  }
}

export const logout = () => ({
  type: LOGOUT,
  login: false
})