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
  
  componentDidMount() {  
    this.props.getDetail();
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
    getDetail() {  
      const action = actionCreators.getDetailData();
      
      dispatch(action)
    
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail);  