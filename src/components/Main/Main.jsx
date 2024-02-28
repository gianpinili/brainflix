import "./Main.scss";
import Description from "./Description/Description.jsx";
import CommentForm from "./CommentForm/CommentForm.jsx";
import Comments from "./Comments/Comments.jsx";
import Videos from "./Videos/Videos.jsx";

function Main(props) {
  return (
    <main className="main">
      <div className="main__left">
        <Description apiSelectedVideo={props.apiSelectedVideo} />

        <section className="comments">
          <CommentForm />

          <Comments apiSelectedVideo={props.apiSelectedVideo} />
        </section>
      </div>
      <div className="videos">
        <p className="videos__text">Next Videos</p>
        <Videos
          apiVideos={props.apiVideos}
          apiSelectedVideo={props.apiSelectedVideo}
        />
      </div>
    </main>
  );
}

export default Main;
