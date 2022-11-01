import React from 'react';
import "./box1.css";
import "./box2.css";
import "./box3.css";


export function Message() {
    return (
      <>
       <div id="box1">

       </div>


      <div id="box2">
        <p id="head">Message Volume</p>
        <div style={{"width":"10vw","font-size":"2vw","font-weight":"400","margin-left":"70%","margin-top":"15%"}}>
          <span>255</span>
          <span style={{"font-size":"0.8vw","color":"rgb(145,214,185)","font-weight":"500"}}>+32</span>
          <br></br>
          <span style={{"font-size":"1vw"}}>Message</span>
          <br></br>
          <p style={{"font-size":"1vw","margin-top":"-2%"}}>Volume</p>
        </div>
        <div class="donut-ring">
            <div class="ring one"></div>
            <div class="ring two"></div>
            <div class="ring three"></div>
            <div class="ring four"></div>
            <div class="cutout"></div>
        </div>
        <span class="dot1"></span>
        <span style={{"font-size": "0.8vw"}}> Chat</span>
        <span class="dot2"></span>
        <span style={{"font-size": "0.8vw"}}> Broadcast</span>
      </div>

      <div id="box3">

      </div>
      </>
    );
  }
  
export default Message;