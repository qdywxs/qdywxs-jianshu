import React, {Component} from "react";

import {Link} from "react-router-dom";

import {
  DownloadArea,
  DownloadTip
} from "../style"

class Download extends Component {
  render() {
    return(
      <Link to="/">
        <DownloadArea className="clearfix">
          <img src="https://qdywxs.github.io/jianshu-images/qr-code.png" alt="" />
          <h3>下载简书手机 APP > </h3>
          <p>随时随地发现和创作内容</p>
          
          <DownloadTip className="tooltip">
            <img src="https://qdywxs.github.io/jianshu-images/qr-code.png" alt="" />
          </DownloadTip>
        </DownloadArea>
      </Link>
    )
  }
}

export default Download;