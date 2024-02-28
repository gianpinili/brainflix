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

  const apiKey = "19348616-ff13-48bd-8c24-eefc2b33e072";
  const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const defaultVideo = "84e96018-4022-434e-80bf-000ce4cd12b8";

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
    const getVideo = async (videoId) => {
      try {
        const response = await axios.get(
          `${apiUrl}videos/${videoId}?api_key=${apiKey}`
        );
        setApiSelectedVideo(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (id) {
      getVideo(id);
    } else {
      getVideo(defaultVideo);
    }
  }, [id]);

  return (
    <>
      <Hero apiSelectedVideo={apiSelectedVideo} apiVideos={apiVideos} />
      <Main apiVideos={apiVideos} apiSelectedVideo={apiSelectedVideo} />
    </>
  );
}

export default Home;
