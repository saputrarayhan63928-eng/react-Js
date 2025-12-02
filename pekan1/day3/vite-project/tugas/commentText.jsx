import React from "react";
import User from "./user";

function CommentText(comment){
    return(
        <div style={{ border: '1px solid gray', padding: '15px', margin: '10px' }}>
            <User nama={comment.nama} foto={comment.foto} />
            <p>{comment.isi}</p>
        </div>
    )
}

export default CommentText;