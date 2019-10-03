import React, {Component} from "react";

import {
  DetailWrapper,
  Header,
  Content
} from "./style.js";

import {connect} from "react-redux";

import {actionCreators} from "./store"; 

class Detail extends Component {
  
  render() {
    return(
      <DetailWrapper>
        <Header>{this.props.title}</Header>
     
        <Content 
          dangerouslySetInnerHTML={{__html: this.props.content}}
        />

      </DetailWrapper>
    )
  }
  
  /*❗️❗️❗️4️⃣-①：页面挂载完成，去异步获取详情页“数据”时，
  给这个“异步函数”传递一个“上一页传递过来的 id 值”；*/
  componentDidMount() {  
    this.props.getDetail(this.props.match.params.id);  /*❗️❗️❗️*/
  }
}

const mapStateToProps = (state) => { 
  
  return {  
    title: state.getIn(["detail", "title"]),  
    content: state.getIn(["detail", "content"]) 
  }

}


const mapDispatchToProps = (dispatch) => {  
  return {
    getDetail(id) {  /*4️⃣-②：相应地，这里会拿到一个“参数”id；*/
      const action = actionCreators.getDetailData(id);  /*4️⃣-③：在调用 actionCreators 
                                                      时，我把这个 id 传给它；*/
      
      dispatch(action)
    
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);  