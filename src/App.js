import React, { Component } from "react";

import {GlobalStyle} from "./style";

import {GlobalIconStyle} from "./statics/iconfont/iconfont";

import {BrowserRouter, Route} from "react-router-dom";

import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";

import Write from "./pages/write";

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
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/login" exact component={Login}></Route>

              <Route path="/write" exact component={Write}></Route> 

            </div>
          </BrowserRouter>
        </Provider>

      </div>
    );
  }
}

export default App; 