import React, {Component} from "react";

import {
  LabelGroup,
  Labels,
  MoreLabels
} from "../style";

import { connect } from "react-redux";


class Label extends Component {
  render() {
    return(
      <LabelGroup className="clearfix">
        {
          this.props.labelList.map((item) => {
            return (
              <Labels key={item.get("id")}>  
                <img src={item.get("imgUrl")} alt="" />  
                {item.get("title")}
              </Labels>
            )
          })
        }
  
  
        <MoreLabels>
          更多热门专题
        </MoreLabels>
      </LabelGroup>
    )
  }
}


const mapStateToProps = (state) => {  
  return { 
    labelList: state.getIn(["home", "labelList"])  
  }

}

export default connect(mapStateToProps, null)(Label); 