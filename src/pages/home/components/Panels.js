import React, {Component} from "react";

import {Link} from "react-router-dom";  

import {
  PanelImage
} from "../style";

class Panels extends Component {
  render() {
    
    return(
      <div>
       
        <PanelImage>
          <Link to="/">
            <img src="https://qdywxs.github.io/jianshu-images/panel01.png" alt="" />
          </Link>
        </PanelImage>
       

        <PanelImage>
          <Link to="/">
            <img src="https://qdywxs.github.io/jianshu-images/panel02.png" alt="" />
          </Link>
        </PanelImage>
        
        
        <PanelImage>
          <Link to="/">
            <img src="https://qdywxs.github.io/jianshu-images/panel03.png" alt="" />
          </Link>  
        </PanelImage>

        
        <PanelImage>
          <Link to="/">
            <img src="https://qdywxs.github.io/jianshu-images/panel04.png" alt="" />
          </Link>
        </PanelImage>
       
        
        <PanelImage>
          <Link to="/">
            <img src="https://qdywxs.github.io/jianshu-images/panel05.png" alt="" />
          </Link>
        </PanelImage>

      </div>
    )
  }
}

export default Panels;