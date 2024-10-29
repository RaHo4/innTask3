// import { Header } from "./components/header";
// import { SideMenu } from "./components/sideMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "styles/channel.css";
// import "styles/aside.css";
// import "styles/iconsSizes.css";
// import "styles/video.css";
// import "styles/styles.css";

import { VideoPage } from "./pages/videoPage.js";
import { useEffect, useState } from "react";

function App() {
  const [homePage, setHomePage] = useState(null);
  const [channelPage, setChannelPage] = useState(null);
  useEffect(() => {
    fetch("homePage.html")
      .then((result) => result.text())
      .then((page) => setHomePage({ __html: page }));
    fetch("channelPage.html")
      .then((result) => result.text())
      .then((page) => setChannelPage({ __html: page }));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<div dangerouslySetInnerHTML={homePage && homePage} />}
        ></Route>
        <Route
          path="/channel"
          element={<div dangerouslySetInnerHTML={channelPage && channelPage} />}
        ></Route>
        <Route path="/video" element={<VideoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
