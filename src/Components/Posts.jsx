import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { baseUrl } from "../config";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { dateDiffrance } from "../utility";
import { NotiFicationMess } from './NotiFicationMess'
// import { GetAllPost } from "../ApiServices/ApiFetch";
// import { ShowComments } from "./ShowComments";
import {
  getAllPost2, deleteCommet, deletPost, show1posttypeAllComment,
  showCommentInputBox, upadtePostLike, addComentToPost
} from "../Redux/AllPost/allPostAction";
export const Posts = () => {
  const [allPost, setAllPost] = useState([]);
  console.log(allPost)
  const [sendComment, setSendComment] = useState("");
  // const [viewComment, setViewComment] = useState(false)
  let postIs = useSelector((store) => store.allPost.allPost);
  //   console.log("postIs postIs.allPost *****  ", postIs);
  const dispatch = useDispatch();
 


  useEffect(() => {
    const postData = () => {
      axios.get(`${baseUrl}/allpost`).then((res) => {
        console.log("res allpost", res);
        if (res?.data?.length > 0) {
          console.log("dispatch  action ");
          dispatch(getAllPost2(res?.data));
          setAllPost(res.data);
        }
      });
    };
    postData()
  }, [dispatch]);

  // const handleDispatch = () => {
  //   dispatch(getAllPost2(allPost));
  // };

  // const sendPost = () => {
  //   const postData = {
  //     id: uuid(),
  //     commentStatus: false,
  //     showCommentInput: false,
  //     commentMessage: [
  //       {
  //         id: uuid(),
  //         userProfilePic: "https://picsum.photos/200/150",
  //         userName: "shahjad ",
  //         userPosition: "flutter developer at amazon",
  //         commentTime: "2022-05-06",
  //         commentDecription: "own created for testing"
  //       }
  //     ],
  //     userCreatedPostName: "first post of days",
  //     totalLike: 0,
  //     postDescription: "hiring for java developer",
  //     nameOfOrganization: "masai school",
  //     postCreatedTime: new Date(),
  //     share: 0,
  //     totalComment: 0,
  //   };
  //   axios
  //     .post(`${baseUrl}/allpost`, postData)
  //     .then((res) => {
  //       //   dispatch(addsinglePost([postData, ...postIs]))
  //       console.log("post api data after posting ", res);
  //       if (res.status === 200) {
  //         postData()
  //       }
  //     })
  //     .catch((er) => {
  //       console.log("post api error ", er);
  //     });
  // };

  const handlePostLike = (id) => {
    const updatedData = postIs.map((item) =>
      item.id !== id ? item : { ...item, totalLike: item?.totalLike + 1 }
    );
    dispatch(upadtePostLike(updatedData));
  };
  const handleComment = (e) => {
    setSendComment(e.target.value);
  };

  const sendcommentOnPost = (id) => {
    const c = {
      userProfilePic: "",
      id: uuid(),
      userName: "meera karale",
      userPosition: "working at codewave",
      userActivityTrack: '',
      commentTime: new Date(),
      commentDecription: sendComment
    };
    const updatedComment = postIs.map((item) => {
      return (item.id !== id ? item : { ...item, commentMessage: [c, ...item?.commentMessage], commentStatus: true })
    }
    );
    dispatch(addComentToPost(updatedComment))
    setSendComment("");
  };
  const showComments = (id) => {
    const updatedCommentShow = postIs.map((item) =>
      item.id !== id ? item : {
        ...item,
        commentStatus: !item?.commentStatus
      }
    );
    dispatch(show1posttypeAllComment(updatedCommentShow))
  }

  const showCommetInput = (id) => {
    const data = postIs.map((item) =>
      item.id !== id ? item : {
        ...item, showCommentInput: !item?.showCommentInput
      })
    dispatch(showCommentInputBox(data))
  }
  const handleDeletComm = (id2, msg) => {
    // dispatch(deleteCommet(data))
    const data = postIs.map((item) =>
      item.id !== id2 ? item : { ...item, commentMessage: item?.commentMessage.filter((val) => val.commentDecription !== msg) })
    console.log('deleted comment', data,);
    dispatch(deleteCommet(data))

  }
  const handleDeletePost = (id) => {
    const updatedData = postIs.filter((item) => item.id !== id)
    dispatch(deletPost(updatedData))
  }

  return (
    <div>
      {/* <button onClick={sendPost}>Post data</button> */}
      {postIs?.map((item) => {
        return (
          <div key={item.id} className="post" style={{ marginBottom: "20px" }}>
            <br />
            {/* <button onClick={handleDispatch}>submit allPost</button> */}
            <div className="p1">
              <div className="postdata">
                <div className="left">
                  <div className="l1">
                    <img src="/images/profileimage.jpeg" alt="User Profile" />
                  </div>
                  <div className="l2">
                    <p>{item.userCreatedPostName} ⭐</p>
                    <button style={{ border: "1px solid #fff", background: "#1b2226" }} onClick={() => { handleDeletePost(item.id) }}>
                      <NotiFicationMess msg={"Delete Post"} btn={"deletd post"} />
                    </button>
                    <p className="small">{item.nameOfOrganization}</p>
                    <p className="small">
                      {dateDiffrance(new Date(), item.postCreatedTime)} ago
                    </p>
                    <p style={{ marginBottom: "20px" }}> {item.postDescription} </p>
                  </div>
                </div>
                <p className="righttext">
                  <i class="fa-solid fa-bookmark"></i>
                  <i class="fa-solid fa-ellipsis"></i>
                </p>
              </div>
            </div>
            <div className="p2">
              {!item.postImage ? (
                <h1>Loading .......</h1>
              ) : (
                <img
                  width="100%"
                  height="100%"
                  src={`${item.postImage}`}
                  // src={`https://picsum.photos/200/150`}
                  alt="PostImage"
                />
              )}
            </div>
            <div className="p3">
              <div className="reactions">
                <p className="small link">
                  <i class="fa-solid fa-heart i1"></i>
                  <i class="fa-solid fa-lightbulb i2"></i>
                  <i class="fa-solid fa-hands-clapping i3"></i>
                  <span> {item.totalLike} Likes</span>
                </p>
                <p onClick={() => { showComments(item.id) }} className="small">
                  {item.commentMessage?.length} Comments b . 15 Shares
                </p>
              </div>
              <hr />
              <div className="btns">
                <button
                  className="likebtn"
                  onClick={() => {
                    handlePostLike(item.id);
                  }}
                >
                  <i class="fa-solid fa-thumbs-up"></i> Like
                </button>
                <button onClick={() => { showCommetInput(item.id) }} className="commentbtn">
                  <i class="fa-solid fa-comment-dots"></i> Comments
                </button>
                <button className="sharebtn">
                  <i class="fa-solid fa-share"></i> Share
                </button>
                <button className="sendbtn">
                  <i class="fa-solid fa-paper-plane"></i> Send
                </button>
              </div>
            </div>

            <div>
              {item?.showCommentInput && (<div className="input-comment-main">
                <input
                  type="text"
                  value={sendComment}
                  onChange={handleComment}
                  clasName="inputComment"
                />
                {sendComment !== "" && (
                  <button onClick={() => sendcommentOnPost(item.id)}>post comment </button>
                )}
              </div>)
              }
              {
                item?.commentStatus && item?.commentMessage?.length !== 0 ? item?.commentMessage?.map((val) => {
                  return (
                    <>
                      <hr />
                      <br />
                      <button onClick={() => {
                        handleDeletComm(
                          item.id || item.commentDecription, val.commentDecription)
                      }}>
                        <NotiFicationMess msg={"Delete this Comment"} btn={"deletd comment"} />
                      </button>
                      <div
                        className="comment-main"
                        style={{ width: "100%", border: "1px solid white !important", display: "flex", flexDirection: "row", marginTop : "10px" }}
                      >
                        <div style={{ margin: "6px 0 0 0" }}>
                          <img
                            width="40px"
                            height="40px"
                            style={{ borderRadius: "50%" }}
                            src="/images/profileimage.jpeg"
                            alt="userProfile"
                          />
                        </div>
                        <div style={{marginLeft : "10px", display : "flex" , flexDirection : "column", background:"#3c4345", padding : "10px", borderRadius : "0 6px 6px 6px", width : "100%"}}>
                          <p className="userName"> {val.userName} </p>
                          <p className="small"> {val.userPosition} </p>
                          <p className="small"> {dateDiffrance(val.commentTime, new Date())} </p>
                          <div className="congratulactions">
                            {val.commentDecription}
                          </div>
                        </div>
                      </div>
                      <div style={{ backgroundColor: 'blue !important' }}> <br /></div>
                    </>
                  )
                })
                  : null
              }

            </div>

          </div>
        );
      })}
    </div>
  );
};

// //     <div>
// <ShowComments/>
// </div>
