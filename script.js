console.log("welcome to spotify");
//initialise the variables
let songindex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songitems= Array.from(document.getElementsByClassName('songitem'));

let songs = [
  {
    songname: "salame-e-ishq",
    filepath: "song/1.mp3",
    coverpath: "covers/1.jpg",
  },
  {
    songname: "salame-e-ishq",
    filepath: "song/2.mp3",
    coverpath: "covers/2.jpg",
  },
  {
    songname: "salame-e-ishq",
    filepath: "song/3.mp3",
    coverpath: "covers/3.jpg",
  },
  {
    songname: "salame-e-ishq",
    filepath: "song/4.mp3",
    coverpath: "covers/4.jpg",
  },
  {
    songname: "salame-e-ishq",
    filepath: "song/5.mp3",
    coverpath: "covers/5.jpg",
  },
  {
    songname: "salame-e-ishq",
    filepath: "song/6.mp3",
    coverpath: "covers/6.jpg",
  },
];

songitems.forEach(element)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverpath ;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
}

masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myprogressbar.value = progress;
});

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100
})
