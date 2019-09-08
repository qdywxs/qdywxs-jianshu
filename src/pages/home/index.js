import React, {Component} from "react";

/*从 components 里边引入各小组件；*/
import Content from "./components/Content";
import Label from "./components/Label";
import Panels from "./components/Panels";
import Download from "./components/Download";

/*从当前目录下的 style.js 中，引入“样式组件”；*/
import {
  Section,
  Aside,
  Main,
  ToTop
  
} from "./style.js";


class Home extends Component {
  render() {
    return(  /*写出“首页”的 JSX；*/
      <div>
        <Section className="layout clearfix">  {/*❗️我们在 common.css 里已对
                                               class 为 section 的元素进行了样式的
                                               制定，故这里直接用即可！*/}
          <Aside>
            <Panels />
            <Download />
          </Aside>
        
          <Main>
            <img className="banner-img" src="https://qdywxs.github.io/jianshu-images/carousel01.jpg" alt="" />
            
            <Label />
            <Content />
          </Main>
        </Section>
        
        
        <ToTop>  {/*❗️对于这种代码量很小的“功能”，我们可以不用分出一个“组件”进行单独管理！*/}
          <span className="up">^</span>
          <span className="tooltip">回到顶部</span>
        </ToTop>
      </div>
    )
  }
}

export default Home;