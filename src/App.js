import React, { Component } from "react";

import {GlobalStyle} from "./style";

import {GlobalIconStyle} from "./statics/iconfont/iconfont";

import Header from "./common/header";

import { Provider } from "react-redux";


import store from "./store";

class App extends Component  {  
  render() {  
    return (
      <div>
        <GlobalStyle />
        <GlobalIconStyle />
      
        <Provider store={store}>  
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App; 