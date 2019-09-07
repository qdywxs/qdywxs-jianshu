import React, {Component} from "react";

import {Link} from "react-router-dom";

/*❗️2️⃣从 home 目录下的 style.js 中引入各个定义好的“样式组件”；*/
import {
  PanelImage
} from "../style";

class Panels extends Component {
  render() {
    
    /*❗️❗️❗️1️⃣：将“标签”拆分成一个个的“样式组件”；*/
    return(
      <div>
        <Link to="#">
          <PanelImage>
            <img src="https://qdywxs.github.io/jianshu-images/panel01.png" alt="" />
          </PanelImage>
        </Link>
        <Link to="#">
          <PanelImage>
            <img src="https://qdywxs.github.io/jianshu-images/panel02.png" alt="" />
          </PanelImage>
        </Link>
        <Link to="#">
          <PanelImage>
            <img src="https://qdywxs.github.io/jianshu-images/panel03.png" alt="" />
          </PanelImage>
        </Link>
        <Link to="#">
          <PanelImage>
            <img src="https://qdywxs.github.io/jianshu-images/panel04.png" alt="" />
          </PanelImage>
        </Link>
        <Link to="#">
          <PanelImage>
            <img src="https://qdywxs.github.io/jianshu-images/panel05.png" alt="" />
          </PanelImage>
        </Link>
      </div>
    )
  }
}

export default Panels;