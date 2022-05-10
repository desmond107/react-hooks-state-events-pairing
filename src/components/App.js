import React, { useState } from "react";
import video from "../data/video.js";
import Header from "./Header";
import Comments from "./Comments";

function App() {
  const [upVotes, setUpVotes] = useState(9210);
  const [downVotes, setDownVotes] = useState(185);

  function hideCommentsButton() {
    console.log("got to function in App Component")

  }
  function handleUpVoteClick() {
    setUpVotes(upVotes + 1);
  }
  
  function handleDownVoteClick() {
    setDownVotes(downVotes + 1);
  }


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Header 
        title={video.title}
        views={video.views}
        uploaded={video.createdAt}
        onUpVoteClick={handleUpVoteClick}
        upVotes={upVotes}
        onDownVoteClick={handleDownVoteClick}
        downVotes={downVotes}/>
        <Comments 
        onHideCommentsClick={hideCommentsButton}
        comments={video.comments}/>
    </div>
  );
}

export default App;
