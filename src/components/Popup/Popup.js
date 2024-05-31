import { useState } from "react";
import "./Popup.css";

function Popup(props) {
  const [isVisible, setVisibility] = useState(true);

  return(
    <div className={`popup ${isVisible ? "" : "popup_hidden"}`}>
      <p className="popup__text">
        Discount 20% For New Members,
        <span className="popup__bold"> only for today</span>!
      </p>
      <button className="popup__button"
        type="button"
        onClick={() => setVisibility(false)}
      ></button>
    </div>
  );
}

export default Popup;