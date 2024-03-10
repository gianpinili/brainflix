import "./Hero.scss";
import { useRef, useState, useEffect } from "react";
import playButton from "../../assets/icons/play.svg";
import pauseButton from "../../assets/icons/pause.svg";
import volumeUp from "../../assets/icons/volume_up.svg";
import volumeMute from "../../assets/icons/volume_off.svg";
import fullScreen from "../../assets/icons/fullscreen.svg";

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function Hero(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);
  const scrubberRef = useRef(null);

  const imageUrl = "http://localhost:8080/images";

  //set the video duration
  useEffect(() => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
      setCurrentTime(Math.random() * videoRef.current.duration);
    }
  }, [videoRef.current?.duration]);

  useEffect(() => {
    // Reset video when props.apiSelectedVideo changes
    if (videoRef.current) {
      videoRef.current.load();
      setIsPlaying(false);
      if (typeof props.apiSelectedVideo.duration === "number") {
        setDuration(props.apiSelectedVideo.duration);
      }
    }
  }, [props.apiSelectedVideo]);

  //toggle play/pause video on click of play/pause button
  const togglePlay = () => {
    try {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    } catch (error) {
      console.error("Error toggling play:", error);
    }
  };

  //set video time
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  //set video time based on scrubber
  const handleScrub = (e) => {
    const scrubTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = scrubTime;
      setCurrentTime(scrubTime);
    }
  };

  //full screen video on click
  const handleFullScreen = () => {
    if (videoRef.current && videoRef.current.webkitRequestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  //mute video on click
  const handleVolumeToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Toggle mute state
    }
  };

  return (
    <section className="hero">
      <video
        ref={videoRef}
        poster={`${imageUrl}/${props.apiSelectedVideo.image}`}
        className="hero__video"
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={props.apiSelectedVideo.video} type="video/mp4" />
      </video>
      <div className="hero__controls">
        <div className="hero__left">
          <img
            className="hero__play"
            src={isPlaying ? pauseButton : playButton}
            alt=""
            onClick={togglePlay}
          />
        </div>
        <div className="hero__middle">
          <input
            className="hero__slider"
            type="range"
            min="0"
            max={duration}
            step="0"
            value={currentTime}
            onChange={handleScrub}
            ref={scrubberRef}
          />
          <span className="hero__timestamp">{`${formatTime(
            currentTime
          )} / ${formatTime(duration)}`}</span>
        </div>
        <div className="hero__right">
          <img
            className="hero__full"
            src={fullScreen}
            alt=""
            onClick={handleFullScreen}
          />
          <img
            className="hero__volume"
            src={
              videoRef.current && videoRef.current.muted ? volumeUp : volumeMute
            }
            alt=""
            onClick={handleVolumeToggle}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
