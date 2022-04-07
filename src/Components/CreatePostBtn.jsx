import React from 'react'

export  function CreatePostBtn({startpost}) {
    function exit() {
        startpost(false)
    }
    return (
        <section className="s7">
            <div className="s77">
                <div className="d1">
                    <p>Create a Post</p>
                    <i onClick={exit} className="fa-solid fa-xmark"></i>
                </div>
                <hr />
                <div className="d2">
                    <div className="d20">
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
                        <textarea placeholder="What do you want to talk about?"></textarea>
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
                        <button onClick={exit} >Post</button>
                    </div>
                </div>
            </div>
        </section>
    )
}