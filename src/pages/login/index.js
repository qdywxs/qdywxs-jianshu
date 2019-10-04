import React, {Component} from "react";


import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from "./style"


class Login extends Component {
  render() {
    return(
      <LoginWrapper>
        <LoginBox>
          <Input type="text" placeholder="账号" />
          <Input type="password" placeholder="密码"  />
          <Button type="submit">登陆</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

export default Login;