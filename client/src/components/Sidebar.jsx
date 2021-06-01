import React, { useContext, useState } from "react";
import { Button } from "@material-ui/core";
import { Phone, PhoneDisabled } from "@material-ui/icons";

import { SocketContext } from "../Context";

function Sidebar({ children }) {
  const {
    states,
    name,
    setName,
    callAccepted,
    callEnded,
    leaveCall,
    callUser,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <>
      <div className="sidebar">
        {/* #2# Input to set the Name of the user */}
        <label>
          Your Name:
          <input
            placeholder="ID to call"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {/* #2# Input to set the ID to call */}
        <label>
          Make a call:
          <input
            placeholder="ID to call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
        </label>
        {/* {callAccepted && !callEnded ? ( */}
        {/* #2# Button to leave the call */}
        <Button
          disabled={!states.hangupButtonEnabled}
          variant="contained"
          color="secondary"
          startIcon={<PhoneDisabled fontSize="large" />}
          fullWidth
          onClick={leaveCall}
        >
          Hang Up
        </Button>
        {/* ) : ( */}
        {/* #2# Button to make a call */}
        <Button
          disabled={!states.callButtonEnabled}
          variant="contained"
          color="primary"
          startIcon={<Phone fontSize="large" />}
          fullWidth
          onClick={callUser}
        >
          Call
        </Button>
        {/* )} */}
        {children}
      </div>
    </>
  );
}

export default Sidebar;
