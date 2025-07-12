const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const overlay = document.getElementById('overlay');
const playBtn = document.getElementById('playAgain');
const finalScore = document.getElementById('finalScore');
const donkeyImg = new Image();
const bottleImg = new Image();
const brickImg = new Image();
const heartsImg = new Image();
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
let lives = 3;
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
    new Promise(res=>{bottleImg.onload=res; bottleImg.src='brasilena.png';}),
    new Promise(res=>{brickImg.onload=res; brickImg.src='Brick.png';}),
    new Promise(res=>{heartsImg.onload=res; heartsImg.src='hearts.png';})
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
  score=0; bottles=[]; lastTime=0; spawnTimer=0; spawnInterval=1000; speed=2; gameOver=false; lives=3; overlay.style.display='none';
  donkeyLane=Math.floor(lanes/2);
  donkeyX=laneWidth*donkeyLane+laneWidth/2;
  bgMusic.currentTime=0;
  bgMusic.play();
  requestAnimationFrame(loop);
}

function spawnBottle(){
  const itemWidth = laneWidth*0.6*BOTTLE_SCALE;
  const lane = Math.floor(Math.random()*lanes);
  const type = Math.random() < 0.8 ? 'bottle' : 'brick';
  bottles.push({x: lane*laneWidth+laneWidth/2, y:-itemWidth*2, type});
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

function drawItem(b){
  const itemWidth = laneWidth*0.6*BOTTLE_SCALE*bottleScale;
  const isBrick = b.type === 'brick';
  const itemHeight = isBrick ? itemWidth : itemWidth*2;
  const img = isBrick ? brickImg : bottleImg;
  ctx.drawImage(img, b.x - itemWidth/2, b.y, itemWidth, itemHeight);
}

function drawHearts(){
  const heartSrcW = heartsImg.width / 3;
  const heartSrcH = heartsImg.height;
  for(let i=0;i<lives;i++){
    ctx.drawImage(
      heartsImg,
      heartSrcW * i,
      0,
      heartSrcW,
      heartSrcH,
      10 + i * (32 + 10),
      10,
      32,
      32
    );
  }
}

let gameOver=false;
function loop(ts){
  if(gameOver) return;
  const delta = ts - lastTime;
  lastTime = ts;
  ctx.clearRect(0,0,width,height);
  drawBackground();
  drawDonkey();
  drawHearts();
  for(const b of bottles){
    b.y += speed;
    drawItem(b);
    const donkeyWidth = laneWidth;
    const donkeyHeight = donkeyWidth*1.2;
    if(b.y>height-donkeyHeight-20 && b.y<height-20 && Math.abs(b.x-donkeyX)<25){
      if(b.type === 'brick'){
        b.caught = true;
        lives--;
        failSound.currentTime = 0;
        failSound.play();
        if(lives<=0){
          endGame();
          return;
        }
      } else {
        score++;
        b.caught = true;
        catchSound.currentTime = 0;
        catchSound.play();
      }
    } else if(b.y>height){
      if(b.type !== 'brick'){
        lives--;
        if(lives<=0){
          endGame();
          return;
        }
      }
      b.caught = true;
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
