import React, {Component} from "react";

import {Link} from "react-router-dom";

class Home extends Component {
  render() {
    return(
      <div>
        <div>home 页面！</div>
        <br />
        <ol>
          <Link to="./detail"><li>1. 点击这项时，它会跳转至对应的 detail 页面~</li></Link>
          <Link to="./detail"><li>2. 点击这项时，它会跳转至对应的 detail 页面~</li></Link>
          <Link to="./detail"><li>3. 点击这项时，它会跳转至对应的 detail 页面~</li></Link>
        </ol>
      </div>
      
    )
  }
}

export default Home;