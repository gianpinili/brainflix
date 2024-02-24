import "./CommentForm.scss";
import addCommentIcon from "../../../assets/icons/add_comment.svg";

function CommentForm(props) {
  return (
    <>
      <p className="comments__count">3 Comments</p>
      <div className="comments__form">
        <div className="comments__icon">
          <img
            className="comments__img"
            src="https://placehold.co/50x50"
            alt=""
          />
        </div>
        <div className="comments__content">
          <p className="comments__subtitle">Join the conversation</p>
          <div className="comments__submission">
            <textarea
              className="comments__input"
              type="text"
              placeholder="Add a new comment"
            />
            <div className="comments__submit">
              <img className="comments__image" src={addCommentIcon} alt="" />
              <button className="comments__button">Comment</button>
            </div>
            {/* <button className="comments__button">Comment</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentForm;
