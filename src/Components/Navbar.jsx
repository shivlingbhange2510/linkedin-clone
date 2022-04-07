import React from 'react'
import { Link } from "react-router-dom"
import Profile from './Profile'

export default function Navbar() {
    React.useEffect(() => {
        // var show = document.querySelector(".showProfile")
        // show.style.display = "none !important"
    },[])
    function showprofilefun() {
        // var show = document.querySelector(".showProfile")
        // show.style.display = "block !important"
    }
    return (
        <div>
            <section className="s1" id="home">
                <nav>
                    <div className="nav">
                        <div className="left">
                            <div className="logo">
                                <Link to="/">
                                    <i className="fa-brands fa-linkedin"></i>
                                </Link>
                            </div>
                            <div className="input">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder="Search for jobs, skills, companies..." />
                            </div>
                        </div>
                        <div className="right">
                            <div className="logos">
                                <div className="home">
                                    <Link to="/">
                                        <i className="fa-solid fa-house-chimney"></i>
                                        </Link>
                                        <p>Home</p>
                                </div>
                                <div className="network">
                                    <Link to="/network">
                                        <i className="fa-solid fa-user-group"></i>
                                        </Link>
                                        <p> My Network</p>
                                </div>
                                <div className="jobs">
                                    <Link to="/jobs">
                                        <i className="fa-solid fa-briefcase"></i>
                                        </Link>
                                        <p>Jobs</p>
                                </div>
                                <div className="messaging">
                                    <Link to="/message">
                                        <i className="fa-solid fa-comment-dots"></i>
                                        </Link>
                                        <p>Messaging</p>
                                </div>
                                <div className="notifications">
                                    <Link to="/notification">
                                        <i className="fa-solid fa-bell"></i>
                                        </Link>
                                        <p>Notifications</p>
                                </div>
                                <div className="me" onClick={showprofilefun}>
                                    <img src="/images/profileimage.jpeg" alt="Account Holder" />
                                    <p>Me <i className="fa-solid fa-caret-down"></i></p>
                                </div>
                            </div>
                            <div className="logos1">
                                <div className="navbar">
                                    <i className="fa-solid fa-table-cells"></i>
                                    <p>Work <i className="fa-solid fa-caret-down"></i></p>
                                </div>
                                <p className="premium">Try Premium for free</p>
                            </div>
                            <div className="elipseicon">
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
            {/* <div className="showProfile">
                <Profile />
            </div> */}
        </div>
    )
}
