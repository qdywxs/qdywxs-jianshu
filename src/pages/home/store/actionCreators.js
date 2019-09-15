import axios from "axios";

/*6️⃣-③：先引入“常量”；*/
import {INIT_HOME_DATA} from "./actionTypes";


/*6️⃣-⑦：引入 fromJS 方法；*/
import {fromJS} from "immutable";


/*6️⃣-⑤：在这里定义 action；*/
const initHomeData = (result) => ({
  type: INIT_HOME_DATA,  /*❗️稍后在 actionTypes.js 中定义！*/
  
  /*❗️❗️❗️6️⃣-⑥：这里请一定注意，这里的 data 是从“接口”获取到的“数组”对象，
  它是一个“JS 对象”。
  但在上边的第“3️⃣”步中，“数据项”被 fromJS 修改成了“immutable 对象”，
  因此，这里也应该将 result 转换为“immutable 对象”！*/
  
  /*6️⃣-⑧：将 result 转化为 immutable 对象；*/
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
      
        /*6️⃣-④：获取到数据后，需要去替换初始的空数组；*/
        const action = initHomeData(result);
      
        dispatch(action);  /*❗️6️⃣-⑨：将这个 action 发送给 reducer!*/
      })
      .catch(() => {alert("error")})
  }
}