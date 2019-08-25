/*7️⃣-④：将 compose 函数从 redux 中引入进来；*/
import { createStore, compose } from "redux";  

import reducer from "./reducer"; 

/*7️⃣-①：直接拷贝官方文档里的代码；*/
const composeEnhancers =
  /*❗️7️⃣-②：这行代码可以注释掉，因为浏览器的应用，故 window 的 object 是肯定存在的！
  typeof window === 'object' && 
  */
  
  /*❗️7️⃣-③：下面这行代码的意思为：
  如果 window 下边有 __REDUX_DEVTOOLS_EXTENSION__ 这个变量的话，
  就执行这个变量对应的方法 window.__REDUX_DEVTOOLS_EXTENSION__()。
  否则，
  就执行 compose 函数；*/
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


/*7️⃣-⑤：继续拷贝官网的代码；*/
const enhancer = composeEnhancers(  /*7️⃣-⑥：表示将 composeEnhancers 执行后的
                                    结果赋值给 enhancer；*/
  /*❗️我们暂时不配置“中间件”~
  applyMiddleware(...middleware)
  */
);

const store = createStore(
  reducer,
 
  enhancer  /*7️⃣-⑦：直接将 enhancer 传递进来即可！*/
  
  
);  

export default store; 