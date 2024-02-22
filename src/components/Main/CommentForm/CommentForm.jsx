import './CommentForm.scss';

function CommentForm ({props}) {

 return (
  <>
   <p className="comments__count">3 Comments</p>
        <div className="comments__form">
           <div className="comments__icon">
							<img className='comments__img' src="https://placehold.co/50x50" alt="" />
					 	</div>
						<div className="comments__content">
							<p className="comments__subtitle">Join the conversation</p>
							<div className="comments__submission">
								<input className="comments__input" type="text" placeholder="Add a comment" />
								<button className="comments__button">Icon -Comment</button>
							</div>
						</div>
        </div>
  </>
 )
}

export default CommentForm;