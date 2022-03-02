import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class GtyuiComponent extends React.Component{
  render(){
    return(
      <div>
        <div className="borderred"/>
        <div className="bordergray"/>
        <div className="Gbox">
          <div className="Gbox2">
            <p className="Gtext">ご注意(音量を消してください)<br/>
              ・一度ログインを行うと次回以降、ニックネーム、祥太ポイント情報、利用履歴等の情報が自動的に表示されます。<br/>
                第三者が使用する可能性があるパソコン・タブレットをご利用の場合には、ご注意ください。<br/>
              ・お客様がご利用されるサービスに応じて、ログイン状態で表示される情報は異なります。<br/>
                ご利用のサービスで表示される情報をご確認の上ログイン状態を保持するか否かご検討ください。
            </p>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <GtyuiComponent/>,
  document.getElementById('Gtyui')
);

export default GtyuiComponent;