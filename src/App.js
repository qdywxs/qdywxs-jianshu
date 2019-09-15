import React, { Component } from "react";

import {GlobalStyle} from "./style";

import {GlobalIconStyle} from "./statics/iconfont/iconfont";

import {BrowserRouter, Route} from "react-router-dom";

import Header from "./common/header";

/*3️⃣-⑤：引入组件 Home 和 Detail；*/
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
      
                {/*❗️❗️❗️3️⃣-⑥：将“渲染”的内容替换为“组件”；*/}
              <Route path="/" exact component={Home}></Route>  {/*❗️*/}
                  
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>

      </div>
    );
  }
}

export default App; 