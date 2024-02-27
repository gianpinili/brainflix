import "./Main.scss";
import Description from "./Description/Description.jsx";
import CommentForm from "./CommentForm/CommentForm.jsx";
import Comments from "./Comments/Comments.jsx";
import Videos from "./Videos/Videos.jsx";

function Main(props) {
  console.log(props.apiVideos);
  return (
    <main className="main">
      <div className="main__left">
        <Description
          videos={props.videos}
          selectedVideo={props.selectedVideo}
        />

        <section className="comments">
          <CommentForm
            videos={props.videos}
            selectedVideo={props.selectedVideo}
          />

          <Comments videos={props.videos} selectedVideo={props.selectedVideo} />
        </section>
      </div>
      <div className="videos">
        <p className="videos__text">Next Videos</p>
        <Videos
          videos={props.videos}
          selectedVideo={props.selectedVideo}
          handleVideoClick={props.handleVideoClick}
          apiVideos={props.apiVideos}
        />
      </div>
    </main>
  );
}

export default Main;
