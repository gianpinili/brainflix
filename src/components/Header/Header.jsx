import "./Header.scss";
import mainLogo from "../../assets/logo/BrainFlix-logo.svg";
import headerIcon from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";

//TODO: FIX SEARCH ICON STYLING FOR TABLET AND DESKTOP --not showing full size of container
//TODO: POSITION ABSOLUTE THE SEARCH BAR

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={mainLogo} alt="BrainFlix Logo" />
      </div>

      <div className="header__right">
        <div className="header__nav">
          <div className="header__container">
            <img className="header__img" src={searchIcon} alt="Search icon" />
            <input className="header__input" type="text" placeholder="Search" />
          </div>
          <img className="header-icon__mobile" src={headerIcon} alt="" />
        </div>

        <div className="header__buttons">
          <div className="header__upload">
            <img className="header__publish" src={uploadIcon} alt="" />
            <button className="header__button">Upload</button>
          </div>
          <img className="header-icon__desktop" src={headerIcon} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
