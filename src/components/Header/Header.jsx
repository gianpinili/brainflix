import "./Header.scss";
import mainLogo from "../../assets/logo/BrainFlix-logo.svg";
import headerIcon from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={mainLogo} alt="BrainFlix Logo" />
        </Link>
      </div>

      <div className="header__right">
        <div className="header__nav">
          <div className="header__container">
            <img className="header__img" src={searchIcon} alt="Search icon" />
            <input className="header__input" type="text" placeholder="Search" />
          </div>
          <img
            className="header-icon__mobile"
            src={headerIcon}
            alt="Header Icon"
          />
        </div>

        <div className="header__buttons">
          <Link className="header__link" to="/upload">
            <button className="header__button">
              <img
                className="header__publish"
                src={uploadIcon}
                alt="Upload Icon"
              />
              Upload
            </button>
          </Link>
          <img
            className="header-icon__desktop"
            src={headerIcon}
            alt="Header Icon"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
