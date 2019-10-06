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

class Content extends Component {
  render() {
    
    return(
      <div>
      
        {
          this.props.articleList.map((item) => {
            return (
              <Item key={item.get("id")}>
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
      
        <LoadMore>
          加载更多
        </LoadMore>
      </div>
    )
  }
}


const mapStateToProps = (state) => {  
  
  return {  
    articleList: state.getIn(["home", "articleList"])  
  
  }

}


export default connect(mapStateToProps, null)(Content); 