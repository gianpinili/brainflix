import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import videoDetails from './data/video-details.json';
import { useState } from 'react';

function App() {

  const [videos, setVideos] = useState(videoDetails);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <Header />
      <Hero videos={videos} selectedVideo={selectedVideo} />
      <Main videos={videos} setSelectedVideo={setSelectedVideo}/>
    </>
  );
}

export default App;
