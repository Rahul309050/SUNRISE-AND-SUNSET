const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";

function preload() {
  getBackgroundImg();
}

function setup() {
  var canvas = createCanvas(1200, 700);
  engine = Engine.create();
  world = engine.world;
}

function draw() {

  // add condition to check if any background image is there to add
  if (backgroundImg) {
    background(backgroundImg);
  }

  Engine.update(engine);

  // write code to display time in correct format here
}

async function getBackgroundImg() {
  // write code to fetch time from API
  var response = await fetch(
    "https://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );

  //change the data in JSON format
  var responseJson = await response.json();
  console.log("Time", responseJson);

  // write code slice the datetime
  var datetime = responseJson.datetime;
  var second = datetime.slice(17, 19);

  console.log(second);
  text("Score: "+  500,500);

  // add conditions to change the background images from sunrise to sunset
  if (second >= 0 && second <= 06) {
    bg = "sunrise1.png";
  } else if (second >= 06 && second <= 12) {
    bg = "sunrise2.png";
  } else if (second >= 12 && second <= 18) {
    bg = "sunrise3.png";
  } else if (second >= 18 && second <= 24) {
    bg = "sunrise4.png";
  } else if (second >= 24 && second <= 30) {
    bg = "sunrise5.png";
  } else if (second >= 30 && second <= 36) {
    bg = "sunrise6.png";
  } else if (second >= 36 && second <= 42) {
    bg = "sunset7.png";
  } else if (second >= 42 && second <= 48) {
    bg = "sunset8.png";
  } else if (second >= 48 && second <= 54) {
    bg = "sunset9.png";
  } else if (second >= 54 && second <= 59) {
    bg = "sunset10.png";
  }

  //load the image in backgroundImg variable here

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
