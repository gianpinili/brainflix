import './Header.scss';
import mainLogo from '../../assets/logo/BrainFlix-logo.svg'
import headerIcon from '../../assets/images/Mohan-muruge.jpg'
import searchIcon from '../../assets/icons/search.svg'

function Header () {
 return (
  <header className="header">
   <div className="header__logo">
    <img src={mainLogo} alt="BrainFlix Logo" />
   </div>

   <div className="header__right">
   <div className="header__nav">
    {/* <img className="header__search" src={searchIcon} alt="" /> */}
     <input className="header__input" type="text" placeholder= 'Search' />
     <img className="header-icon__mobile" src={headerIcon} alt="" />
     </div>

   <div className="header__buttons">
    <button className="header__button">Upload</button>
    <img className="header-icon__desktop" src={headerIcon} alt="" />
   </div>
   </div>
  </header>
 )
}

export default Header;