import Hero from "../../components/Hero/Hero.jsx";
import Main from "../../components/Main/Main";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Home() {
  const params = useParams();
  const id = params.id;

  //state variables for API
  const [apiVideos, setApiVideos] = useState([]);
  const [apiSelectedVideo, setApiSelectedVideo] = useState({});

  const apiKey = "19348616-ff13-48bd-8c24-eefc2b33e080";
  const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

  //Use useEffect and axios to getVideos
  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get(`${apiUrl}videos?api_key=${apiKey}`);
      setApiVideos(response.data);
    };

    getVideos();
  }, []);

  //GET REQUEST VIDEO WITH ID
  useEffect(() => {
    const getVideo = async (id) => {
      try {
        const response = await axios.get(
          `${apiUrl}videos/${id}?api_key=${apiKey}`
        );
        setApiSelectedVideo(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (id) {
      getVideo(id);
    } else {
      async function getDefaultVideo() {
        const response = await axios.get(`${apiUrl}videos/?api_key=${apiKey}`);

        getVideo(response.data[0].id);
      }
      getDefaultVideo();
    }
  }, [id]);

  // State vriables for comments
  // const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  //TODO: RENDER NEW COMMENTS ON TOP OF COMMENT LIST
  //function that handles the new comment
  function newComment(event) {
    event.preventDefault();
    setName(event.target.elements.name.value);
    setComment(event.target.elements.comment.value);

    const postComment = async (comment) => {
      const response = await axios.post(
        `${apiUrl}videos/${id}/comments?api_key=${apiKey}`,
        comment
      );
      // console.log(response.data);
      return response.data;
    };

    const newUserComment = {
      name: event.target.elements.name.value,
      comment: event.target.elements.comment.value,
    };

    //function to post the new comment
    postComment(newUserComment).then((response) => {
      //response is the new comment

      //creates a copy of apiSelectedVideo using spread operator
      const updatedApiSelectedVideo = { ...apiSelectedVideo };

      // TODO: supposed to add the new comment to the beginning of the array
      updatedApiSelectedVideo.comments.unshift(response.data);

      //updates apiSelectedVideo with new comments
      setApiSelectedVideo(updatedApiSelectedVideo);

      // Clear input fields
      event.target.elements.name.value = "";
      event.target.elements.comment.value = "";

      async function getVideo() {
        const response = await axios.get(
          `${apiUrl}videos/${id}?api_key=${apiKey}`
        );
        setApiSelectedVideo(response.data);
      }
      getVideo();
    });
  }

  return (
    <>
      <Hero apiSelectedVideo={apiSelectedVideo} apiVideos={apiVideos} />
      <Main
        apiVideos={apiVideos}
        apiSelectedVideo={apiSelectedVideo}
        newComment={newComment}
      />
    </>
  );
}

export default Home;
