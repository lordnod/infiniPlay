function preload() {
  buildLibrary();
}

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(100,100,100,20);
    textAlign(CENTER);

  if (getAudioContext().state !== 'running') {
    text('click to start audio', width/2, height/2);
  } else {
    text('audio is enabled', width/2, height/2);
  }
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  song9.play();
}

function buildLibrary() {
    soundFormats('wav', 'mp3');
    song0 = loadSound('/songs/BalloonPop.wav');
    song1 = loadSound('/songs/ding.wav');
    song2 = loadSound('/songs/ringout.wav');
    song3 = loadSound('/songs/SpeechMisrecognition.wav');
    song4 = loadSound('/songs/test');
    song5 = loadSound('/songs/WindowsDefault.wav');
    song6 = loadSound('/songs/WindowsMenuCommand.wav');
    song7 = loadSound('/songs/WindowsRecycle.wav');
    song8 = loadSound('/songs/WindowsStartup.wav');
    song9 = loadSound('/songs/LobbyTime.mp3');
}