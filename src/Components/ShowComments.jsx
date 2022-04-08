import React,{useState} from "react";

export const ShowComments = () => {
    const [sendComment, setSendComment]=useState('')

    const handleComment=(e)=>{
        setSendComment(e.target.value);
        console.log('eeee', e.target.value)
    }
     const sendPost=(id)=>{
        // setSendComment('');
        console.log('cicked on btn ', id)

    }
  return (
    <div>
      <div className="input-comment-main">
        <input type="text" vaue={sendComment} onChange={handleComment} clasName="inputComment" />
        {sendComment !=='' &&(  <button onClick={sendPost}>post </button>)}
      
      </div>
      <div
        className="comment-main"
        style={{ width: "100%", border: "1px solid white !important" }}
      >
        <div>
          {" "}
          <img width="20px" height="20px" src="#" alt="userProfile" />{" "}
        </div>
        <p className="userName">Shivling Bhange</p>
        <p>full stack developer masai</p>
        <p>21 m </p>
        <p>this is comments part</p>
        <div className="congratulactions">congratulactions for this</div>
      </div>
    </div>
  );
};
