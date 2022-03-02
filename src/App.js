import Header from './widgets/Header';
import Gtyui from './widgets/Gtyui';
import Daccountid from './widgets/Daccountid';
import Ctyuki from './widgets/Chyuki';
import Footer from './widgets/Footer;'
import App from './App';


function App() {
  return (
    <div className="App">
      <div className="Header" src={Header}></div>
      <div className="Gtyui" src={Gtyui}></div>
      <div className="Daccountid" src={Daccountid}></div>
      <div className="Ctyuki" src={Ctyuki}></div>
      <div className="Footer" src={Footer}></div>
    </div>
  );
}

export default App;