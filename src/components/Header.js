import React from "react";
import App from "./App";

function Header({ title, views, uploaded, upVotes,onUpVoteClick, downVotes, onDownVoteClick }) {
    function handleUpVote(){
        onUpVoteClick()
    }
    function handleDownVote(){
        onDownVoteClick()
    }
    return (
        <div>
            <h1>{title}</h1>
            <h5><small>{views} Views | Uploaded {uploaded}</small></h5>
            <div>
                <button onClick={handleUpVote}> 👍 {upVotes} </button>
                <button onClick={handleDownVote}>{downVotes} 👎</button>
            </div>
            <br></br>
        </div>
    )
}

export default Header;