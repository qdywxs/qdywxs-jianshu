import React, { Component } from "react";

import {GlobalStyle} from "./style";

/*9️⃣-⑥：引入 iconfont.js 中定义的 GlobalIconStyle；*/
import {GlobalIconStyle} from "./statics/iconfont/iconfont";

import Header from "./common/header";

class App extends Component  {  
  
  render() {  
    return (
      <div>
        <GlobalStyle />
      
        {/*9️⃣-⑦：同理，将 <GlobalIconStyle /> 放在组件外层，后边的组件都能应用到 icon。*/}
        <GlobalIconStyle />
      
        <Header />
      </div>
    );
  }
}

export default App; 