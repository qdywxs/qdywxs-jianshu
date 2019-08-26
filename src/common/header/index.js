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
          <SearchInput />
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
              <LabelLink href="/">
                区块链
              </LabelLink>
              <LabelLink href="/">
                故事
              </LabelLink>
              <LabelLink href="/">
                小程序
              </LabelLink>
              <LabelLink href="/">
                前端一万小时
              </LabelLink>
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
   
    /*❌这行代码中，state 是 src 目录下 store 中 reducer.js 里的“JS 对象”，
    而 state.header 又是 header 目录下 store 中 reducer.js 的“immutable 对象”。
    这样“JS 对象”和“immutable 对象”揉在一起获取“数据”的方式很不利于后期维护！
    ❗️故，我们既然用了 immutable，那么我们最好就把所有“数据”统一为“immutable 对象”。
    */
    /*3️⃣既然上一步已经让 state 成为“immutable 对象”，那么这里就可以用其提供的 
    get 方法获取“数据”。由于这里有两层 get，故可以用 immutable 提供的 getIn([]) 方法简写~
    refresh: state.header.get("refresh")
    */
    refresh: state.getIn(["header", "refresh"])  /*❗️它其实是 
                                          refresh: state.get("header").get("refresh")
                                          的简写！*/
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); 