import React, { useContext } from "react";
import { SocketContext } from "../Context";
import { Button } from "@material-ui/core";
import { StarRateSharp } from "@material-ui/icons";

function Notifications() {
  const { states, answerCall, callAccepted, call } = useContext(SocketContext);

  return (
    <>
      <div className="notifications">
        {/* {call.isReceivingCall && !callAccepted && ( */}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call?.name || "NoName"} is calling:</h1>
          {/* #2# Button to answer the call */}
          <Button
            disabled={!states.startButtonEnabled}
            variant="contained"
            color="primary"
            onClick={answerCall}
          >
            Answer
          </Button>
        </div>
        {/* )} */}
      </div>
    </>
  );
}

export default Notifications;
