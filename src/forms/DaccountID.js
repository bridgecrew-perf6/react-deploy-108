import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const [text, setText] = useState('')

const handleChange = (e) => {
  setText(() => e.target.value)
}

ReactDOM.render(
  <>
    dアカウントのID
    <input type="text" value={text} onChange={handleChange}/>
    <input type="checkbox" name="">次回ログインからIDの入力を省略</input>

    <button component={Link} to="https://www.google.co.jp">次へ</button>

    <a href="https://www.google.co.jp">IDをお忘れの方</a>
  </>
)