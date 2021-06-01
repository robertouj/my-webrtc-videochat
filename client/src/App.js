import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";

import "./styles.css";

function App() {
  return (
    <>
      <h1>Video Chat WebRTC</h1>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </>
  );
}

export default App;
