import "./UploadButtons.scss";
import { Link, useNavigate } from "react-router-dom";

function UploadButtons() {
  return (
    <div className="upload__buttons">
      <Link className="upload__cancel" to="/">
        Cancel
      </Link>
      <button className="upload__button">Publish</button>
    </div>
  );
}

export default UploadButtons;
