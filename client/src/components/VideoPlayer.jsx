import React, { useContext } from "react";

import { SocketContext } from "../Context";

function VideoPlayer() {
  const { localVideo, remoteVideo, name, stream, callAccepted, callEnded, call } =
    useContext(SocketContext);

  return (
    <>
      <div className="header">
        <div className="logo">
          <h3>VideoChat Component</h3>
        </div>
      </div>
      <div className="main">
        <div className="main__left">
          <div className="videos__group">
            <div id="video-grid">              
              {/* {stream && ( */}
                <div id="video-grid__local_video">
                  My name: {name || "Name"}
                  {/* #1# Video element where show the local stream from getUserMedia() */}
                  <video
                    playsInline
                    ref={localVideo}
                    autoPlay
                    className="local_video"
                  />
                </div>
              {/* )} */}
              {/* {callAccepted && !callEnded && ( */}
                <div id="video-grid__remote_video">
                  Remote name: {call?.name || "Name"}
                  {/* #2# Video element where show the remote stream from RTCPeerconnection */}
                  <video
                    playsInline
                    ref={remoteVideo}
                    autoPlay
                    className="remote_video"
                  />
                </div>
              {/* )} */}
            </div>
          </div>
          <div className="options">
            <div className="options__left">
            </div>
            <div className="options__right"></div>
          </div>
        </div>
        <div className="main__right">
          <div className="main__chat_window"></div>
          <div className="main__message_container"></div>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
