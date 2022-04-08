import React from 'react'

export default function Message() {
    const [result, setResult] = React.useState([])
    React.useEffect(() => {
        fetch(`http://localhost:3001/message`)
        .then((res) => res.json())
        .then((res) => setResult(res))
    }, [])
  return (
      <section className="s6">
        <div className="s66">
            <div className="left">
                <div className="l1">
                    <div className="p1">
                        <p>Message</p>
                        <div className="p11">
                            <i className="fa-solid fa-ellipsis"></i>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </div>
                    </div>
                    <div className="searchbar">
                        <div className="searchbar1">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search message" />
                        </div>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="chatbox">
                        {result.map((item) => (
                            <div className="card1" key={item.id}>
                            <div className="c1">
                                <div className="c11">
                                    <img src={item.img} alt="Profile" />
                                </div>
                                <div className="c12">
                                    <p>{item.name}</p>
                                    <p className="small font-big">{item.text}</p>
                                </div>
                            </div>
                            <div className="c3 small">
                                {item.time}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="l2">
                    <div className="chathead">
                        <div className="chathead1">
                            <p className="link">User1</p>
                            <div className="l22 small">
                                <i className="fa-solid fa-circle-dot"></i> 
                                <p className="small">Available on mobile</p>
                            </div>
                        </div>
                        <div className="chathead2">
                            <i className="fa-solid fa-ellipsis"></i>
                            <i className="fa-solid fa-video"></i>
                        </div>
                    </div>
                    <div className="showchat">
                        <div className="u">
                            <img src="./images/profileimage.jpeg" alt="user1" />
                            <div className="chattext">
                                <p className="link">User 1 1️⃣</p>
                                <div className="usertext">
                                    <p>Hii</p>
                                </div>
                            </div>
                        </div>
                        <div className="u">
                            <img src="./images/profileimage.jpeg" alt="user2" />
                            <div className="chattext">
                                <p className="link">User 2 2️⃣</p>
                                <div className="usertext">
                                    <p >Hii User 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="u">
                            <img src="./images/profileimage.jpeg" alt="user2" />
                            <div className="chattext">
                                <p className="link">User 1 1️⃣</p>
                                <div className="usertext">
                                    <p >Are you student of Masai School</p>
                                    <p >I also want to take admission in Masai School</p>
                                    <p>Can you tell me the process of admission</p>
                                </div>
                            </div>
                        </div>
                        <div className="u">
                            <img src="./images/profileimage.jpeg" alt="user2" />
                            <div className="chattext">
                                <p className="link">User 2 2️⃣</p>
                                <div className="usertext">
                                    <p >Sure</p>
                                </div>
                            </div>
                        </div>
                        <div className="u">
                            <img src="./images/profileimage.jpeg" alt="user2" />
                            <div className="chattext">
                                <p className="link">User 1 1️⃣</p>
                                <div className="usertext">
                                    <p >Can you tell me which document is required to take admission</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sendtext">
                        <input type="text" placeholder="Write a message..." />
                        <i className="fa-solid fa-angle-up"></i>
                    </div>
                    <div className="sendemojy">
                        <div className="emojy">
                            <i className="fa-solid fa-image"></i>
                            <i className="fa-solid fa-paperclip"></i>
                            <span>GIF</span>
                            <i className="fa-solid fa-face-smile"></i>
                        </div>
                        <div className="senddiv">
                            <button className="sendbtn">Send</button>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="right2 right22">
                    <footer>
                        <div className="foot foot1">
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
    </section>
  )
}