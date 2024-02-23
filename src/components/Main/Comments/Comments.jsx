import './Comments.scss';

function Comments (props) {

return (
	
<div className="comments__list">
					<div className="comments__icon">
						<img className='comments__img' src="https://placehold.co/50x50" alt="" />
					</div>
					<div className="comments__section">
						<div className="comments__info">
							<p className="comments__name">Noah Duncan</p>
							<p className="comments__timestamp">8/11/2023</p>
						</div>
						<div className="comments__text">Your insights into the future of AI are enlightening! The intersection of technology and ethics is particularly thought-provoking. Keep us updated on the tech front!</div>
					</div>
     </div>
 )
}

export default Comments;