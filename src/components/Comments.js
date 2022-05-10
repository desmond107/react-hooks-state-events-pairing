import React, {useState} from "react";
import Comment from "./Comment";

function Comments({ comments/*, onHideCommentsClick */}) {
    const [showCommentsMode, setShowCommentsMode] = useState(true);

    function handleClick() {
        setShowCommentsMode((showCommentsMode) => !showCommentsMode);
    }
    
    console.log(comments)
    const commentsOnDisplay = comments.map((comment) => (
        <Comment
            key={comment.id}
            user={comment.user}
            comment={comment.comment}
        />
    ))

    const display = showCommentsMode ? commentsOnDisplay : "";
    return (
        <div>
            <button onClick={handleClick}>{showCommentsMode ? "Hide Comments" : "Show Comments"}</button>
            <h1>Comments</h1>
            <div className="comments">
                {display}
            </div>
        </div>
    )
}

export default Comments;