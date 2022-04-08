import React, {useState} from 'react';
import { v4 as uuid } from "uuid";
import { baseUrl } from "../config";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import {addsinglePost} from  "../Redux/AllPost/allPostAction";
import {ImgTOBase64} from './Images/ImgTOBase64';

export  function CreatePostBtn({startpost}) {
    const[imgData, setImgData]=useState('');
const[postDescription, setPosDescription]=useState('');
  let postIs = useSelector((store) => store.allPost.allPost);
    const dispatch = useDispatch();
  //   console.log("postIs postIs.allPost *****  ", postIs);
    // const dispatch = useDispatch();
    function exit() {
        startpost(false)
    }
let xx=  "ac877d11-505c-4b4a-91e1-34092181ed51";
xx= "c37d4d5e-3bcf-4783-b201-d6ffba31d32f";
    const postDelete=()=>{
        axios.delete(`${baseUrl}/allpost/${xx}`)
        .then((res)=>{
            console.log('delete api res is ', res);
        }).catch((er)=>{
            console.log('delete api error is  ', er);

        })
    }
    const sendPost = () => {
        const postData = {
          id: uuid(),
          postDescription,
          postImage:imgData,
          commentStatus: false,
          showCommentInput: false,
          commentMessage: [
            {
              id: uuid(),
              userProfilePic: "",
              userName: "shahjad ",
              userPosition: "flutter developer at amazon",
              commentTime: "2022-05-06",
              commentDecription: "own created for testing"
            }
            ],
          userCreatedPostName: "first post of last post of the year",
          totalLike: 0,
        //   postDescription: "hiring for image developer",
          nameOfOrganization: "masai school",
          postCreatedTime: new Date(),
          share: 0,
          totalComment: 0,
        };
        axios
          .post(`${baseUrl}/allpost`, postData)
          .then((res) => {
            //   dispatch(addsinglePost([postData, ...postIs]))
            console.log("post api data after posting ", res);
            exit();
            setPosDescription('')
            dispatch(addsinglePost(postData))
          
          })
          .catch((er) => {
            console.log("post api error ", er);
          });
      };
    
    if(imgData?.length>2){
        console.log('iiiiiiiiii ',  imgData)
    }
    return (
        <section className="s7">
            <div className="s77">
                <div className="d1">
                    {/* <button onClick={postDelete}>delete p</button> */}
                    <p>Create a Post</p>
                    <i onClick={exit} className="fa-solid fa-xmark"></i>
                </div>
                <hr />
                <div className="d2">
                    <div className="d20">
                        {/* <ImgTOBase64 setImgData={setImgData} /> */}
                        <img src="./images/profileimage.jpeg" alt="profileimage" />
                            <div className="d21">
                                <p>User Name</p>
                                <p className="anymore">
                                    <i className="fa-solid fa-earth-americas"></i>
                                    Anyone
                                    <i className="fa-solid fa-caret-down"></i>
                                </p>
                            </div>
                    </div>
                    <div className="d22">
                        <textarea onChange={(e)=>setPosDescription(e.target.value)} placeholder="What do you want to talk about?"></textarea>
                        <ImgTOBase64 setImgData={setImgData} />

                    </div>
                    <div className="d23">
                        <p className="hastag">Add Hastag</p>
                    </div>
                </div>
                <div className="d3">
                    <div className="d31">
                        <i className="fa-solid fa-image"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-solid fa-file"></i>
                        <i className="fa-solid fa-bag-shopping"></i>
                        <i className="fa-solid fa-sun"></i>
                        <i className="fa-solid fa-chart-simple"></i>
                        <i className="fa-solid fa-ellipsis"></i>
                        &nbsp; | &nbsp;
                        <p>
                            <i className="fa-solid fa-earth-africa"></i>
                            Anyone
                        </p>
                    </div>
                    <div className="d32">
                        <button onClick={sendPost} >Post</button>
                    </div>
                </div>
            </div>
        </section>
    )
}