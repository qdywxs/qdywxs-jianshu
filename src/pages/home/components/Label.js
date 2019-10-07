import React, {Component} from "react";

import {
  LabelGroup,
  Labels,
  MoreLabels
} from "../style";


class Label extends Component {
  render() {
    
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