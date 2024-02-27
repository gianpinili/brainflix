import UploadForm from "../../components/UploadForm/UploadForm.jsx";
import "./Upload.scss";

function Upload() {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <UploadForm />
    </div>
  );
}

export default Upload;
