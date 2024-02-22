function Description ({props}) {
 
 return (
  <>
  <h2 className="main__title">{props[0].title}</h2>

<section className="main__info">
 <div className="main__artist">
  <p className="main__channel">By {props[0].channel}</p>
  <p className="main__date">Date in Unix {props[0].timestamp}</p>
 </div>
 <div className="main__stats">
  <p className="main__views">icon -{props[0].views}</p>
  <p className="main__likes">icon -{props[0].likes}</p>
 </div>
 <p className="main__description">{props[0].description}</p>
</section>
  </>
 )
}

export default Description;