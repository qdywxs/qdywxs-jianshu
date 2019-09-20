import React, {Component} from "react";

import {Link} from "react-router-dom";  /*❗️引入 Link 进行“单页”应用页面跳转！*/

/*❗️2️⃣从 home 目录下的 style.js 中引入各个定义好的“样式组件”；*/
import {
  PanelImage
} from "../style";

class Panels extends Component {
  render() {
    
    /*❗️❗️❗️1️⃣：将“标签”拆分成一个个的“样式组件”；*/
    return(
      <div>
       
        <PanelImage>
          <Link to="/">
            <img src="https://qdywxs.github.io/jianshu-images/panel01.png" alt="" />
          </Link>
        </PanelImage>
       

        <PanelImage>
          <Link to="/">
            <img src="https://qdywxs.github.io/jianshu-images/panel02.png" alt="" />
          </Link>
        </PanelImage>
        
        
        <PanelImage>
          <Link to="/">
            <img src="https://qdywxs.github.io/jianshu-images/panel03.png" alt="" />
          </Link>  
        </PanelImage>

        
        <PanelImage>
          <Link to="/">
            <img src="https://qdywxs.github.io/jianshu-images/panel04.png" alt="" />
          </Link>
        </PanelImage>
       
        
        <PanelImage>
          <Link to="/">
            <img src="https://qdywxs.github.io/jianshu-images/panel05.png" alt="" />
          </Link>
        </PanelImage>

      </div>
    )
  }
}

export default Panels;