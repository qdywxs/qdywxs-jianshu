import React, {Component} from "react";

import {Link} from "react-router-dom"; 

import {
  PanelImage
} from "../style";

import { connect } from "react-redux";


class Panels extends Component {
  render() {
    
    return(
      <div>
        {
          this.props.panelsList.map((item) => {
            return (
              <PanelImage key={item.get("id")}>
                <Link to="/">
                  <img src={item.get("imgUrl")} alt="" />
                </Link>
              </PanelImage>  
            )
          })
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {  
  return {  
    panelsList: state.getIn(["home", "panelsList"]) 
  
  }

}

export default connect(mapStateToProps, null)(Panels);  