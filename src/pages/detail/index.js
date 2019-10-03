import React, {Component} from "react";

import {
  DetailWrapper,
  Header,
  Content
} from "./style.js";

import {connect} from "react-redux";

import {actionCreators} from "./store";  /*❗️❗️❗️引入 actionCreators!*/

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
  
  componentDidMount() {  /*❗️❗️❗️5️⃣当组件挂载完毕，就去请求“数据”；*/
    /*5️⃣-①：这里应该怎么去请求“数据”呢？*/
    
    /*5️⃣-③：因此可以通过 this.props.getDetail 来调用 store 中的
    getDetail；*/
    this.props.getDetail();
  }
}

const mapStateToProps = (state) => { 
  
  return {  
    title: state.getIn(["detail", "title"]),  
    content: state.getIn(["detail", "content"]) 
  }

}


/*❗️4️⃣-②：接下来，我们定义哪些“用户的操作”应该
当作 action，并传给 store；
*/
const mapDispatchToProps = (dispatch) => {  /*4️⃣-③：把 store 里的“dispatch 方法”
                                            作为“参数”传递给 mapDispatchToProps；*/
  return {
    getDetail() {  /*❗️5️⃣-②：在这里定义 getDetail 会被当作 action 传给 store；*/
      
      /*❗️5️⃣-④：Redux-thunk 中，“异步”代码我们是放在 action 中进行。
      这里我们仅作方法的“调用”；*/
      const action = actionCreators.getDetailData();
      
      dispatch(action)
    
    }
  }
}


/*❗️❗️❗️4️⃣-①：给 connect 传递第三个“参数”——mapDispatchToProps，
表示——我们把 store 的 dispatch 方法“挂载”到 Detail 组件的 props 上。
即，我们可以定义哪些“用户的操作”应该当作 action，并传给 store；
*/
export default connect(mapStateToProps, mapDispatchToProps)(Detail);  