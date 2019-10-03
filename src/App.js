import React, { Component } from "react";

import {GlobalStyle} from "./style";

import {GlobalIconStyle} from "./statics/iconfont/iconfont";

import {BrowserRouter, Route} from "react-router-dom";

import Header from "./common/header";

import Home from "./pages/home";
import Detail from "./pages/detail";

import { Provider } from "react-redux";

import store from "./store";

class App extends Component  {  
  render() {  
    return (
      <div>
        <GlobalStyle />
        <GlobalIconStyle />
 
        <Provider store={store}>             
          <BrowserRouter>
            <div>
              <Header />
      
              <Route path="/" exact component={Home}></Route>  {/*❗️*/}
                  
              {/*❗️2️⃣-①：由于路径要“完全”匹配 /detail 时，才会进入 Detail 组件。
              但 /detail/1 和 /detail 不完全匹配，所以上边会出现空白页面。
              可以怎么修改呢？
              <Route path="/detail" exact component={Detail}></Route>
              */}
              
              {/*2️⃣-②：可以改写为 /detail/:id，给路径传递一个额外的“参数”id；*/}
              <Route path="/detail/:id" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>

      </div>
    );
  }
}

export default App; 