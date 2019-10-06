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

import { connect } from "react-redux";

import {actionCreators} from "./store"; 


class Home extends Component {
  
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  
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
        
        {this.props.showToTop ?
          <ToTop onClick={this.handleScrollTop}>  
            <span className="up">^</span>
            <span className="tooltip">回到顶部</span>
          </ToTop>
          :null
        }
      </div>
    )
  }

  componentDidMount() { 
    this.props.changeHomeData();
    
    this.bindEvent();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeShowToTop)
  }

  bindEvent() {
    window.addEventListener("scroll", this.props.changeShowToTop) 
  }

}

const mapStateToProps = (state) => ({
  showToTop: state.getIn(["home", "showToTop"])
})


const mapDispatchToProps = (dispatch) => ({ 
  changeHomeData() { 
    const action = actionCreators.getHomeInfo();
    dispatch(action)
  },
  
  changeShowToTop() {
    if(document.documentElement.scrollTop > 120) {
      const action = actionCreators.changeShowToTopAction(true); 
      dispatch(action)
    }else {
      const action = actionCreators.changeShowToTopAction(false);
      dispatch(action)
    }
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)