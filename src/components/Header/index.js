import menuIcon from "assets/header/menu.svg";
import logoIcon from "assets/logo black.png";
import cameraIcon from "assets/header/videocamera.svg";
import dotsIcon from "assets/header/dots.svg";
import notificationsIcon from "assets/header/notifications.svg";
import userImg from "assets/header/user.png";

import "styles/header.css";
import "styles/styles.css";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <header>
      <div class="leftHeaderSection">
        <img id="menu" src={menuIcon} alt="Menu" class="hideMobile" />
        <a href="/">
          <img src={logoIcon} alt="Logo" id="logo" />
        </a>
      </div>
      <div class="rightHeaderSection">
        <SearchBar></SearchBar>
        <div>
          <a href="/" class="hideMobile">
            <img src={cameraIcon} alt="Go live" id="videocamera" />
          </a>
          <a
            href="http://127.0.0.1:5500/home%20page/index.html"
            class="hideMobile"
          >
            <img src={dotsIcon} alt="Dots" id="dots" />
          </a>
          <a
            href="http://127.0.0.1:5500/home%20page/index.html"
            class="hideMobile"
          >
            <figure class="notificationsWrapper">
              <img
                src={notificationsIcon}
                alt="Notifications"
                id="notifications"
              />
              <figcaption>3</figcaption>
            </figure>
          </a>
          <a href="http://127.0.0.1:5500/home%20page/index.html">
            <img src={userImg} alt="Account" id="pfp" />
          </a>
        </div>
      </div>
    </header>
  );
}
