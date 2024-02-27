import "./UploadButtons.scss";
import { Link, useNavigate } from "react-router-dom";

function UploadButtons() {
  return (
    <div className="upload__buttons">
      <Link to="/">
        <button className="upload__button">Cancel</button>
      </Link>
      <button className="upload__button">Publish</button>
    </div>
  );
}

export default UploadButtons;
