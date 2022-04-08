import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export default function Profile() {
    const {user, } = useAuth0()
    return (
        <section className="s8">
            <div className="s88">
                <div className="left">
                    <div className="d1">
                        <img src="./images/profilebg.webp" alt="BackgroundImage" />
                        <div className="edit">
                            <i className="fa-solid fa-pen"></i>
                        </div>
                        <img className="profile" src={user.picture} alt="ProfileImage" />
                        <div className="d11">
                            <div className="pen">
                                <i className="fa-solid fa-pen pen"></i>
                            </div>
                            <div className="d111">
                                <div className="d1112">
                                    <p className="username">{user.nickname}</p>
                                    <p className="descirption">Aspiring Full Stack Web Development At Masai School</p>
                                </div>
                                <div className="d1113">
                                    <img src="https://pbs.twimg.com/profile_images/1390604720738242563/gz6AcHua_400x400.jpg" alt="Masai School" />
                                    <p>Masai School</p>
                                </div>
                            </div>
                            <p className="small font-big">Tallks about #fullstackdeveloper</p>
                            <p className="small font-big">Mumbai, India . <span>Contact info</span></p>
                            <p className="link">100 followers . 62 connections</p>
                            <div className="btns">
                                <button className="opento">Open to</button>
                                <button className="addprofile">Add profile section</button>
                                <button className="more">More</button>
                            </div>
                        </div>
                    </div>
                    <div className="d2">
                        <h3>Suggested for you</h3>
                        <p className="small font-big"><i className="fa-solid fa-eye"></i> Private to you</p>
                        <div className="d21">
                            <div className="beg">
                                <img src="./images/beg.svg" alt="Beg" />
                                <p><b>Add past postion so other can easily find and connect with you</b></p>
                            </div>
                            <p className="font14">Help hiring managers and coworkers find you.</p>
                            <button>Add past postion</button>
                        </div>
                    </div>
                    <div className="d3">
                        <h3>Anylystics</h3>
                        <p className="small font-big"><i className="fa-solid fa-eye"></i> Private to you</p>
                        <div className="d31">
                            <div className="d311">
                                <div className="l1">
                                    <i className="fa-solid fa-user-group"></i>
                                </div>
                                <div className="l2">
                                    <p className="link"><b>52 profile views</b></p>
                                    <p className="font14">Discover who's viewed your profile.</p>
                                </div>
                            </div>
                            <div className="d311">
                                <div className="l1">
                                    <i className="fa-solid fa-chart-simple"></i>
                                </div>
                                <div className="l2">
                                    <p className="link"><b>93 post impressions</b></p>
                                    <p className="font14">Check out who's engaging with your posts.Check out who's engaging with your posts.
                                    </p>
                                    <p className="small font14"> Past 7 days</p>
                                </div>
                            </div>
                            <div className="d311">
                                <div className="l1">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className="l2">
                                    <p className="link"><b>20 search appearances</b></p>
                                    <p className="font14">See how often you appear in search results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d4">
                        <h3>Resources</h3>
                        <p className="small font-big heading"><i className="fa-solid fa-eye"></i> Private to you</p>
                        <div className="d41">
                            <div className="d411">
                                <div className="l1">
                                    <i className="fa-solid fa-tower-cell"></i>
                                </div>
                                <div className="l2">
                                    <p className="link"><b>Create mode <span>On</span></b></p>
                                    <p className="font14"> Get discovered, showcase content on your profile, and get access to creator tools</p>
                                </div>
                            </div>
                            <hr />
                            <div className="d411">
                                <div className="l1">
                                    <i className="fa-solid fa-user-group"></i>
                                </div>
                                <div className="l2">
                                    <p className="link"><b>My network</b></p>
                                    <p className="font14">See and manage your connections and interests.</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p className="allresource">Show all resources <i className="fa-solid fa-arrow-right-long"></i></p>
                    </div>
                    <div className="d5">
                        <div className="d51">
                            <h2>About</h2>
                            <i className="fa-solid fa-pen"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut suscipit explicabo fuga, temporibus doloremque ea doloribus quas eius, laudantium, ex vero! Ipsa, blanditiis rem nihil aperiam sint quos aut aliquam praesentium consectetur voluptatem. Nemo quis porro molestiae dicta, sit repellat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dignissimos. Esse velit labore iusto dolor perferendis magni ratione iste autem.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minus explicabo. Praesentium impedit nesciunt at beatae fugit quo, tempore culpa suscipit dolore sed libero minima quibusdam deleniti molestiae vero, fugiat tenetur fuga alias voluptates quidem, nisi qui. Sint cumque recusandae hic illo maxime explicabo corporis neque culpa consequuntur ullam? Optio accusantium consequuntur a incidunt corporis, minus fuga modi architecto ea officiis minima exercitationem quibusdam inventore odit doloribus alias, nostrum mollitia!</p>
                    </div>
                    <div className="d6">
                        <div className="d61">
                            <h2>Education</h2>
                            <div className="d611">
                                <i className="fa-solid fa-plus"></i>
                                <i className="fa-solid fa-pen"></i>
                            </div>
                        </div>
                        <div className="d62">
                            <img src="https://pbs.twimg.com/profile_images/1390604720738242563/gz6AcHua_400x400.jpg" alt="Masai School" />
                            <div className="description">
                                <p><b>Masai School</b></p>
                                <p className="font14">Full Stack Web development Course</p>
                                <p className="small font-big">Sep 2021 - May 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="d1">
                        <p><b>Edit public profile & URL</b>
                            <i className="fa-solid fa-circle-question"></i>
                        </p>
                        <hr />
                        <p><b>Add profile in another language</b>
                            <i className="fa-solid fa-circle-question"></i>
                        </p>
                    </div>
                    <div className="d2">
                        <p className="heading"><b>People also viewed</b></p>
                        <div className="cards">
                            <div className="card1">
                                <img src="./images/profileimage.jpeg" alt="ProfileImage" />
                                <div className="card12">
                                    <p className="link">User 1</p>
                                    <p className="small">Full Stack Web Developer</p>
                                    <p className="small">Knowledge of core java , html, css</p>
                                    <button>Message</button>
                                </div>
                            </div>
                            <div className="card1">
                                <img src="./images/profileimage.jpeg" alt="ProfileImage" />
                                <div className="card12">
                                    <p className="link">User 2</p>
                                    <p className="small">Front-end Developer</p>
                                    <p className="small">Knowledge of core Js , html, css</p>
                                    <button>Message</button>
                                </div>
                            </div>
                        </div>
                        <p className="showmore">Show more <i className="fa-solid fa-chevron-down"></i></p>
                    </div>
                    <div className="d2">
                        <p className="heading"><b>People you may know</b></p>
                        <div className="cards">
                            <div className="card1">
                                <img src="./images/profileimage.jpeg" alt="ProfileImage" />
                                <div className="card12">
                                    <p className="link">User 1</p>
                                    <p className="small">Full Stack Web Developer</p>
                                    <p className="small">Knowledge of core java , html, css</p>
                                    <button>Message</button>
                                </div>
                            </div>
                            <div className="card1">
                                <img src="./images/profileimage.jpeg" alt="ProfileImage" />
                                <div className="card12">
                                    <p className="link">User 2</p>
                                    <p className="small">Java Developer</p>
                                    <p className="small">Knowledge of core java</p>
                                    <button>Message</button>
                                </div>
                            </div>
                        </div>
                        <p className="showmore">Show more <i className="fa-solid fa-chevron-down"></i></p>
                    </div>
                    <div className="d3">
                        <h5 className="curdef"><i className="fa-brands fa-linkedin"></i> LEARNING</h5>
                        <p className="curdef">Add new skills with these courses, free for 24 hours</p>
                        <div className="cards">
                            <div className="card1">
                                <img src="./images/profilebg.webp" alt="uImage" />
                                <div className="card12">
                                    <p>Electron: Building Cross Platform Dekstop Apps</p>
                                </div>
                            </div>
                            <div className="card1">
                                <img src="./images/profilebg.webp" alt="jImage" />
                                <div className="card12">
                                    <p>React: Creating and Hosting a Full-Stack Site</p>
                                </div>
                            </div>
                            <div className="card1">
                                <img src="./images/profilebg.webp" alt="lImage" />
                                <div className="card12">
                                    <p>Using Python with Excel</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p className="showmore">See my recommendations</p>
                    </div>
                </div>
            </div>
            <div className="down">
                <h3>Linked<i className="fa-brands fa-linkedin"></i></h3>
                <div className="d1">
                    <div className="l1">
                        <p className="small">About</p>
                        <p className="small">Community Guidlines</p>
                        <p className="small">Privacy & Terms <i className="fa-solid fa-angle-down"></i></p>
                        <p className="small">Sales Solutions</p>
                        <p className="small">Safety Center</p>
                    </div>
                    <div className="l2">
                        <p className="small">Accessiblity</p>
                        <p className="small">Careers</p>
                        <p className="small">Ad Choices</p>
                        <p className="small">Mobile</p>
                    </div>
                    <div className="l3">
                        <p className="small">Talent Solutions</p>
                        <p className="small">Marketiong Solutions</p>
                        <p className="small">Advertising</p>
                        <p className="small">Small Business</p>
                    </div>
                    <div className="l4">
                        <div className="l41">
                            <i className="fa-solid fa-circle-question"></i>
                            <div className="l411">
                                <p className="small font-big">Questions?</p>
                                <p className="small">Visit our Help Centre</p>
                            </div>
                        </div>
                        <div className="l41">
                            <i className="fa-solid fa-gear"></i>
                            <div className="l411">
                                <p className="small font-big">Manage your account and privacy</p>
                                <p className="small">Go to your Settings.</p>
                            </div>
                        </div>
                    </div>
                    <div className="l5">
                        <p className="small">Select Language</p>
                        <select>
                            <option value="">English</option>
                            <option value="">Hindi</option>
                            <option value="">Punjabi</option>
                        </select>
                    </div>
                </div>
                <p className="small">Linked Corporation &#169; 2022</p>
            </div>
        </section>
    )
}
