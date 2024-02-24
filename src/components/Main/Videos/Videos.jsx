import "./Videos.scss";

function Videos(props) {
  return (
    <>
      {props.videos
        .filter((video) => video.id !== props.selectedVideo.id)
        .map((video) => (
          <div
            onClick={() => {
              props.handleVideoClick(video.id);
            }}
            className="videos__template"
            key={video.id}
          >
            <div className="videos__image">
              <img className="videos__img" src={video.image} alt="" />
            </div>
            <div className="videos__info">
              <p className="videos__title" key={video.title}>
                {video.title}
              </p>
              <p className="videos__channel" key={video.channel}>
                {video.channel}
              </p>
            </div>
          </div>
        ))}
    </>
  );
}

export default Videos;

{
  /* <div className="videos__template">
<div className="videos__image"><img className='videos__img' src="https://placehold.co/100x70" alt="" />
</div>
<div className="videos__info">
 <p className="videos__title">Exploring Cities of Europe</p>
 <p className="videos__channel">Aiden Thompson</p>
</div>
</div> */
}
