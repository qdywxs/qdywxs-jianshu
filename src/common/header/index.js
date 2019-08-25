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

/*🔟-⑧-1：简化这里的引用！
import {changeClassNameAction, resumeClassNameAction} from "../../store/actionCreators";
*/
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
    
    /*❗️❗️❗️🔟-⑧-2：既然“数据”已经放到了自己的 Header 组件里，这里“映射”的时候就需要多加一层！
    refresh: state.refresh  
    */
    refresh: state.header.refresh
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    handleMouseDown() { 
    
      const action = actionCreators.changeClassNameAction();  /*🔟-⑧-3：这里需要在 
                                               changeClassNameAction 前边加上
                                               actionCreators；*/
  
      dispatch(action)
    
    },

    handleMouseUp() {
      const action = actionCreators.resumeClassNameAction();  /*🔟-⑧-4：同理，
                                                              加上前缀；*/
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); 