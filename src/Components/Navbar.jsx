import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <section className="s1" id="home">
        <nav>
            <div className="nav">
                <div className="left">
                    <div className="logo">
                        <a href="#home">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="input">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search for jobs, skills, companies..." />
                    </div>
                </div>
                <div className="right">
                    <div className="logos">
                        <div className="home">
                            <i className="fa-solid fa-house-chimney"></i>
                            <Link to="/">Home</Link>
                        </div>
                        <div className="network">
                            <i className="fa-solid fa-user-group"></i>
                            <Link to="/">My Network</Link>
                        </div>
                        <div className="jobs">
                            <i className="fa-solid fa-briefcase"></i>
                            <Link to="/jobs">Jobs</Link>
                        </div>
                        <div className="messaging">
                            <i className="fa-solid fa-comment-dots"></i>
                            <Link to="/">Messaging</Link>
                        </div>
                        <div className="notifications">
                            <i className="fa-solid fa-bell"></i>
                            <Link to="/">Notifications</Link>
                        </div>
                        <div className="me">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIrn5orx6KdLUiIvZ3IUkZTMdIyes-D6sMA&usqp=CAU" alt="Account Holder" />
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
    </div>
  )
}
