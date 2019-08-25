import React, { Component } from "react";

import {GlobalStyle} from "./style";

import {GlobalIconStyle} from "./statics/iconfont/iconfont";

import Header from "./common/header";

/*❗️❗️❗️5️⃣-②：有了 React-redux 后，我们会首先从 react-redux 引入一个 Provider 组件（
它是 React-redux 的核心 API 之一）；*/
import { Provider } from "react-redux";

/*5️⃣-③：同时，在本文件中引入 store；*/
import store from "./store";

class App extends Component  {  
  render() {  
    return (
      <div>
        <GlobalStyle />
        <GlobalIconStyle />
      
        {/*5️⃣-④：用 Provider 组件包裹“组件”Header；*/}
        <Provider store={store}>  {/*❗️❗️❗️5️⃣-⑤：给 Provider 添加一个属性，
                                  使其等于“5️⃣-③”中引入的 store。
                                  这一步的意思为：
                                  “提供器 Provider”连接了 store，那么 Provider 里边的所有
                                  “组件”（如这里的 Header）都有能力获取到 store 里的数据了！
                                  */}
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App; 