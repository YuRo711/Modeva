import Header from "../Header/Header";
import Popup from "../Popup/Popup";
import "./App.css";

function App(props) {
  return(
    <div className="page">
      <Popup/>
      <Header/>
    </div>
  );
}

export default App;