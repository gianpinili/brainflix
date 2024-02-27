import { Link } from "react-router-dom";

function Upload() {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__form">
        <div className="upload__thumbnail">
          <p className="upload__subtitle">Video Thumbnail</p>
          <img
            className="upload__img"
            src="https://placehold.co/300x200"
            alt=""
          />
        </div>
        <div className="upload__info">
          <p className="upload__subtitle">Title your video</p>
          <input className="upload__input" type="text" />
          <p className="upload__subtitle">Add a video description</p>
          <textarea className="upload__input" type="text" />
        </div>
      </div>
      <div className="upload__buttons">
        <Link to="/">
          <button className="upload__button">Cancel</button>
        </Link>
        <Link to="/">
          <button className="upload__button">Publish</button>
        </Link>
      </div>
    </div>
  );
}

export default Upload;
