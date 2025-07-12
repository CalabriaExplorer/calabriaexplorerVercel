const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const overlay = document.getElementById('overlay');
const playBtn = document.getElementById('playAgain');
const donkeyImg = new Image();
const bottleImg = new Image();
let width, height;
let donkeyPos = 1; //0 left,1 right
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
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

function loadLang() {
  const n = navigator.language.slice(0,2);
  lang = ['en','ru','it','es','fr','de','zh','ja','ko','pt'].includes(n)?n:'en';
  fetch(`lang/${lang}.json`).then(r=>r.json()).then(d=>{texts=d;langLoaded=true;checkReady();});
}

function startGame(){
  playBtn.textContent = texts.play_again || 'Play Again';
  score=0; bottles=[]; lastTime=0; spawnTimer=0; spawnInterval=1000; speed=2; gameOver=false; overlay.style.display='none';
  requestAnimationFrame(loop);
}

function spawnBottle(){
  const bottleWidth = width/8;
  bottles.push({x: Math.random()<0.5?0:1, y:-bottleWidth*2});
}

function drawDonkey(){
  const donkeyWidth = width/3;
  const donkeyHeight = donkeyWidth*1.2;
  ctx.drawImage(donkeyImg, donkeyPos*width/2+width/4-donkeyWidth/2, height-donkeyHeight-20, donkeyWidth, donkeyHeight);
}

function drawBottle(b){
  const bottleWidth = width/8;
  const bottleHeight = bottleWidth*2;
  ctx.drawImage(bottleImg, b.x*width/2+width/4-bottleWidth/2, b.y, bottleWidth, bottleHeight);
}

let gameOver=false;
function loop(ts){
  if(gameOver) return;
  const delta = ts - lastTime;
  lastTime = ts;
  ctx.clearRect(0,0,width,height);
  drawDonkey();
  for(const b of bottles){
    b.y += speed;
    drawBottle(b);
    const donkeyWidth = width/3;
    const donkeyHeight = donkeyWidth*1.2;
    if(b.y>height-donkeyHeight-20 && b.y<height-20 && b.x===donkeyPos){
      score++; b.caught=true;
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
  gameOver=true;
  document.getElementById('finalScore').innerText=`${texts.game_over} - ${texts.score}: ${score}`;
  playBtn.textContent = texts.play_again || 'Play Again';
  overlay.style.display='flex';
}

function moveLeft(){donkeyPos=0;}
function moveRight(){donkeyPos=1;}

window.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')moveLeft();if(e.key==='ArrowRight')moveRight();});
canvas.addEventListener('touchstart',e=>{const x=e.touches[0].clientX; if(x<width/2) moveLeft(); else moveRight();});
playBtn.addEventListener('click',startGame);
window.addEventListener('resize',resize);
resize();
loadAssets();
loadLang();
