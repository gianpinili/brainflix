import "./Videos.scss";
import { Link } from "react-router-dom";

function Videos(props) {
  console.log(props.apiSelectedVideo);
  return (
    <>
      {props.apiVideos
        .filter((video) => video.id !== props.apiSelectedVideo.id)
        .map((video) => (
          <Link to={`/${video.id}`} key={video.id} className="videos__link">
            <div className="videos__template">
              <div className="videos__image">
                <img className="videos__img" src={video.image} alt="" />
              </div>
              <div className="videos__info">
                <p className="videos__title" key={video.title}>
                  {video.title}
                </p>
                <p className="videos__channel" key={video.channel}>
                  {video.channel}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}

export default Videos;
