import React from 'react';
import ReactDOM from 'react-dom';

//const [pass, setPwText] = useState('')
//const [secrity, setScText] = useState('')

//const pwChange = (e) => {
//  setPwText(() => e.target.value)
//}

//const scChange = (e) => {
//  setScText(() => e.target.value)
//}

export default function App(){
  ReactDOM.render(
    <>
      dアカウントのID
      macaya_oh9@docomo.ne.jp
      
      パスワード(半角英数記号8～20桁)
      <input type="text" />
      <input type="checkbox" name="">パスワードを表示する</input>
  
      セキュリティコード
      送信先：*******6738
      <input type="text" />
  
      <button onClick={""}>次へ</button>
      
    </>
  )
}
