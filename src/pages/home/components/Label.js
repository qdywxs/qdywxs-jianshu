import React, {Component} from "react";

/*❗️2️⃣-②：从 home 目录下的 style.js 中引入各个定义好的“样式组件”；*/
import {
  LabelGroup,
  Labels,
  MoreLabels
} from "../style";


class Label extends Component {
  render() {
    
    /*❗️❗️❗️2️⃣-①：将“标签”拆分成一个个的“样式组件”；*/
    return(
      <LabelGroup className="clearfix">
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label01.jpg" alt="" />
          简书电影
        </Labels>
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label02.jpg" alt="" />
          故事
        </Labels>
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label03.jpg" alt="" />
          手绘
        </Labels>
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label04.jpg" alt="" />
          历史
        </Labels>
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label05.jpg" alt="" />
          人文社科
        </Labels>
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label06.jpg" alt="" />
          摄影
        </Labels>
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label07.jpg" alt="" />
          自然科普
        </Labels>
      
        <MoreLabels>
          更多热门专题
        </MoreLabels>
      </LabelGroup>
    )
  }
}

export default Label;