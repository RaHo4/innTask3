import { VideoPlayer } from "components/VideoPlayer";
import { Header } from "components/Header";

import "styles/iconsSizes.css";
import { VideoList } from "components/VideoList";

export function VideoPage() {
  return (
    <>
      <Header></Header>
      <main>
        <VideoPlayer></VideoPlayer>
        <VideoList></VideoList>
      </main>
    </>
  );
}
