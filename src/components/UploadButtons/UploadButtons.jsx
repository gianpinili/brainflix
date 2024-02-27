import "./UploadButtons.scss";
import { Link, useNavigate } from "react-router-dom";
import publishButton from "../../assets/icons/publish.svg";

function UploadButtons() {
  return (
    <div className="upload__buttons">
      <Link className="upload__cancel" to="/">
        Cancel
      </Link>
      <button className="upload__button">
        <img className="upload__publish" src={publishButton} alt="" />
        Publish
      </button>
    </div>
  );
}

export default UploadButtons;
