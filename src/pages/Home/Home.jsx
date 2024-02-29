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

  const apiKey = "19348616-ff13-48bd-8c24-eefc2b33e073";
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

  //State vriables for comments
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  //create a post request
  function newComment(event) {
    event.preventDefault();
    const postComment = async (comment) => {
      const response = await axios.post(
        "https://unit-3-project-api-0a5620414506.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8/comments?api_key=19348616-ff13-48bd-8c24-eefc2b33e073",
        comment
      );

      // console.log(response.data);
      return response.data;
    };

    console.log(event.target.name.value);
    console.log(event.target.comment.value);

    const name = event.target.name.value;
    const comment = event.target.comment.value;

    postComment({ name, comment });
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
