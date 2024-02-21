import './Main.scss';

function Main () {
 return(
  <main>
    <div className="main__left">
     <h2 className="main__title">VIDEO TITLE - JSON</h2>

     <section className="main__info">
      <div className="main__artist">
       <p className="main__channel">By Someone - JSON</p>
       <p className="main__date">A date - JSON</p>
      </div>
      <div className="main__stats">
       <p className="main__views">Views - JSON</p>
       <p className="main__likes">Likes - JSON</p>
      </div>
     </section>

     <section className="comments">
        <p className="comments__count">3 Comments - JSON</p>
        <div className="comments__form">
         
        </div>
     </section>
    </div>
    <div className="main__right"></div>
  </main>
 )
}

export default Main;