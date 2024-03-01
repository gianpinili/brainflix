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

  const apiKey = "19348616-ff13-48bd-8c24-eefc2b33e083";
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
        response.data.comments.sort((a, b) => b.timestamp - a.timestamp);
        setApiSelectedVideo(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    // if there is an id in the url call getVideo with the id else call getVideo with the first video
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
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  //TODO: RENDER NEW COMMENTS ON TOP OF COMMENT LIST
  //function that handles the new comment
  function newComment(event) {
    event.preventDefault();
    setName(event.target.elements.name.value);
    setComment(event.target.elements.comment.value);

    const postComment = async (comment) => {
      try {
        const response = await axios.post(
          `${apiUrl}videos/${id}/comments?api_key=${apiKey}`,
          comment
        );
        return response.data;
      } catch (error) {
        console.error("Error posting comment:", error);
        throw error;
      }
    };

    const newUserComment = {
      name: event.target.elements.name.value,
      comment: event.target.elements.comment.value,
    };

    // Post the new comment and then fetch the updated video data
    postComment(newUserComment)
      .then(() => {
        fetchUpdatedVideoData();
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
      });
  }

  // Function to fetch updated video data including the new comment
  const fetchUpdatedVideoData = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}videos/${id}?api_key=${apiKey}`
      );
      // Set the updated video data
      response.data.comments.sort((a, b) => b.timestamp - a.timestamp);
      setApiSelectedVideo(response.data);
    } catch (error) {
      console.error("Error fetching updated video data:", error);
    }
  };

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
