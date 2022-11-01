import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <div id="grad1">
        <div id="mySidenav" className="sidenav">
                <span id="name">Whatcs</span>
                <div id="Options">
                <a href="/" >&#128262; Dashboard</a>
                <a href="/" style={{"margin-top":"1vh"}}>&#x1F4E5; Inbox</a>
                <a href="/" style={{"margin-top":"1vh"}}>&#128227; Broadcast</a>
                <a href="/" style={{"margin-top":"1vh"}}>&#x1F481; Contacts</a>
                <a href="/" style={{"margin-top":"1vh"}}>&#x1F518; Automation</a>
                </div>
                <div id="info">
                    <div id="contact">
                        <span style={{"display":"block","margin-left":"2.5vw"}}>ConnectedNumber</span>
                        <span style={{"display":"block","margin-left":"2.5vw","color":"#8DE6C0"}}>+123456781234  </span>
                    </div>
                    <hr></hr>
                    <div id="profile">
                        <span style={{"display":"block","margin-left":"2.5vw","font-weight":"600"}}>&#x263A; Octavia Sherly</span>
                        <span style={{"display":"block","margin-left":"3.8vw"}}> octavia@email.com  </span>
                        <br></br>
                    </div>
                </div>
        </div>
    </div>
    </>
  );
}

export default Navbar;