import './Header.scss';
import mainLogo from '../../assets/logo/BrainFlix-logo.svg'

function Header () {
 return (
  <header>
   <div className="header__logo">
    <img src={mainLogo} alt="BrainFlix Logo" />
   </div>
   <div className="header__nav">
    {/* SEARCH INPUT */}
     <input className="header__input" type="text" placeholder='Search with icon' />
    {/* UPLOAD BUTTON */}
    <button className="header__button">Upload (with Icon)</button>
     {/* ICONS */}
    <img className="header__icon" src="https://placehold.co/50x50/000000/FFFFFF/png" alt="" />

   </div>
  </header>
 )
}

export default Header;