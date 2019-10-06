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
      
              <Route path="/" exact component={Home}></Route>  
                  
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>

      </div>
    );
  }
}

export default App; 