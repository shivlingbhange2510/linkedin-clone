import React, { useState } from "react";
import "../style.css"

export const ShowComments = () => {
  const [sendComment, setSendComment] = useState('')

  const handleComment = (e) => {
    setSendComment(e.target.value);
    console.log('eeee', e.target.value)
  }
  const sendPost = (id) => {
    console.log('cicked on btn ', id)

  }
  return (
    <div>
      <div className="input-comment-main">
        <input type="text" vaue={sendComment} onChange={handleComment} clasName="inputComment" />
        {sendComment !== '' && (<button onClick={sendPost}>post </button>)}
      </div>
    </div>
  );
};
