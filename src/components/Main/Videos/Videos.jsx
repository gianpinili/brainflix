import './Videos.scss';

function Videos ({props}) {
 return (
  <>

  <div className="videos__template">
   <div className="videos__image"><img className='videos__img' src="https://placehold.co/100x70" alt="" />
   </div>
   <div className="videos__info">
    <p className="videos__title">{props[0].title}</p>
    <p className="videos__channel">{props[0].channel}</p>
   </div>
  </div>
  </>
 )
}

export default Videos;