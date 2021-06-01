import React, { createContext, useState, useRef, useEffect } from "react";
import {
  startAction,
  callAction,
  hangupAction,
  answerCallAction,
} from "./components/lib/WebRTCScockets";

const SocketContext = createContext();

function ContextProvider({ children }) {
  // Elements to manage the visibility of the control buttons and video players
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  // Set up initial action buttons status: disable call and hangup.
  const [states, setStates] = useState({
    callButtonEnabled: false,
    hangupButtonEnabled: false,
    answerButtonEnabled: false,
  });

  // Video elements where show local stream from getUserMedia() and remote stream from RTCPeerconnection
  const localVideo = useRef();
  const remoteVideo = useRef();

  useEffect(() => {
    setStates({ ...states, callButtonEnabled: true }); // Enable call button.
  }, []);

  // Handles call button action: creates peer connection.
  const callUser = () => {
    setStates({
      ...states,
      callButtonEnabled: false,
      hangupButtonEnabled: true,
    });
    startAction(localVideo.current, remoteVideo.current);
    callAction();
  };

  const leaveCall = () => {
    hangupAction();
    setStates({
      ...states,
      hangupButtonEnabled: false,
      callButtonEnabled: true,
    });
  };

  const answerCall = () => {
    answerCallAction();
  };


  return (
    <SocketContext.Provider
      value={{
        localVideo,
        remoteVideo,
        callAccepted,
        callEnded,
        callUser,
        answerCall,
        leaveCall,
        setName,
        setCall,
        states,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export { ContextProvider, SocketContext };
