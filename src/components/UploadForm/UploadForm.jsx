import "./UploadForm.scss";
import { useNavigate, Link } from "react-router-dom";
import UploadButtons from "../../components/UploadButtons/UploadButtons.jsx";

function UploadForm() {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    alert("Video Uploaded");

    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit} className="upload__form">
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

      <UploadButtons />
    </form>
  );
}

export default UploadForm;
