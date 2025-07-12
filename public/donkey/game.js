const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const overlay = document.getElementById('overlay');
const playBtn = document.getElementById('playAgain');
const finalScore = document.getElementById('finalScore');
const donkeyImg = new Image();
const bottleImg = new Image();
const bgMusic = document.getElementById('bgMusic');
const catchSound = document.getElementById('catchSound');
const failSound = document.getElementById('failSound');
const lanes = 5;
const BOTTLE_SCALE = 1;
let bottleScale = 1;
let donkeyScale = 1;
let laneWidth;
let width, height;
let donkeyLane = Math.floor(lanes/2);
let donkeyX = 0;
let score = 0;
let bottles = [];
let lastTime = 0;
let spawnTimer = 0;
let spawnInterval = 1000;
let speed = 2;
let lang = 'en';
let texts = {};
let assetsLoaded = false;
let langLoaded = false;

function checkReady(){
  if(assetsLoaded && langLoaded) startGame();
}

function loadAssets(){
  Promise.all([
    new Promise(res=>{donkeyImg.onload=res; donkeyImg.src='donkey.png';}),
    new Promise(res=>{bottleImg.onload=res; bottleImg.src='brasilena.png';})
  ]).then(()=>{assetsLoaded=true; checkReady();});
}

function resize() {
  const bannerHeight = 50;
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight - bannerHeight;
  laneWidth = width / lanes;
  donkeyX = laneWidth * donkeyLane + laneWidth / 2;

  if (width >= 768) {
    bottleScale = 0.5;   // Desktop
    donkeyScale = 1;
  } else {
    bottleScale = 1;
    donkeyScale = 1.4;   // Mobile
  }
}

function loadLang() {
  const n = navigator.language.slice(0,2);
  lang = ['en','ru','it','es','fr','de','zh','ja','ko','pt'].includes(n)?n:'en';
  fetch(`lang/${lang}.json`).then(r=>r.json()).then(d=>{texts=d;langLoaded=true;checkReady();});
}

function startGame(){
  playBtn.textContent = texts.play_again || 'Play Again';
  score=0; bottles=[]; lastTime=0; spawnTimer=0; spawnInterval=1000; speed=2; gameOver=false; overlay.style.display='none';
  donkeyLane=Math.floor(lanes/2);
  donkeyX=laneWidth*donkeyLane+laneWidth/2;
  bgMusic.currentTime=0;
  bgMusic.play();
  requestAnimationFrame(loop);
}

function spawnBottle(){
  const bottleWidth = laneWidth*0.6*BOTTLE_SCALE;
  const lane = Math.floor(Math.random()*lanes);
  bottles.push({x: lane*laneWidth+laneWidth/2, y:-bottleWidth*2});
}

function drawBackground() {
  const gradient = ctx.createRadialGradient(width/2, height/2, 10, width/2, height/2, height);
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(1, '#59c1f5');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function drawDonkey(){
  const donkeyWidth = laneWidth * donkeyScale;
  const donkeyHeight = donkeyWidth * 1.2;
  ctx.drawImage(donkeyImg, donkeyX - donkeyWidth/2, height - donkeyHeight - 20, donkeyWidth, donkeyHeight);
}

function drawBottle(b){
  const bottleWidth = laneWidth*0.6*BOTTLE_SCALE*bottleScale;
  const bottleHeight = bottleWidth*2;
  ctx.drawImage(bottleImg, b.x - bottleWidth/2, b.y, bottleWidth, bottleHeight);
}

let gameOver=false;
function loop(ts){
  if(gameOver) return;
  const delta = ts - lastTime;
  lastTime = ts;
  ctx.clearRect(0,0,width,height);
  drawBackground();
  drawDonkey();
  for(const b of bottles){
    b.y += speed;
    drawBottle(b);
    const donkeyWidth = laneWidth;
    const donkeyHeight = donkeyWidth*1.2;
    if(b.y>height-donkeyHeight-20 && b.y<height-20 && Math.abs(b.x-donkeyX)<25){
      score++;
      b.caught = true;
      catchSound.currentTime = 0;
      catchSound.play();
    } else if(b.y>height){
      endGame();
      return;
    }
  }
  bottles = bottles.filter(b=>!b.caught);
  spawnTimer += delta;
  if(spawnTimer>spawnInterval){
    spawnBottle();
    spawnTimer=0;
    if(spawnInterval>400) spawnInterval-=20;
    speed+=0.1;
  }
  ctx.fillStyle='#000';
  ctx.font='20px sans-serif';
  ctx.fillText(`${texts.score}: ${score}`,10,30);
  requestAnimationFrame(loop);
}

function endGame(){
  gameOver = true;
  bgMusic.pause();
  failSound.play();
  finalScore.textContent = `${texts.score}: ${score}`;
  overlay.style.display = 'flex';
}

function moveLeft(){
  if(donkeyLane>0){
    donkeyLane--;
    donkeyX = laneWidth*donkeyLane + laneWidth/2;
  }
}
function moveRight(){
  if(donkeyLane<lanes-1){
    donkeyLane++;
    donkeyX = laneWidth*donkeyLane + laneWidth/2;
  }
}

window.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')moveLeft();if(e.key==='ArrowRight')moveRight();});
canvas.addEventListener('touchstart',e=>{const x=e.touches[0].clientX; if(x<width/2) moveLeft(); else moveRight();});
playBtn.addEventListener('click',startGame);
window.addEventListener('resize',resize);
resize();
loadAssets();
loadLang();
