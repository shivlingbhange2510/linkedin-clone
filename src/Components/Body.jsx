import React, { useState } from 'react'
import {CreatePostBtn} from './CreatePostBtn';
import {Posts} from './Posts'
export default function Body() {
    const [num, setNum] = useState(true);
    const [startpost, setstartpost] = useState(false)
    function startPost() {
        setstartpost(true)
    }
    
    function opennav() {
        var show = document.querySelector(".showmoretext")
        if (num) {
            setNum(!num)
            show.innerHTML = `<p>Show more <i className="fa-solid fa-chevron-down"></i></p>`
        } else {
            setNum(!num)
            show.innerHTML = `<p>Show less <i className="fa-solid fa-chevron-up"></i></p>`
        }
    }
    return (
        <>
            {startpost && <CreatePostBtn startpost={setstartpost} />}
            <section className="s2">
                <div className="body">
                    <div className="left">
                        <div className="b1">
                            <div className="box1">
                                <div className="box11">
                                    <img src="/images/profilebg.webp" alt="User Background" />
                                </div>
                                <div className="box12">
                                    <img src="/images/profileimage.jpeg" alt="User Image" />
                                    <p><b>User Name</b></p>
                                    <p className="small">Aspiring Full Stack Web Development at Masai School</p>
                                </div>
                            </div>
                            {(num || window.innerWidth > "853") && (<div className="box111" id="box111">
                                <hr />
                                <div className="p11 hover">
                                    <div className="p1 mu-4">
                                        <p className="small">Connections</p>
                                        <span>1000</span>
                                    </div>
                                    <p className="p1"><b>Connect with alumni</b></p>
                                </div>
                                <div className="p1 mb-4 hover">
                                    <p className="small">Who viewed your profile</p>
                                    <span>1000</span>
                                </div>
                                <hr />
                                <div className="p2 hover">
                                    <p className="small">Access exclusive tools & insights</p>
                                    <p><i className="fa-solid fa-square" style={{ color: "#f8e77c" }}></i> <b>Try Premium for free</b></p>
                                </div>
                                <hr />
                                <div className="p2 mb-4 mu-4 hover">
                                    <p><i className="fa-solid fa-bookmark"></i> My items</p>
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className="showmorebtn" onClick={opennav}>
                        <p className="showmoretext">Show less <i className="fa-solid fa-chevron-up"></i></p>
                    </div>
                    <div className="right">
                        <div className="up">
                            <div className="d1">
                                <div className="d2">
                                    <img src="/images/profileimage.jpeg" alt="User Image" />
                                    <p onClick={startPost}>Start a post</p>
                                </div>
                                <div className="d3">
                                    <div className="photo">
                                        <i style={{ color: "#70b5f9" }} className="fa-solid fa-image"></i>
                                        <p>Photo</p>
                                    </div>
                                    <div className="video">
                                        <i style={{ color: "#7fc15e" }} className="fa-brands fa-youtube"></i>
                                        <p>Video</p>
                                    </div>
                                    <div className="event">
                                        <i style={{ color: "#e7a33e" }} className="fa-solid fa-calendar-week"></i>
                                        <p>Event</p>
                                    </div>
                                    <div className="article">
                                        <i style={{ color: "#fc9295" }} className="fa-solid fa-newspaper"></i>
                                        <p>Write Article</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d4">
                            <Posts/>
                             <br/>
                                <div className="post">
                                    <div className="p1">
                                        <div className="postdata">
                                            <div className="left">
                                                <div className="l1">
                                                    <img src="/images/profileimage.jpeg" alt="User Profile" />
                                                </div>
                                                <div className="l2">
                                                    <p>Masai School ⭐</p>
                                                    <p className='small'>Coding School</p>
                                                    <p className='small'>12h ago</p>
                                                </div>
                                            </div>
                                            <p className="righttext">
                                                <i className="fa-solid fa-ellipsis"></i>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p2">
                                        <img src="" alt="Post Image" />
                                    </div>
                                    <div className="p3">
                                        <div className="reactions">
                                            <p className='small link'>
                                                <i className="fa-solid fa-heart i1"></i>
                                                <i className="fa-solid fa-lightbulb i2"></i>
                                                <i className="fa-solid fa-hands-clapping i3"></i>
                                                <span> 12,223 Likes</span>
                                            </p>
                                            <p className='small'>12 Comments . 15 Shares</p>
                                        </div>
                                        <hr />
                                        <div className="btns">
                                            <button className='likebtn'><i className="fa-solid fa-thumbs-up"></i> Like</button>
                                            <button className='commentbtn'><i className="fa-solid fa-comment-dots"></i> Comment</button>
                                            <button className='sharebtn'><i className="fa-solid fa-share"></i> Share</button>
                                            <button className='sendbtn'><i className="fa-solid fa-paper-plane"></i> Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="down">
                            <div className="right1">
                                <div className="news">
                                    <div className="newsheading">
                                        <p><b>LinkedIn News</b></p>
                                        <i className="fa-solid fa-circle-info"></i>
                                    </div>
                                    <div className="newslist">
                                        <ul>
                                            <li><b>Lorem ipsum dolor sit amet.</b> <span>5d ago</span> </li>
                                            <li><b>Lorem ipsum dolor sit amet sit amet.</b> <span>4d ago</span> </li>
                                            <li><b>Lorem sit amet ipsum dolor sit amet.</b> <span>3d ago</span> </li>
                                            <li><b>Lorem ipsum sit amet dolor sit amet.</b> <span>2d ago</span> </li>
                                            <li><b>Lorem ipsum dolor sit amet.</b> <span>1d ago</span> </li>
                                        </ul>
                                        <p>Show more <i className="fa-solid fa-chevron-down"></i></p>
                                    </div>
                                </div>
                            </div>
                            <div className="right2">
                                <footer>
                                    <div className="foot">
                                        <a href="#">About</a> &nbsp; &nbsp;
                                        <a href="#">Accessibility</a> &nbsp; &nbsp;
                                        <a href="#">Help Center</a> &nbsp;
                                        <a href="#">Privacy & terms <i className="fa-solid fa-chevron-down"></i></a> &nbsp; &nbsp;
                                        <a href="#">Ad Choices</a> &nbsp;
                                        <a href="#">Advertising</a> &nbsp;
                                        <a href="#">Business Services <i className="fa-solid fa-chevron-down"></i></a> &nbsp; &nbsp;
                                        <a href="#">Get the Linkedin app</a> &nbsp; &nbsp;
                                        <a href="#">More</a> &nbsp; &nbsp;
                                    </div>
                                    <h5>Linked <i className="fa-brands fa-linkedin"></i> LinkedIn Corporation &#x24B8; 2022</h5>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}