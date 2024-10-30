

export const playAudio = (src) => {
  const audio = new Audio(src);
  audio.autoplay = true;
  audio.play();
}