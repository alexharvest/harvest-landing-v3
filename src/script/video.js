document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playVideo");
  const modal = document.getElementById("videoModal");
  const videoContainer = document.getElementById("videoContainer");
  const videoWrapper = document.getElementById("videoWrapper");

  let player = null;

  playButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Check if video is already loaded to prevent duplication
    if (!player) {
      videoWrapper.innerHTML = `
                    <video id="player" playsinline controls>
                        <source src="./public/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                `;
      player = new Plyr("#player");
    }

    // Show modal
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    videoContainer.style.display = "block";

    player.play();
  });

  // Close when clicking outside the video
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
      videoContainer.style.display = "none";
      if (player) {
        player.pause();
      }
    }
  });
});