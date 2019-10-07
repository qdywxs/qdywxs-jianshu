import React, {Component} from "react";

import {
  HeaderWrapper,
  Logo,
  
  Navbar,
  ItemList,
  LinkList,
  
  SearchArea,
  SearchInput,
  SearchPanel,
  PanelTitle,
  PanelChange,
  PanelLabels,
  LabelLink,
  
  Extra,
  ExtraLink
  
} from "./style";

import { connect } from "react-redux";

import {actionCreators} from "./store";


class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo>
          <img src="https://qdywxs.github.io/jianshu-images/logo.png" alt="logo" />
        </Logo>

        <Navbar className="clearfix">
          <ItemList className="active">
            <LinkList href="/">
              首页
            </LinkList>
          </ItemList>

          <ItemList>
            <LinkList href="/">
              下载APP
            </LinkList>           
          </ItemList>
        </Navbar>
      
        <SearchArea>

          <SearchInput
            onFocus={() => this.props.handleInputFocus(this.props.list)}
          />
      
          <span className="iconfont icon-search">&#xe63e;</span>
      
          <SearchPanel>
            <PanelTitle>
              热门搜索
      
              <PanelChange
                onMouseDown={this.props.handleMouseDown}
                onMouseUp={this.props.handleMouseUp}
              > 
                <span className={this.props.refresh ? "iconfont refresh" : "iconfont"}>&#xe65f;</span>

                换一批
              </PanelChange>
            </PanelTitle>
      
            <PanelLabels className="clearfix">
              {
                this.props.list.map((item) => {
                  return <LabelLink key={item} href="/">{item}</LabelLink>
                })
              }
            </PanelLabels>
          </SearchPanel>
        </SearchArea>
      
      
        <Extra>
          <span className="iconfont icon-textsize" >&#xe739;</span>
          <ExtraLink className="login" href="/">
            登录
          </ExtraLink>
          <ExtraLink className="register" href="/">
            注册
          </ExtraLink> 
      
          <ExtraLink className="writing" href="/">
            <span className="iconfont icon-pen">&#xe600;</span>
            写文章
          </ExtraLink>     
        </Extra>
      </HeaderWrapper>
    )
  }

}

const mapStateToProps = (state) => { 
  return { 
    refresh: state.getIn(["header", "refresh"]),
    
    list: state.getIn(["header", "list"])
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    handleMouseDown() { 
      const action = actionCreators.changeClassNameAction(); 
      dispatch(action)
    
    },

    handleMouseUp() {
      const action = actionCreators.resumeClassNameAction();
      dispatch(action)
    },
    
    
    handleInputFocus(list) {  
      if(list.size === 0) {  
        const action = actionCreators.initLabelAction();
        dispatch(action)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); 