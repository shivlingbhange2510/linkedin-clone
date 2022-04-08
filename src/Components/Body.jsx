import React, { useState } from 'react'
import {CreatePostBtn} from './CreatePostBtn';
import {Posts} from './Posts'
import Profile from './Profile';
import {Link} from "react-router-dom"
import {ImgTOBase64} from './Images/ImgTOBase64';
import { useAuth0 } from '@auth0/auth0-react';
export default function Body() {
    const [num, setNum] = useState(true);
    const [startpost, setstartpost] = useState(false)
    function startPost() {
        setstartpost(true)
    }
    const {user, } = useAuth0()
    
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
                                    <img src="/images/profilebg.webp" alt="UserBackground" />
                                </div>
                                <div className="box12">
                                    <img src={user.picture} alt="UserImage" />
                                    <Link to="/profile"><b>{user.nickname}</b></Link>
                                    {/* <img src="/images/profileimage.jpeg" alt="User Image" /> */}
                                    {/* <ImgTOBase64/> */}
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
                                    <img src={user.picture} alt="User Image" />
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