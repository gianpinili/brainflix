import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import videoDetails from './data/video-details.json';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Main props={videoDetails}/>
    </>
  );
}

export default App;
