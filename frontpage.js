// Video Playlist Logic
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

// Load a background video dynamically if needed
const videoPlayer = document.getElementById("videoPlayer");
videoPlayer.src = "background-video.mp4";

videoPlayer.addEventListener("loadeddata", () => {
  console.log("Video loaded successfully");
});

// Start the playlist when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  playVideo(current);
});

// Footer Functions

// Open a new page in a new tab/window
function openPage(pageName) {
  window.open(pageName, '_blank');
}

// Scroll smoothly to the top of the page or scrollable container
function scrollToTop() {
  // Try to detect if a scrollable container exists with id "mainContainer"
  const container = document.getElementById('mainContainer');
  if (container) {
    container.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}