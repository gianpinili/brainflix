import "./CommentForm.scss";
import addCommentIcon from "../../assets/icons/add_comment.svg";
import userIcon from "../../assets/images/Mohan-muruge.jpg";

function CommentForm({ apiSelectedVideo, newComment }) {
  const comments = apiSelectedVideo.comments; // Use empty array if comments is undefined

  return (
    <>
      <p className="comments__count">{comments?.length} Comments</p>
      <div className="comments__form">
        <div className="comments__icon">
          <img className="comments__img" src={userIcon} alt="" />
        </div>

        <form onSubmit={newComment} className="comments__content">
          <p className="comments__subtitle">Join the conversation</p>
          <div className="comments__submission">
            <input
              className="comments__input comments__input--name"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
            <textarea
              name="comment"
              className="comments__input"
              type="text"
              placeholder="Add a new comment"
            />
            <button className="comments__button">
              <img
                src={addCommentIcon}
                alt="Comment Icon"
                className="comments__image"
              />
              Comment
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CommentForm;
