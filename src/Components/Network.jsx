import React from 'react'

export default function Network() {
    const [num, setNum] = React.useState(true)
    const [list, setList] = React.useState([])

    React.useEffect(() => {
        fetch(`http://localhost:3001/userdata`)
            .then((res) => res.json())
            .then((res) => setList(res))
    }, [])

    function opennav() {
        var show = document.querySelector(".show")
        if (!num) {
            setNum(true)
            show.innerHTML = `<p>Show less <i class="fa-solid fa-chevron-up"></i></p>`
        } else {
            setNum(false)
            show.innerHTML = `<p>Show more <i class="fa-solid fa-chevron-down"></i></p>`
        }
    }
    return (
        <>
            <section className="s3">
                <div className="s33">
                    <div className="left">
                        <p className="manage">Manage my network</p>
                        <div className="d1">
                            <div className="d2">
                                <div className="l1">
                                    <i className="fa-solid fa-user-group"></i>&nbsp; &nbsp;
                                    Connections
                                </div>
                                <p>62</p>
                            </div>
                            {num && (<div className="d3" id="d3">
                                <div className="d2">
                                    <div className="l1">
                                        <i className="fa-solid fa-address-book"></i>&nbsp; &nbsp; Contact
                                    </div>
                                </div>
                                <div className="d2">
                                    <div className="l1">
                                        <i className="fa-solid fa-user"></i>&nbsp; &nbsp; People | Follow
                                    </div>
                                    <p>9</p>
                                </div>
                                <div className="d2">
                                    <div className="l1">
                                        <i className="fa-solid fa-user-group"></i>&nbsp; &nbsp; Groups
                                    </div>
                                    <p>10</p>
                                </div>
                                <div className="d2">
                                    <div className="l1">
                                        <i className="fa-solid fa-calendar-week"></i>&nbsp; &nbsp; Events
                                    </div>
                                </div>
                                <div className="d2">
                                    <div className="l1">
                                        <i className="fa-solid fa-file"></i>&nbsp; &nbsp; Pages
                                    </div>
                                    <p>36</p>
                                </div>
                                <div className="d2">
                                    <div className="l1">
                                        <i className="fa-solid fa-newspaper"></i>&nbsp; &nbsp; Newsletters
                                    </div>
                                </div>
                                <div className="d2">
                                    <div className="l1">
                                        <i className="fa-solid fa-hashtag"></i>&nbsp; &nbsp; Hastags
                                    </div>
                                </div>
                            </div>)}
                            <p className="show" onClick={opennav} >Show Less <i className="fa-solid fa-chevron-up"></i></p>
                        </div>
                        <hr />
                        <div className="d5">
                            <p className="addpersonal">Add personal contacts </p>
                            <p className="small align-centre">We’ll periodically import and store your contacts to help you and others connect. You choose who to connect to and who to invite.   <span className="link"> Learn more</span></p>
                            <div className="mail">
                                <p>abc@gmail.com</p>
                            </div>
                            <button className="continue">Continue</button>
                            <p className="moreoption">More Option</p>
                        </div>
                        <hr />
                        <br />
                        <div className="right2 divcentre">
                            <footer className="footerdiv">
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
                    <div className="right">
                        <div className="up">
                            <p>No pending invitations</p>
                            <p className="hover">Manage</p>
                        </div>
                        <div className="down">
                            <div className="d1">
                                <h3>Industry leaders in India you may know</h3>
                                <div className="boxes">
                                    {list.map((item) => (
                                        <div className="user11" key={item.id}>
                                        <div className="b11">
                                            <img src={item.bgimg} alt="Background Image" />
                                        </div>
                                        <div className="b12">
                                            <img src={item.img} alt="Profile Image" />
                                            <div className="name">
                                                <b>{item.first_name}</b>
                                            </div>
                                            <p className="small font-big">{item.department}</p>
                                            <br />
                                            <div className="small">
                                                <i className="fa-solid fa-infinity"></i> 13 Connections
                                            </div>
                                            <p className="connect">Connect</p>
                                        </div>
                                    </div>
                                    ) )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
