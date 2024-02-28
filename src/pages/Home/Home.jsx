import Hero from "../../components/Hero/Hero.jsx";
import Main from "../../components/Main/Main";
import videoDetails from "../../data/video-details.json";
// import nextVideos from "../../data/videos.json";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Home() {
  const params = useParams();
  const id = params.id;
  // console.log(id);

  //state variables for videos and selected video JSON FILE
  const [videos, setVideos] = useState(videoDetails);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  //state variables for API
  const [apiVideos, setApiVideos] = useState([]);
  const [apiSelectedVideo, setApiSelectedVideo] = useState({});

  const apiKey = "19348616-ff13-48bd-8c24-eefc2b33e072";
  const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

  //Use useEffect and axios to getVideos
  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get(`${apiUrl}videos?api_key=${apiKey}`);
      setApiVideos(response.data);
      // console.log(response.data);
    };

    getVideos();
  }, []);

  //GET REQUEST VIDEO WITH ID
  useEffect(() => {
    const getVideo = async () => {
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
      getVideo();
    }
  }, [id]);

  return (
    <>
      <Hero
        videos={videos}
        apiSelectedVideo={apiSelectedVideo}
        apiVideos={apiVideos}
      />
      <Main
        // handleVideoClick={handleVideoClick}
        videos={videos}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
        apiVideos={apiVideos}
        apiSelectedVideo={apiSelectedVideo}
        id={id}
      />
    </>
  );
}

export default Home;
