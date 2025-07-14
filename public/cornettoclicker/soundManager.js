// soundManager.js
export const sounds = {
  music: new Audio('sounds/music.mp3'),
  collect: new Audio('sounds/collect.mp3'),
  fire: new Audio('sounds/fire.mp3')
};

sounds.music.loop = true;
sounds.music.volume = 0.4;

export function startMusic() {
  if (sounds.music.paused) {
    sounds.music.play().catch((e) => {
      console.warn("Autoplay blocked:", e);
    });
  }
}

export function stopMusic() {
  if (!sounds.music.paused) {
    sounds.music.pause();
    sounds.music.currentTime = 0;
  }
}

export function playSound(name) {
  const sound = sounds[name];
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }
}
