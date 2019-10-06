import React, {Component} from "react";

import {
  WriteWrapper,
  Title,
  Editor
} from "./style";


import {connect} from "react-redux";


import {Redirect} from "react-router-dom";

class Write extends Component {
  render() {

    if(this.props.login) { 
      return(
        <WriteWrapper>
          <Title placeholder="输入标题" />
          <Editor>
            <textarea placeholder="输入内容"></textarea>
          </Editor>
        </WriteWrapper>
      )
    }else { 
      return <Redirect to="/login" />; 
    }
  }
}

const mapStateToProps = (state) => { 
  
  return { 
    login: state.getIn(["login", "login"]) 
  }

}

export default connect(mapStateToProps, null)(Write); 