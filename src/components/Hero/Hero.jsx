import './Hero.scss';
import playButton from '../../assets/icons/play.svg';
import pauseButton from '../../assets/icons/pause.svg';
import scrubButton from '../../assets/icons/scrub.svg';
import volumeUp from '../../assets/icons/volume_up.svg';
import volumeMute from '../../assets/icons/volume_off.svg';
import fullScreen from '../../assets/icons/fullscreen.svg';
import closeFullScreen from '../../assets/icons/close_fullscreen.svg';

function Hero () {
 return (
  <section className="hero">
   <video controls poster='https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg' className="hero__video"></video>

  </section>
 )
}

export default Hero;

{/* <div className="hero__controls">
<button className='hero__buttons'>
 {/* PLAY BUTTON 
<img src={playButton} className="hero__play" alt="" />
</button>
{/* PAUSE BUTTON 
<button className='hero__buttons'><img src={pauseButton} className="hero__pause" alt="" /></button>
{/* SCRUB slider? 
<span className="time-stamp"><img src={scrubButton} className="hero__scrub" alt="" />0:00 / 4:01</span>
{/* FULL SCREEN BUTTON *
<button className='hero__buttons'><img src={fullScreen} className="hero__fullscreen" alt="" /></button>
</div> */}