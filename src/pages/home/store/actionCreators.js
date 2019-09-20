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

const addHomeData = (result, nextPage) => ({  /*2️⃣-⑨：这里可以接收到这个 nextPage；*/
  type: ADD_HOME_DATA,
  moreArticleList: fromJS(result.moreArticleList),
  
  /*❗️❗️❗️2️⃣-⑩：继而，这里就可以将 nextPage 传递给 reducer；*/
  nextPage
})

export const getMoreList = (page) => {  /*❗️2️⃣-⑥：相应地，getMoreList 就会拿到这个 page；*/
  return(dispatch) => {
    
    /*❗️2️⃣-⑦：在请求后端接口时，我们就可以给“接口”带一个“参数”进去，使其等于传递过来的 page！
    先注释掉下面这行代码，我们要给“接口”带“参数”~
    axios.get("/api/homeList.json")
    */
    axios.get("/api/homeList.json?page=" + page)
    
      .then((res) => {
        const result = res.data.data;
        
        const action = addHomeData(result, page + 1);  /*❗️❗️❗️2️⃣-⑧：当我们派发 addHomeData 
                                             这个 action 时，我们不仅可以把获取到的“数据”
                                             result 传递给它，我们还可以将“下一页”page + 1 
                                             也传递给它！*/
      
        dispatch(action); 
      })
      .catch(() => {alert("error")})
  }
}