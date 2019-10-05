import React, {Component} from "react";

import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from "./style"

import {connect} from "react-redux";

import {actionCreators} from "./store";

import {Redirect} from "react-router-dom";


class Login extends Component {
  render() {
    if(!this.props.login) { 
      return(
        <LoginWrapper>
          <LoginBox>
            <Input type="text" placeholder="账号" ref={(input) => {this.text = input}} />
            <Input type="password" placeholder="密码" ref={(input) => {this.password = input}}  />
            <Button type="submit" onClick={() => this.props.handleLogin(this.text, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else { 
      return <Redirect to="/" />
    }
  }
}

const mapStateToProps = (state) => ({ 
  
  login: state.getIn(["login", "login"]) 
})


const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin(accountElem, passwordElem) { 
      const action = actionCreators.loginAction(accountElem.value, passwordElem.value);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);