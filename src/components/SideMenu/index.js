import "styles/aside.css";
import { Subscriptions } from "./Subscriptions";
import { Links } from "./Links";

export function SideMenu() {
  return (
    <aside>
      <Links/>
      <h2 class="hideMobile">Subscriptions</h2>
      <Subscriptions />
      <figure class="hideMobile" id="setting">
        <div class="sideMenuImageWrapper">
          <img src="../assets/side menu/setting.svg" alt="" />
        </div>
        <figcaption>Setting</figcaption>
      </figure>
    </aside>
  );
}
