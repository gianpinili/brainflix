import "./Comments.scss";
import { convertTimestamp } from "../../functions/timeConverter";
import deleteIcon from "../../assets/icons/views.svg";

function Comments(props) {
  const { apiSelectedVideo } = props;

  const comments = apiSelectedVideo.comments;
  return (
    <>
      {comments?.map((comment) => {
        if (comment && comment.name && comment.timestamp && comment.comment) {
          return (
            <div className="comments__list" key={comment.id}>
              <div className="comments__icon comments__img">
                <div className="comments__img comments__img--holder" />
              </div>
              <div className="comments__section">
                <div className="comments__info" key={comment?.name}>
                  <p className="comments__name">{comment.name}</p>
                  <p className="comments__timestamp" key={comment.timestamp}>
                    {convertTimestamp(comment.timestamp)}
                  </p>
                </div>
                <div className="comments__text" key={comment.comment}>
                  {comment.comment}
                  <button className="comments__delete">
                    <img
                      src={deleteIcon}
                      alt=""
                      className="comments__delete-button"
                      onClick={() => props.deleteComments(comment.id)}
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}

export default Comments;
