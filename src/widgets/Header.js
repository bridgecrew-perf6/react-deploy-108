import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class HeaderComponent extends React.Component{
  render(){
    return(
      <div>
        <a href="https://www.youtube.com/watch?v=m4yu1FybXNw" className="login">
          <span>
            ログイン
          </span>
        </a>
        <a href="https://trywebapp-cf211.firebaseapp.com" className="syota_account">
          <span>
            祥太アカウント
          </span>
        </a>
      </div>
    )
  }
}

ReactDOM.render(
  <HeaderComponent/>,
  document.getElementById('header')
);

export default HeaderComponent;