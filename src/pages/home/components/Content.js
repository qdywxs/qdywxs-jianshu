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

import {actionCreators} from "../store";  

class Content extends Component {
  render() {
    
    return(
      <div>
        {
          this.props.articleList.map((item, index) => {
            return (
              <Item key={index}>
                <Cover>
                  <Link to={"/detail/" + item.get("id")}><img src={item.get("imgUrl")} alt="" /></Link>
                </Cover>

                <Details>
                  
                  <Link to={"/detail/" + item.get("id")}>  
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
    
    page: state.getIn(["home", "articlePage"])
  }
}


const mapDispatchToProps = (dispatch) => { 
  return {
    getMoreList(page) { 
      const action = actionCreators.getMoreList(page);  
      dispatch(action) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);  