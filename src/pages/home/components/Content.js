import React, {Component} from "react";

import {Link} from "react-router-dom";

import {
  Item,
  Cover,
  Details,
  Title,
  Foot,
  LoadMore
} from "../style";

/*❗️❗️❗️2️⃣-②：从 react-redux 中引入 connect 方法（它也是 React-redux 的核心 API 之一），
connect 的作用很明确——就是“连接”的意思！*/
import { connect } from "react-redux";

class Content extends Component {
  render() {
    
    return(
      <div>
        
        {/*❗️❗️❗️2️⃣-⑨：“映射”上了过后，我们就可以通过调用 this.props.articleList 来
        “调用”store 中的 articleList 了！
        删除下边的代码，重新用 this.props 来改写~
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
        */}
        {
          this.props.articleList.map((item) => {
            return (
              <Item key={item.get("id")}>
                <Cover>
                  <Link to="/detail"><img src={item.get("imgUrl")} alt="" /></Link>
                </Cover>

                <Details>
                  <Link to="/detail">
                    <Title>
                      {item.get("title")}
                    </Title>
                  </Link>
                  <p>
                    {item.get("desc")}
                  </p>

                  <Foot>
                    <Link to="/"><span className="username">{item.get("author")}</span></Link>
                    <span className="iconfont icon-comment">&#xe602;</span><span>{item.get("discuss")}</span>
                    <span className="iconfont icon-heart">&#xe8f4;</span><span>{item.get("love")}</span>
                    <span className="iconfont icon-money">&#xe607;</span><span>{item.get("money")}</span>
                  </Foot>
                </Details>
              </Item>
            )
          })
        } 
      
        <LoadMore>
          加载更多
        </LoadMore>
      </div>
    )
  }
}


/*2️⃣-⑥：接下来，我们先定义“连接”的“规则”；*/
const mapStateToProps = (state) => {  /*2️⃣-⑦：把 store 里的“数据 state”作为“参数”
                                      传递给 mapStateToProps；*/
  
  return {  /*❗️这个“规则”会返回一个“对象”出去！*/
    articleList: state.getIn(["home", "articleList"])  /*❗️❗️❗️2️⃣-⑧：“规则”的具体做法为——将 store 里的  
                            articleList 映射到“Content 组件”里的 props 的 articleList 中去；
                            */
  
  }

}


/*❗️❗️❗️2️⃣-③：之前我们直接导出的是 Content，可用了 React-redux 后，就不能这样写了！
export default Content;
*/

/*2️⃣-④：取而代之，我们是导出 connect 方法（
❗️注意看我们给 connect 方法传递了哪些参数！）；
*/
export default connect(mapStateToProps, null)(Content);  /*2️⃣-⑤：我们一共
                                        要给 connect 传递 3 个参数！
                                        Content 表示：connect 会让“Content 组件”和 store
                                        进行“连接”；
                                        
                                        mapStateToProps 表示：“Content 组件”和 store 
                                        进行“连接”是需要“规则”的，而具体的“规则”就在这个
                                        mapStateToProps 里边（❗️直译为：把 store 里边的
                                        “数据 state”映射到“Content 组件”的 props 里）；
                                        
                                        null 表示：这里还会接收一个名叫 
                                        mapDispatchToProps 的参数，等下“改变数据”时讲解，
                                        这里先用 null 占位。
                                        */