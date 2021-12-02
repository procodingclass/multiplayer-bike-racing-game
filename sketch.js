var database;
var form,
  game,
  player,
  playerCount = 0,
  bgimg,
  track1,
  track2;
var gameState = 0;
var allplayers, blastImage;
var bike1,
  bike2,
  bike3,
  bike4,
  bikes = [];

function preload() {
  bgimg = loadImage("images/background1.png");
  bike1img = loadImage("images/bike1.png");
  bike2img = loadImage("images/bike2.png");
  bike3img = loadImage("images/bike3.png");
  bike4img = loadImage("images/bike4.png");
  trackimg = loadImage("images/track.png");
  end_bg = loadImage("images/leaderboard1.png");
  track1 = loadSound("tracks/start.mp3");
  track2 = loadSound("tracks/play.mp3");
  blastImage = loadImage("images/blast.png");
}

function setup() {
  database = firebase.database();
  canvas = createCanvas(windowWidth, windowHeight);

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if (gameState === 0) {
    background(bgimg);
  }

  if (playerCount === 4) {
    game.update(1);
  }

  if (gameState === 1) {
    clear();
    game.play();
  }

  if (gameState === 2) {
    clear();
    background(end_bg);
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
