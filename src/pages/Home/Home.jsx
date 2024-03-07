import Hero from "../../components/Hero/Hero.jsx";
import Main from "../../components/Main/Main";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Home() {
  const params = useParams();
  const id = params.id;

  //state variables for API
  const [apiVideos, setApiVideos] = useState([]);
  const [apiSelectedVideo, setApiSelectedVideo] = useState({});

  // const apiKey = "19348616-ff13-48bd-8c24-eefc2b33e087";
  const apiUrl = "http://localhost:8080/";

  //Use useEffect and axios to getVideos
  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get(`${apiUrl}videos`);
      setApiVideos(response.data);
    };

    getVideos();
  }, []);

  //GET REQUEST VIDEO WITH ID
  useEffect(() => {
    const getVideo = async (id) => {
      try {
        const response = await axios.get(`${apiUrl}videos/${id}`);
        response.data.comments.sort((a, b) => b.timestamp - a.timestamp);
        setApiSelectedVideo(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    // if there is an id in the url call getVideo with the id else call getVideo with the first video
    if (id) {
      getVideo(id);
    } else {
      async function getDefaultVideo() {
        const response = await axios.get(`${apiUrl}videos`);

        getVideo(response.data[0].id);
      }
      getDefaultVideo();
    }
  }, [id]);

  //Function to post a new comment
  async function newComment(event) {
    event.preventDefault();
    const newName = event.target.elements.name.value;
    const newComment = event.target.elements.comment.value;

    //form validation
    if (newName === "") {
      document
        .getElementsByClassName("comments__input--name")[0]
        .classList.add("comments__name--error");
      document.getElementsByClassName("comments__input--name");
      alert("Please enter a name");
      return;
    } else {
      document
        .getElementsByClassName("comments__input--name")[0]
        .classList.remove("comments__name--error");
    }

    if (newComment === "") {
      document
        .getElementsByClassName("comments__input--comment")[0]
        .classList.add("comments__name--error");
      document.getElementsByClassName("comments__input--comment");
      alert("Please enter a comment");
      return;
    } else {
      document
        .getElementsByClassName("comments__input--comment")[0]
        .classList.remove("comments__name--error");
    }

    //if there is an id in the url post the comment
    if (id) {
      try {
        await axios.post(`${apiUrl}videos/${id}/comments`, {
          name: newName,
          comment: newComment,
        });
        const response = await axios.get(`${apiUrl}videos/${id}`);
        response.data.comments.sort((a, b) => b.timestamp - a.timestamp);
        setApiSelectedVideo(response.data);
        event.target.reset();
      } catch (error) {
        console.error("Error posting or fetching comment:", error);
      }
    } else {
      //if there is no id in the url post the comment to the default video
      async function postDefaultPage() {
        await axios.post(
          `${apiUrl}videos/84e96018-4022-434e-80bf-000ce4cd12b8/comments`,
          {
            name: newName,
            comment: newComment,
          }
        );
        const response = await axios.get(
          `${apiUrl}videos/84e96018-4022-434e-80bf-000ce4cd12b8`
        );
        response.data.comments.sort((a, b) => b.timestamp - a.timestamp);
        setApiSelectedVideo(response.data);
      }
      postDefaultPage();
      event.target.reset();
    }
  }

  //Function to delete a comment
  function deleteComments(commentId, id) {
    //gets the updated comments
    const getUpdatedComments = async () => {
      const response = await axios.get(`${apiUrl}videos/${id}`);
      response.data.comments.sort((a, b) => b.timestamp - a.timestamp);
      setApiSelectedVideo(response.data);
    };
    //finally deletes the comment
    const deleteComment = async (commentId, id) => {
      await axios.delete(`${apiUrl}videos/${id}/comments/${commentId}`);
      getUpdatedComments(); //get the updated comments
    };
    deleteComment(commentId, id); //delete the comment
  }

  //function to like the video
  function likeVideos(id) {
    const likeVideo = async () => {
      await axios.put(`${apiUrl}videos/${id}`);

      //get updated video details
      const response = await axios.get(`${apiUrl}videos/${id}`);
      setApiSelectedVideo(response.data);
    };

    likeVideo();
  }

  return (
    <>
      <Hero apiSelectedVideo={apiSelectedVideo} apiVideos={apiVideos} />
      <Main
        apiVideos={apiVideos}
        apiSelectedVideo={apiSelectedVideo}
        newComment={newComment}
        deleteComments={deleteComments}
        id={id}
        likeVideos={likeVideos}
      />
    </>
  );
}

export default Home;
