import React, {useState} from 'react'

export default function Body() {
    const [num,setNum] = useState(false);
    function opennav() {
        var show = document.querySelector(".showmoretext")
        var b = document.querySelector("#box111")
        setNum(!num)
        if(num) {
            console.log(num)
            b.style.display = "block"
            show.innerHTML = `<p>Show less <i class="fa-solid fa-chevron-up"></i></p>`
        } else {
            console.log(num)
            b.style.display = "none"
            setNum(!num)
            show.innerHTML = `<p>Show more <i class="fa-solid fa-chevron-down"></i></p>`
        }
    }
  return (
    <section className="s2">
        <div className="body">
            <div className="left">
                <div className="b1">
                    <div className="box1">
                        <div className="box11">
                            <img src="https://www.netsolutions.com/insights/wp-content/uploads/2021/12/11-most-popular-programming-languages.webp" alt="User Background" />
                        </div>
                        <div className="box12">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIrn5orx6KdLUiIvZ3IUkZTMdIyes-D6sMA&usqp=CAU" alt="User Image" />
                            <p><b>User Name</b></p>
                            <p className="small">Aspiring Full Stack Web Development at Masai School</p>
                        </div>
                    </div>
                    {num && (<div className="box111" id="box111">
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
                            <p><i className="fa-solid fa-square" style={{color: "#f8e77c"}}></i> <b>Try Premium for free</b></p>
                        </div>
                        <hr />
                        <div className="p2 mb-4 mu-4 hover">
                            <p><i className="fa-solid fa-bookmark"></i> My items</p>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className="showmorebtn" onclick={opennav}>
                <p className="showmoretext">Show more <i className="fa-solid fa-chevron-down"></i></p>
            </div>
            <div className="right">
                <div className="up">
                    <div className="d1">
                        <div className="d2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIrn5orx6KdLUiIvZ3IUkZTMdIyes-D6sMA&usqp=CAU" alt="User Image" />
                            <p>Start a post</p>
                        </div>
                        <div className="d3">
                            <div className="photo">
                                <i style={{color: "#70b5f9"}} className="fa-solid fa-image"></i>
                                <p>Photo</p>
                            </div>
                            <div className="video">
                                <i style={{color: "#7fc15e"}} className="fa-brands fa-youtube"></i>
                                <p>Video</p>
                            </div>
                            <div className="event">
                                <i style={{color: "#e7a33e"}} className="fa-solid fa-calendar-week"></i>
                                <p>Event</p>
                            </div>
                            <div className="article">
                                <i style={{color: "#fc9295"}} className="fa-solid fa-newspaper"></i>
                                <p>Write Article</p>
                            </div>
                        </div>
                    </div>
                    <div className="d4">
                        
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
  )
}
