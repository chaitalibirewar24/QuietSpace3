const videoList = ["Cafevideo.mp4", "libraryvideo.mp4", "Parkvideo.mp4"];
let current = 0;

const player = document.getElementById("videoPlayer");

function playVideo(index) {
  if (!player) {
    console.error("Video element not found!");
    return;
  }

  player.src = videoList[index];
  player.load(); // Ensure the new source is loaded
  player.play().catch(err => console.error("Playback error:", err));

  // Schedule next video after 5 seconds
  setTimeout(() => {
    current = (current + 1) % videoList.length;
    playVideo(current);
  }, 5000);
}

// Start the playlist
document.addEventListener("DOMContentLoaded", () => {
  playVideo(current);
});
