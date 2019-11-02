let songs = ["1", "2", "3", "4", "5", "6", "7", "8"];
let maxSongs = songs.length;
srcSongs = "./gane/";
srcSuff = ".mp3";
let isOn = false;
let index = 0;
let song = document.querySelector("audio");
let playbtn = document.getElementById("pp");
document.getElementById("pp").addEventListener("click", playPause);

function playPause() {
  if (isOn === false) {
    song.play();
    isOn = true;
    playbtn.innerText = "?";
    playbtn.className = "btn btn-warning";
  } else {
    song.pause();
    isOn = false;
    playbtn.innerText = "=";
    playbtn.className = "btn btn-secondary";
  }
}

let backbtn = document.getElementById("back");
let nextbtn = document.getElementById("next");

backbtn.addEventListener("click", e => {
  index = (maxSongs + index - 1) % maxSongs;
  song.src = srcSongs + songs[index] + srcSuff;
  if (isOn) {
    playPause();
    playPause();
  }
});

nextbtn.addEventListener("click", e => {
  index = (index + 1) % maxSongs;
  song.src = srcSongs + songs[index] + srcSuff;
  if (isOn) {
    playPause();
    playPause();
  }
});

song.addEventListener("ended", () => {
  nextbtn.click();
});

// song.currentTime.registerListener(() => {
//   if (x.currentTime === x.currentTime.duration) {
//     nextbtn.click();
//   }
// });
