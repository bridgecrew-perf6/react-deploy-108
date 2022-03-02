import React from 'react';
import ReactDOM from 'react-dom';
import "../App.css";

class FooterComponent extends React.Component{
  render(){
    return(
      <div>
        <a href="https://www.dmm.co.jp/age_check/=/?rurl=http%3A%2F%2Fwww.dmm.co.jp%2Fdigital%2F" className="privacy">
          <span>
            プライバシー
          </span>
        </a>
        <a href="https://www.youtube.com/watch?v=ieKsjd-pZR4" className="caution">
          <span>
            ご利用規約
          </span>
        </a>
        <a href="https://www.youtube.com/watch?v=0flV3_N0QBA" className="example">
          <span>
            ご利用にあたって
          </span>
        </a>
      </div>
    )
  }
}

ReactDOM.render(
  <FooterComponent/>,
  document.getElementById("footer")
);

export default FooterComponent;