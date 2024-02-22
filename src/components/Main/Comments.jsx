import './Comments.scss';

function Comments ({props}) {

return (
	
<div className="comments__list">
					<div className="comments__icon">
						<img src="https://placehold.co/50x50" alt="" />
					</div>
					<div className="comments__content">
						<div className="comments__info">
							<p className="comments__name">{props[0].comments[0].name}</p>
							<p className="comments__timestamp">date {props[0].comments[0].timestamp}</p>
						</div>
						<div className="comments__text">{props[0].comments[0].comment} </div>
					</div>
     </div>
 )
}

export default Comments;