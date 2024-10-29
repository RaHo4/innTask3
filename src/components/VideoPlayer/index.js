import "styles/videoPlayer.css";
import { VideoInfo } from "./VideoInfo";

export function VideoPlayer() {
  return (
    <section class="videoPlayer">
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1" width={"100%"} height={"700px"}></iframe>
      <VideoInfo></VideoInfo>
    </section>
  );
}
