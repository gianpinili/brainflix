import "./UploadForm.scss";
import { useNavigate } from "react-router-dom";
import UploadButtons from "../../components/UploadButtons/UploadButtons.jsx";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import axios from "axios";
import { useState } from "react";

const apiUrl = "http://localhost:8080/";

function UploadForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  //Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    //form validation
    if (formData.title === "") {
      document
        .getElementsByClassName("upload__input")[0]
        .classList.add("upload__input--error");
      alert("Please enter the title of your video");
      return;
    } else {
      document
        .getElementsByClassName("upload__input")[0]
        .classList.remove("upload__input--error");
    }

    if (formData.description === "") {
      document
        .getElementsByClassName("upload__input--description")[0]
        .classList.add("upload__input--error");
      alert("Please enter the description of your video");
      return;
    } else {
      document
        .getElementsByClassName("upload__input--description")[0]
        .classList.remove("upload__input--error");
    }

    //use FormData to send the data to the server. use append to add the data
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("image", formData.image); // Append the file here

    //post request that posts the data to the server
    try {
      await axios.post(`${apiUrl}videos`, formDataToSend);
      alert("Video uploaded");
      navigate("/");
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("Error uploading video");
    }
  }

  //Function to handle input change and update the state with the new value
  function handleInputChange(event) {
    const { name, value, files } = event.target;
    //if there is a file selected set the value to the file else set it to the value
    const newValue = files ? files[0] : value;

    //use spread operator to update the state with the new value
    setFormData({
      ...formData,
      [name]: newValue,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="upload__form"
    >
      <div className="upload__content">
        <div className="upload__thumbnail">
          <p className="upload__subtitle">Video Thumbnail</p>
          <img className="upload__img" src={uploadPreview} alt="" />
          <input
            name="image"
            onChange={handleInputChange}
            className="upload__poster"
            type="file"
          />
        </div>
        <div className="upload__info">
          <p className="upload__subtitle">Title your video</p>
          <input
            className="upload__input"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Add a title to your video"
          />
          <p className="upload__subtitle">Add a video description</p>
          <textarea
            className="upload__input upload__input--description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Add a description to your video"
          />
        </div>
      </div>

      <UploadButtons />
    </form>
  );
}

export default UploadForm;
