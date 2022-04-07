import React from 'react'

export default function Profile() {
    function hideshowprofile() {
        var s8 = document.querySelector(".s8")
        s8.style.display = "none !important"
    }
  return (
    <section className="s8" onClick={hideshowprofile}>
        <div className="s88">
            <div className="d1">
                <div className="d10">
                    <img src="./images/profileimage.jpeg" alt="Profile Image" />
                    <div className="d11">
                        <p>User Name</p>
                        <p>Aspiring Full Stack Web Developer at MAsai Scholl</p>
                    </div>
                </div>
                <div className="d12">
                    <p>View Profile</p>
                </div>
            </div>
            <hr />
            <div className="d2">
                <p><b>Accounts</b></p>
                <p className="small font-big links">Settings & Privacy</p>
                <p className="small font-big links">Help</p>
                <p className="small font-big links">Language</p>
                <hr className="small" />
                <p><b>Manage</b></p>
                <p className="small font-big links">Posts & Activity</p>
                <p className="small font-big links">Job Posting Accounts</p>
                <hr className="small" />
                <p className="small font-big links">Sign Out</p>
            </div>
        </div>
    </section>
  )
}
