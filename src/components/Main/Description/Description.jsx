import "./Description.scss";
import viewsIcon from "../../../assets/icons/views.svg";
import likeIcon from "../../../assets/icons/likes.svg";
import { convertTimestamp } from "../../../functions/timeConverter";

function Description(props) {
  return (
    <>
      <h2 className="main__title">{props.apiSelectedVideo.title}</h2>

      <section className="main__info">
        <div className="main__artist">
          <p className="main__channel">By {props.apiSelectedVideo.channel}</p>
          <p className="main__date">
            {convertTimestamp(props.apiSelectedVideo.timestamp)}
          </p>
        </div>
        <div className="main__stats">
          <div className="main__view">
            <span className="main__img">
              <img className="main__icon" src={viewsIcon} alt="EyeCon" />
            </span>
            <span className="main__views">{props.apiSelectedVideo.views}</span>
          </div>
          <div className="main__like">
            <span className="main__img">
              <img src={likeIcon} alt="" className="main__heart" />
            </span>
            <p className="main__likes">{props.apiSelectedVideo.likes}</p>
          </div>
        </div>
      </section>
      <p className="main__description">{props.apiSelectedVideo.description}</p>
    </>
  );
}

export default Description;
