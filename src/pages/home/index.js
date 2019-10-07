import React, {Component} from "react";

import Content from "./components/Content";
import Label from "./components/Label";
import Panels from "./components/Panels";
import Download from "./components/Download";

import {
  Section,
  Aside,
  Main,
  ToTop
  
} from "./style.js";


class Home extends Component {
  render() {
    return( 
      <div>
        <Section className="layout clearfix"> 
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
        
        
        <ToTop>  
          <span className="up">^</span>
          <span className="tooltip">回到顶部</span>
        </ToTop>
      </div>
    )
  }
}

export default Home;