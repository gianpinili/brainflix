import './Main.scss';
import Description from './Description.jsx';
import CommentForm from './CommentForm.jsx';
import Comments from './Comments.jsx';
import Videos from './Videos.jsx';

function Main ({props}) {

 return(
  <main className='main'>
    <div className="main__left">
			<Description props={props}/>

		<section className="comments">
			<CommentForm props={props} />	

			<Comments props={props} />
			<Comments props={props} />
			<Comments props={props} />
		</section>
    </div>
    <div className="videos">
			<Videos props={props} />
			<Videos props={props} />
			<Videos props={props} />
			<Videos props={props} />
			<Videos props={props} />
			<Videos props={props} />
			<Videos props={props} />
			<Videos props={props} />

		</div>
  </main>
 )
}

export default Main;