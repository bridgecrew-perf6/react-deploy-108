import React from 'react';
import ReactDOM from 'react-dom';
import "../App.css";

class CtyukiComponent extends React.Component{
  render(){
    return(
      <div>
        <div className="bordergray2"/>
        <div className="borderred2"/>
      </div>
    )
  }
}

ReactDOM.render(
  <CtyukiComponent/>,
  document.getElementById("ctyuki")
);

