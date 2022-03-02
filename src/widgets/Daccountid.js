import '../App.css';
import ReactDOM from 'react-dom';
import React from "react";

class AccountComponent extends React.Component{
  render(){
    return(
      <div>
        <div className="createbox">
          <div className="createbox2">
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <AccountComponent/>,
  document.getElementById('accountid')
);
