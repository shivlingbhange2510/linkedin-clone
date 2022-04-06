import React,{useState, useEffect} from 'react'
import { v4 as uuid } from 'uuid';
import { baseUrl } from '../config'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {dateDiffrance} from '../utility'
import {GetAllPost} from '../ApiServices/ApiFetch'
import {getAllPost2, upadtePostLike} from '../Redux/AllPost/allPostAction'
export const Posts = () => {
    const[allPost, setAllPost]=useState([]);
    let postIs=useSelector((store)=>store.allPost.allPost);
    console.log('postIs postIs.allPost *****  ', postIs)
    const dispatch=useDispatch();
    const postData=()=>{
        axios.get(`${baseUrl}/allpost`)
        .then((res) => {
            console.log('res allpost', res);
            if (res?.data?.length > 0) {
                console.log('dispatch  action ')
                dispatch(getAllPost2(res?.data))
                setAllPost(res.data);
            }
        })
    }

    useEffect(()=>{
        postData()
    },[])
    const handleDispatch=()=>{
        dispatch(getAllPost2(allPost))
    }
    const handleLike=(id)=>{
        console.log('cicked on like buttn : ', id)
    }
    const sendPost=()=>{
        const postData={
            id:uuid(),
            userCreatedPostName:'first post of days',
            totalLike:0, 
            postDescription:'hiring for java developer',
            nameOfOrganization:'masai school',
            postCreatedTime: new Date(),
            share:0,
            totalComment:0,
        }
        axios.post(`${baseUrl}/allpost`,
        postData    
        )
        .then((res)=>{
            console.log('post api data after posting ', res)
        })
        .catch((er)=>{
            console.log('post api error ', er)
        })
    }
 
    const handlePostLike=(id)=>{
        console.log('############## ', id);
        const updatedData=postIs.map((item)=> item.id!==id ? item:{...item, totalLike:item?.totalLike+1})

        dispatch(upadtePostLike(updatedData))
    }
  return (
    <div>
        <button onClick={sendPost}>Post data</button>
        {postIs?.map((item)=>{
            return(
                <div className="post">
                    <br/>
                {/* <button onClick={handleDispatch}>submit allPost</button> */}
                               <div className="p1">
                                   <div className="postdata">
                                       <div className="left">
                                           <div className="l1">
                                               <img src="/images/profileimage.jpeg" alt="User Profile" />
                                           </div>
                                           <div className="l2">
                                               <p>{item.userCreatedPostName} ⭐</p>
                                               <p className='small'>{item.nameOfOrganization}</p>
                                               <p className='small'>{dateDiffrance(new Date(), item.postCreatedTime)} ago</p>
                                           </div>
                                       </div>
                                       <p className="righttext">
                                           <i class="fa-solid fa-ellipsis"></i>
                                       </p>
                                   </div>
                               </div>
                               <div className="p2">
                                   <p> {item.postDescription} </p>
                                 {!item.postImage ? <h1>Loading .......</h1>: <img width='450px' height='300px'  src={`${item.postImage}`} alt="PostImage" />}
                               </div>
                               <div className="p3">
                                   <div className="reactions">
                                       <p className='small link'>
                                       <i class="fa-solid fa-heart i1"></i>
                                       <i class="fa-solid fa-lightbulb i2"></i>
                                       <i class="fa-solid fa-hands-clapping i3"></i>
                                       <span> {item.totalLike} Likes</span> 
                                       </p>
                                       <p className='small'>{item.totalComment} Comments . 15 Shares</p>
                                   </div>
                                   <hr />
                                   <div className="btns">
                                       <button className='likebtn' onClick={()=>{ handlePostLike(item.id)}} ><i class="fa-solid fa-thumbs-up"></i> Like</button>
                                       <button className='commentbtn'><i class="fa-solid fa-comment-dots"></i> Comment</button>
                                       <button className='sharebtn'><i class="fa-solid fa-share"></i> Share</button>
                                       <button className='sendbtn'><i class="fa-solid fa-paper-plane"></i> Send</button>
                                   </div>
                               </div>
                           </div>
            )
        })
        
   }
    </div>
  )
}
