import './Header.scss';

function Header () {
 return (
  <header>
   <div className="header__logo">
    <img src="https://placehold.co/50x50" alt="BrainFlix Logo" />
   </div>
   <div className="header__nav">
    {/* SEARCH INPUT */}
     <input class="header__input" type="text" placeholder='Search' />
    {/* UPLOAD BUTTON */}
    <button className="header__button">Upload (with Icon)</button>
     {/* ICONS */}
    <img className="header__icon" src="https://placehold.co/50x50/000000/FFFFFF/png" alt="" />

   </div>
  </header>
 )
}

export default Header;