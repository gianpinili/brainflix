import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import videoDetails from "./data/video-details.json";
import { useState } from "react";

function App() {
  //state variables for videos and selected video
  const [videos, setVideos] = useState(videoDetails);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  //function to handle video click
  function handleVideoClick(id) {
    const clickedVideo = videos.find((video) => {
      return video.id === id;
    });
    //set selected video
    setSelectedVideo(clickedVideo);
  }

  return (
    <>
      <Header />
      <Hero videos={videos} selectedVideo={selectedVideo} />
      <Main
        handleVideoClick={handleVideoClick}
        videos={videos}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
      />
    </>
  );
}

export default App;
