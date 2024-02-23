import './Main.scss';
import Description from './Description/Description.jsx';
import CommentForm from './CommentForm/CommentForm.jsx';
import Comments from './Comments/Comments.jsx';
import Videos from './Videos/Videos.jsx';

function Main (props) {

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
			<Videos videoDetails={props} />
			<Videos videoDetails={props} />
			<Videos videoDetails={props} />
			<Videos videoDetails={props} />
			<Videos videoDetails={props} />
			<Videos videoDetails={props} />
			<Videos videoDetails={props} />
			<Videos videoDetails={props} />

		</div>
  </main>
 )
}

export default Main;