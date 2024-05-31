import "./Nav.css";
import logo from "../../images/Modeva.svg";

function Nav() {
  return (
    <div className="nav">
      <img className="nav__logo"
        src={logo}
        alt="modeva logo"
      />
      <nav className="nav__links">
        <button className="nav__link-button">
          Catalog
        </button>
        <a className="nav__link" href="#">Sale</a>
        <a className="nav__link" href="#">New Arrival</a>
        <a className="nav__link" href="#">About</a>
      </nav>
    </div>
  );
}

export default Nav;