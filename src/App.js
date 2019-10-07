import React, { Component } from "react";

import {GlobalStyle} from "./style";

import {GlobalIconStyle} from "./statics/iconfont/iconfont";

import Header from "./common/header";

class App extends Component  {  
  
  render() {  
    return (
      <div>
        <GlobalStyle />
      
        <GlobalIconStyle />
      
        <Header />
      </div>
    );
  }
}

export default App; 