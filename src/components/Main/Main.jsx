import './Main.scss';
import Description from './Description/Description.jsx';
import CommentForm from './CommentForm/CommentForm.jsx';
import Comments from './Comments/Comments.jsx';
import Videos from './Videos/Videos.jsx';
import videoDetails from '../../data/video-details.json';
import { useState } from 'react';


function Main (props) {

	const [videos, setVideos] = useState(videoDetails);

 return(
  <main className='main'>
    <div className="main__left">
			<Description videoDetails={props}/>

		<section className="comments">
			<CommentForm videoDetails={props} />	

			<Comments videoDetails={props} />
			<Comments videoDetails={props} />
			<Comments videoDetails={props} />
		</section>
    </div>
    <div className="videos">
				<p className="videos__text">Next Videos</p>
			<Videos videos={videos} />


		</div>
  </main>
 )
}

export default Main;