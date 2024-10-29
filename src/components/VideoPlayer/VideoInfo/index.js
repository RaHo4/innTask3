import { useMediaQuery } from "@uidotdev/usehooks";

import likeIcon from "assets/like.svg";
import shareIcon from "assets/share.svg";
import moreIcon from "assets/more.svg";

import "styles/video.css";
import "styles/channel.css";
import "styles/videoPlayer.css";
import "styles/switch.css";

export function VideoInfo() {
  const isMobile = useMediaQuery("screen and (max-device-width: 945px)");

  return (
    <>
      <h2>Dude You Re Getting A Telescope</h2>
      <div class="videoStats">
        {!isMobile && <span>123k views</span>}
        <div class="videoBtnWrapper">
          <button class="videoBtn">
            <img src={likeIcon} alt="Like"></img>
            123k
          </button>
          <button class="videoBtn">
            <img src={likeIcon} alt="Dislike"></img>
            435k
          </button>
          <button class="videoBtn">
            <img src={shareIcon} alt=""></img>
            Share
          </button>
          <button>
            <img src={moreIcon} alt="more"></img>
          </button>
        </div>
      </div>
      <div class="creatorWrapper">
        <figure class="channel creator">
          <img src="assets/header/user.png" alt="" />
          <figcaption>
            Food & Drink
            {isMobile ? (
              <div class="videoStats">245k subscribed</div>
            ) : (
              <div class="videoStats">Published on 14 Jun 2019</div>
            )}
          </figcaption>
        </figure>
        {isMobile ? (
          <span>Subscribe</span>
        ) : (
          <button class="subscribe">Subscribe 2.3m</button>
        )}
      </div>
      <p class="hideMobile videoDescription">
        A successful marketing plan relies heavily on the pulling-power of
        advertising copy. Writing result-oriented ad copy is difficult, as it
        must appeal to, entice, and convince consumers to take action. There is
        no magic formula to write perfect ad copy; it is based on a number of
        factors, including ad placement, demographic, even the consumer’s mood
        when they see your ad.
      </p>
      {!isMobile && <span class="showMore">Show more</span>}
    </>
  );
}
