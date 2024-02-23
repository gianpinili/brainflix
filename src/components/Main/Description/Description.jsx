import './Description.scss';
import viewsIcon from '../../../assets/icons/views.svg';
import likeIcon from '../../../assets/icons/likes.svg';

function Description (props) {

 
 return (
  <>
  <h2 className="main__title"><span className="main__title--mobile">Tech Trends:</span>  The Future of Artificial Intelligence</h2>

<section className="main__info">
 <div className="main__artist">
  <p className="main__channel">By Aiden Thompson</p>
  <p className="main__date">8/8/2023</p>
 </div>
 <div className="main__stats">
  <div className="main__view">
  <span class="main__img"><img class="main__icon" src={viewsIcon} alt="EyeCon" /></span>
  <span className="main__views">980,544</span>
  </div>
  <div className="main__like">
    <span className="main__img"><img src={likeIcon} alt="" className="main__heart" /></span>
  <p className="main__likes">22,479</p>
  </div>
 </div>
</section>
<p className="main__description">Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.</p>
  </>
 )
}

export default Description;