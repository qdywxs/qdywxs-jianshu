import React, {Component} from "react";

import {Link} from "react-router-dom";

import {
  Item,
  Cover,
  Details,
  Title,
  Foot,
  LoadMore
} from "../style";

import { connect } from "react-redux";

import {actionCreators} from "../store";  /*❗️引入 actionCreators！*/

class Content extends Component {
  render() {
    
    return(
      <div>
        {
          this.props.articleList.map((item, index) => {
            return (
              <Item key={index}>
                <Cover>
                  <Link to="/detail"><img src={item.get("imgUrl")} alt="" /></Link>
                </Cover>

                <Details>
                  <Link to="/detail">
                    <Title>
                      {item.get("title")}
                    </Title>
                  </Link>
                  <p>
                    {item.get("desc")}
                  </p>

                  <Foot>
                    <Link to="/"><span className="username">{item.get("author")}</span></Link>
                    <span className="iconfont icon-comment">&#xe602;</span><span>{item.get("discuss")}</span>
                    <span className="iconfont icon-heart">&#xe8f4;</span><span>{item.get("love")}</span>
                    <span className="iconfont icon-money">&#xe607;</span><span>{item.get("money")}</span>
                  </Foot>
                </Details>
              </Item>
            )
          })
        } 
      
        {/*❗️2️⃣-②：当“点击”时，我们可以通过“箭头函数”的形式将“页码”传递
        给 getMoreList！
        先注释掉下面这几行代码，我们需要重新改写！
        <LoadMore     
          onClick={this.props.getMoreList}
        >  
          加载更多
        </LoadMore>
        */}
        <LoadMore
          onClick={() => this.props.getMoreList(this.props.page)}
        >
          加载更多
        </LoadMore>
      </div>
    )
  }
}


const mapStateToProps = (state) => {  
  return { 
    articleList: state.getIn(["home", "articleList"]),
    
    /*❗️2️⃣-①：在这里拿到目前是第几页；*/
    page: state.getIn(["home", "articlePage"])
  }
}


const mapDispatchToProps = (dispatch) => { 
  return {
    
    /*2️⃣-③：相应地，getMoreList 就可以接收到这个 page；*/
    getMoreList(page) { 
      const action = actionCreators.getMoreList(page);  /*2️⃣-④：同时，会将 page 
                                                        actionCreators；*/
  
      dispatch(action) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);  