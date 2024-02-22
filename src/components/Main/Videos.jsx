function Videos ({props}) {
 return (
  <>
  <p className="videos__text">Next Videos</p>
  <div className="videos__template">
   <div className="videos__image"><img src="https://placehold.co/100x70" alt="" />
   <div className="videos__info">
    <p className="videos__title">{props[0].title}</p>
    <p className="videos__channel">{props[0].channel}</p>
   </div>
   </div>
  </div>
  </>
 )
}

export default Videos;