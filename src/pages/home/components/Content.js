import React, {Component} from "react";

import {Link} from "react-router-dom";

/*❗️2️⃣从 home 目录下的 style.js 中引入各个定义好的“样式组件”；*/
import {
  Item,
  Cover,
  Details,
  Title,
  Foot,
  LoadMore
} from "../style";

class Content extends Component {
  render() {
    
    /*❗️❗️❗️1️⃣：将“标签”拆分成一个个的“样式组件”；*/
    return(
      <div>
        <Item>
          <Cover>
            <Link to="/detail"><img src="https://qdywxs.github.io/jianshu-images/article-img01.jpg" alt="" /></Link>
          </Cover>
        
          <Details>
            <Link to="/detail">
              <Title>
                评“超时空同居”浅议爱情电影和奇幻元素的嫁接
              </Title>
            </Link>
            <p>
              这部电影充分照顾到了八零后的情怀，九零后的笑点，零零后嘛，那就是奇幻爱情吧。奇幻爱情喜剧，三种元素都有，但哪种都不出彩，相对来说喜剧元素稍微强一…
            </p>
        
            <Foot>
              <Link to="#"><span className="username">苇筱</span></Link>
              <span className="iconfont icon-comment">&#xe602;</span><span>31</span>
              <span className="iconfont icon-heart">&#xe8f4;</span><span>21</span>
              <span className="iconfont icon-money">&#xe607;</span><span>1</span>
            </Foot>
          </Details>
        </Item>
        
        <Item>
          <Cover>
            <Link to="/detail"><img src="https://qdywxs.github.io/jianshu-images/article-img02.jpeg" alt="" /></Link>
          </Cover>
        
          <Details>
            <Link to="/detail">
              <Title>
                生活随记八则
              </Title>
            </Link>
            <p>
              1 不再困惑也不再迷茫，头脑中的构想在现实生活中并驾齐驱地向前推进，虽然困难重重但能够想方设法加以克服。前景广阔而美好，只是有一丝淡淡的凄凉，也…
            </p>
        
            <Foot>
              <Link><span className="username">Jobs</span></Link>
              <span className="iconfont icon-comment">&#xe602;</span><span>31</span>
              <span className="iconfont icon-heart">&#xe8f4;</span><span>21</span>
              <span className="iconfont icon-money">&#xe607;</span><span>1</span>
            </Foot>
          </Details>
        </Item>
        
        <Item>
          <Cover>
            <Link to="/detail"><img src="https://qdywxs.github.io/jianshu-images/article-img03.jpg" alt="" /></Link>
          </Cover>
        
          <Details>
            <Link to="/detail">
              <Title>
                “前端一万小时”又惊艳了我一把
              </Title>
            </Link>
            <p>
              Hey guys, 我正在这个平台分发“前端一万小时”这个专栏的一系列文章。这个专栏我已经完成了“从零基础到就业”的相关文章。"从零基础到就业"包含 150+ 篇干货文章，300+ 道经典笔试、面试题。如果你对本系列文章感兴趣，欢迎关注 「公众号：前端一万小时」，并点击菜单栏“全部文章”来加入我们的“一万小时计划”！祝顺利，祝成功^^……
            </p>
        
            <Foot>
              <Link to="#"><span className="username">Oli</span></Link>
              <span className="iconfont icon-comment">&#xe602;</span><span>9k+</span>
              <span className="iconfont icon-heart">&#xe8f4;</span><span>10k+</span>
              <span className="iconfont icon-money">&#xe607;</span><span>100000k+</span>
            </Foot>
          </Details>
        </Item>

        <LoadMore>
          加载更多
        </LoadMore>
      </div>
    )
  }
}

export default Content;