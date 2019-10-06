import Loadable from 'react-loadable';

import React from "react";

const LoadableComponent = Loadable({ 
  loader: () => import("./"), 
  loading() {
    return(
      <div>别慌，我正在加载~</div>
    )
  }
});


export default () => <LoadableComponent/>