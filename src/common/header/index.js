import React, {Component} from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div>header</div>
        
        {/*9️⃣-⑨：我们试着在这里用一下 user 这个 iconfont。❗️user 这个图标对应的 uncode 码，请自行到仓库里去拷贝！*/}
        <span className="iconfont">&#xe63f;</span>
      </div>
    )
  }
}

export default Header;