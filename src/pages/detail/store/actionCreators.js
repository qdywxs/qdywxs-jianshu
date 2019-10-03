import axios from "axios";

/*6️⃣-③：先引入“常量”；*/
import {CHANGE_DETAIL_DATA_ACTION} from "./actionTypes";

/*6️⃣-⑦：引入 fromJS 方法；*/
import {fromJS} from "immutable";


/*6️⃣-⑤：在这里定义 action；*/
const changeDetailDataAction = (result) => ({
  type: CHANGE_DETAIL_DATA_ACTION,
  
  /*❗️❗️❗️6️⃣-⑥：这里请一定注意，这里的“数据”是从“接口”获取到的“JS 对象”，
  但在上边的第3️⃣步中，“数据项”被 fromJS 修改成了“immutable 对象”。
  因此，这里也应该将 result 转换为“immutable 对象”！*/
  
  /*6️⃣-⑧：将 result 转化为 immutable 对象；*/
  title: fromJS(result.title),
  content: fromJS(result.content)
})


export const getDetailData = () => {
  
  return(dispatch) => {
    axios.get("/api/detailData.json")
      .then((res) => {
        const result = res.data.data;
      
        /*❗️6️⃣-④：获取到数据后，需要去替换初始的“空字符”；*/
        const action = changeDetailDataAction(result);
      
        dispatch(action);  /*❗️❗️❗️6️⃣-⑨：将这个 action 发送给 reducer！*/
      })
      .catch(() => {alert("error")})
  }
}