
const videoList = ["Cafevideo.mp4", "libraryvideo.mp4", "Parkvideo.mp4"];
let current = 0;

const player = document.getElementById("videoPlayer");

function playVideo(index) {
  player.src = videoList[index];
  player.currentTime = 0;
  player.play();

  // Stop after 5 seconds, then play next video
  setTimeout(() => {
    current = (current + 1) % videoList.length;
    playVideo(current);
  }, 5000); // 5000 ms = 5 seconds
}

playVideo(current);
