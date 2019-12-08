import imgs from './restaurants';

const TAGS = ['Micro Brewery', 'Italian', 'Chinese', 'South Indian', 'North Indian'];
function random(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomImg() {
  let index = random(0, imgs.length-1);
  return imgs[index];
}

export function getRandomTag() {
  let index = random(0, TAGS.length-1);
  return TAGS[index];
}