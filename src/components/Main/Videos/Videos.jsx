import './Videos.scss';
import { useState } from 'react';

function Videos (props) {

const [selectedVideo, setSelectedVideo] = useState(props.videos[0]);


 return (
  <>
  {props.videos.map(video => (
   <div className="videos__template" key={video.id}>
    <div className="videos__image"><img className='videos__img' src={video.image} alt="" />
    </div>
    <div className="videos__info">
     <p className="videos__title" key={video.title}>{video.title}</p>
     <p className="videos__channel" key={video.channel}>{video.channel}</p>
    </div>
   </div>
  ))}
  </>
 )
}

export default Videos;


{/* <div className="videos__template">
<div className="videos__image"><img className='videos__img' src="https://placehold.co/100x70" alt="" />
</div>
<div className="videos__info">
 <p className="videos__title">Exploring Cities of Europe</p>
 <p className="videos__channel">Aiden Thompson</p>
</div>
</div> */}