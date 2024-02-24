import "./Comments.scss";
import { convertTimestamp } from "../../../data/timeConverter";

function Comments(props) {
  return (
    <>
      {props.selectedVideo.comments.map((comment) => {
        return (
          <div key={comment.id} className="comments__list">
            <div className="comments__icon">
              <img
                className="comments__img"
                src="https://placehold.co/50x50"
                alt=""
              />
            </div>
            <div className="comments__section">
              <div className="comments__info">
                <p className="comments__name" key={comment.name}>
                  {comment.name}
                </p>
                <p className="comments__timestamp" key={comment.timestamp}>
                  {convertTimestamp(comment.timestamp)}
                </p>
              </div>
              <div className="comments__text" key={comment.comment}>
                {comment.comment}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Comments;
