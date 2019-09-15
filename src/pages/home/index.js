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

/*❗️❗️❗️4️⃣-①：从 react-redux 中引入 connect 方法（它也是 React-redux 的核心 API 之一），
connect 的作用很明确——就是“连接”的意思！*/
import { connect } from "react-redux";


import {actionCreators} from "./store";  /*❗️引入 actionCreators！*/


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

  componentDidMount() {  /*5️⃣当组件挂载完毕，就去请求“数据”；*/
    /*5️⃣-①：这里应该怎么去请求“数据”呢？*/
    
    /*❗️5️⃣-③：因此可以通过 this.props.changeHomeData 来调用 store 中
    的 changeHomeData；*/
    this.props.changeHomeData();
  }
  
}


/*❗️❗️❗️4️⃣-⑤：接下来，我们定义哪些“用户的操作”
应该当作 action，并传给 store；*/
const mapDispatchToProps = (dispatch) => {  /*4️⃣-⑥：把 store 里的“dispatch 方法”
                                            作为“参数”传递给 mapDispatchToProps；*/
  return {
    changeHomeData() {  /*5️⃣-②：在这里定义 changeHomeData 会被当作 action
                        传给 store；*/
    
      /*5️⃣-④：Redux-thunk 中，“异步”代码我们是放在 action 中进行。
      这里我们仅作方法的“调用”；*/
      const action = actionCreators.getHomeInfo();
  
      dispatch(action)
    
    },
  }
}




/*❗️❗️❗️4️⃣-②：之前我们直接导出的是 Header，可用了 React-redux 后，就不能这样写了！
export default Home;
*/

/*4️⃣-③：取而代之，我们是导出 connect 方法（
❗️注意看我们给 connect 方法传递了哪些参数！）；
*/
export default connect(null, mapDispatchToProps)(Home);  /*4️⃣-④：我们一共
                                        要给 connect 传递 3 个参数！
                                        Home 表示：connect 会让“Home 组件”和 store
                                        进行“连接”；
                                        
                                        null 表示：这里还会接收一个名叫 
                                        mapStateToProps 的参数，由于这里不需要去获取
                                        “数据”，故用 null 来占位。
                                        
                                        mapDispatchToProps 表示：我们把 store 的 
                                        dispatch 方法“挂载”到 Header 组件的 props 上。
                                        即，我们可以定义哪些“用户的操作”应该当作 action，
                                        并传给 store！
                                        */