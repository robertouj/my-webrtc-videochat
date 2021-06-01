# WebRTC Videochat (client)

WebRTC Videochat (client) for the final project of WBS Fullstack Web & App Developer Bootcamp

## WebRTC Technologie

WebRTC is an open source project to enable realtime communication of audio, video and data in Web and native apps.

WebRTC has several JavaScript APIs — click the links to see demos.

- getUserMedia(): capture audio and video.
- MediaRecorder: record audio and video.
- RTCPeerConnection: stream audio and video between users.
- RTCDataChannel: stream data between users.

### What is signaling?

WebRTC uses RTCPeerConnection to communicate streaming data between browsers, but also needs a mechanism to coordinate communication and to send control messages, a process known as signaling. Signaling methods and protocols are not specified by WebRTC. In this project we use Socket.io for messaging, but there are many [alternatives](https://github.com/muaz-khan/WebRTC-Experiment/blob/master/Signaling.md).

## 1 Step: Stream video from the webcam

## Get a video stream from your webcam

Following the **getUserMedia()** call, the browser requests permission from the user to access their camera (if this is the first time camera access has been requested for the current origin). If successful, a MediaStream is returned, which can be used by a media element via the **srcObject** attribute:

```js
navigator.mediaDevices
  .getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream)
  .catch(handleLocalMediaStreamError);
```

```js
function gotLocalMediaStream(currentStream) {
  setStream(currentStream);
  localVideo.current.srcObject = currentStream;
}
```

The constraints argument allows you to specify what media to get. In this example, video and audio:

```js
const mediaStreamConstraints = {
  video: true,
  audio: true,
};
```

You can use constraints for additional requirements such as video resolution:

```js
const hdConstraints = {
  video: {
    width: {
      min: 1280,
    },
    height: {
      min: 720,
    },
  },
};
```

- Example of media constraints: [here](https://webrtc.github.io/samples/src/content/peerconnection/constraints/)

The [MediaTrackConstraints](https://w3c.github.io/mediacapture-main/getusermedia.html#media-track-constraints) specification lists all potential constraint types, though not all options are supported by all browsers. If the resolution requested isn't supported by the currently selected camera, **getUserMedia()** will be rejected with an **OverconstrainedError** and the user will not be prompted to give permission to access their camera.

If **getUserMedia()** is successful, the video stream from the webcam is set as the source of the video element:

```js
function gotLocalMediaStream(currentStream) {
  setStream(currentStream);
  localVideo.current.srcObject = currentStream;
}
```

## Manipulate stream playback

- The HTML5 Video element need the autoplay attribute on the video element or it wll only show a single frame.

```jsx
<video playsinline ref={localVideo} autoplay className="video" />
```

## Use CSS and SVG to manipulate video (not yet implemented in the project)

- Could be modified by css

```js
// css filters
video {
  filter: blur(4px) invert(1) opacity(0.5);
}
// svg filters
video {
   filter: hue-rotate(180deg) saturate(200%);
 }
```

## 2 Step: Stream video with RTCPeerConnection

- Abstract away browser differences with the WebRTC shim, adapter.js.
- Use the RTCPeerConnection API to stream video.
- Control media capture and streaming.

### What is RTCPeerConnection?

RTCPeerConnection is an API for making WebRTC calls to stream video and audio, and exchange data.

### How it works

WebRTC uses the RTCPeerConnection API to set up a connection to stream video between WebRTC clients, known as **peers**. (a.k.a. **Peer to Peer** or **P2P**)

Setting up a call between WebRTC peers involves three tasks:

- Get and share network information: potential connection endpoints are known as ICE candidates.
- Get and share local and remote descriptions: metadata about local media in SDP format.

#### Create a RTCPeerConnection

Need create one for each end of the call and, at each end, add the local stream from getUserMedia().

## Media Constraints

- [Especification MediaConstraints](https://w3c.github.io/mediacapture-main/getusermedia.html#media-track-constraints)

```js
// Definition Mediaconstraints
dictionary MediaTrackConstraintSet {
  ConstrainULong width;
  ConstrainULong height;
  ConstrainDouble aspectRatio;
  ConstrainDouble frameRate;
  ConstrainDOMString facingMode;
  ConstrainDOMString resizeMode;
  ConstrainULong sampleRate;
  ConstrainULong sampleSize;
  ConstrainBoolean echoCancellation;
  ConstrainBoolean autoGainControl;
  ConstrainBoolean noiseSuppression;
  ConstrainDouble latency;
  ConstrainULong channelCount;
  ConstrainDOMString deviceId;
  ConstrainDOMString groupId;
};

// example configuration
const stream = await navigator.mediaDevices.getUserMedia({
  video: {
    deviceId: localStorage.camId,
    width: {min: 800, ideal: 1024, max: 1280},
    height: {min: 600}
  },
  audio: {
    deviceId: localStorage.micId,
    channelCount: 2
  }
});

```

## Continue with the buttons part... [here](https://codelabs.developers.google.com/codelabs/webrtc-web#4)

## Use RTCDataChannel to exchange data [here](https://codelabs.developers.google.com/codelabs/webrtc-web#5)

Guide based in a google open source WebRTC project\_

_More info: [here](https://codelabs.developers.google.com/codelabs/webrtc-web#3)_
