import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './widgets/Header';
import Gtyui from './widgets/Gtyui';
import Daccountid from './widgets/Daccountid';
import Ctyuki from './widgets/Chyuki.js';
import Footer from './widgets/Footer.js';

export default function react(){
  ReactDOM.render(
    <React.StrictMode>,
      <Header/>,
      <Gtyui/>,
      <Daccountid/>,
      <Ctyuki/>,
      <Footer/>,
    </React.StrictMode>,
    document.getElementById('root')
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
