/*4️⃣-⑭：先引入“常量”*/
import {CHANGE_CLASS_NAME, RESUME_CLASS_NAME, CHANGE_LIST} from "./actionTypes";


import axios from "axios";

/*4️⃣-⑱：引入 fromJS 方法；*/
import {fromJS} from "immutable";

export const changeClassNameAction = () => ({
  type: CHANGE_CLASS_NAME
})

export const resumeClassNameAction = () => ({
  type: RESUME_CLASS_NAME
})

/*4️⃣-⑯：在这里定义 action；*/
const changeListAction = (data) => ({
  type: CHANGE_LIST,
  
  /*❗️❗️❗️4️⃣-⑰：这里请一定注意，这里的 data 是从“接口”获取到的“数组”对象，
  它是一个“JS 对象”。
  但在上边的第“4️⃣-⑩”步中，list 数据项被 fromJS 修改成了“immutable 对象”，
  因此，这里也应该将 data 转换为“immutable 对象”！*/
  /*4️⃣-⑲：将 data 转化为“immutable 对象”~
  data: data  
  */
  data: fromJS(data)
})

export const initLabelAction = () => {
  return(dispatch) => {
    axios.get("/api/headerList.json")
      .then((res) => {

        const data = res.data


        /*4️⃣-⑮：获取到数据后，需要去替换初始的空数组；*/
        const action = changeListAction(data.data);
        dispatch(action)
      })
      .catch(() => {alert("error")})
  }
}