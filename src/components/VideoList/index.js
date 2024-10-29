export function VideoList() {
  const videos = new Array(6).fill(
    <figure>
      <a href="/video">
        <figure class="videoPreviewWrapper">
          <img src=" assets/video.png" alt="" />
          <figcaption class="videoLength">4:15</figcaption>
        </figure>
      </a>
      <figcaption>
        <h3 class="videoTitle">A brief history of creation</h3>
        <div class="videoStats">
          <span> 80k views · 3 days ago </span>
          <a href="/channel">
            <span>Dollie Blair</span>
          </a>
        </div>
      </figcaption>
    </figure>
  );

  return (
    <>
      <div class="autoplayWrapper">
        <div class="autoplay">
          <h4>Next</h4>
          <div>
            AUTOPLAY
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div class="videoList vertical">{videos.map((video) => video)}</div>
      </div>
    </>
  );
}
