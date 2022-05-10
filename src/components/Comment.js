import React from "react";

function Comment({ key, user, comment }) {
    return (
        <div className="comments">
            <h4>{user}</h4>
            <div><small>{comment}</small></div>
        </div>
    )
}

export default Comment;