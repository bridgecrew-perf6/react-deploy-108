import React from 'react';
import ReactDOM from 'react-dom';

import DaccountID from "../widgets/DaccountID.js"
import DaccountCreate from "../widgets/DaccountCreate.js"

export default function App(){
  ReactDOM.render(
    <>
      <DaccountID />
      <DaccountCreate />
    </>
  )
}
