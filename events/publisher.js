import { displayJoke } from '../codeJs/api/domRandom.js';
import { addEventListeners } from '../codeJs/cart/carts.js';
import { showJoke } from '../codeJs/callRandom.js';
import { ImageObserver } from './observer.js';

const imageObserver = new ImageObserver();
const imageElement = document.getElementById('image');
showJoke();
const jokeText = localStorage.getItem('jokeAbout');
if (jokeText) {
showJokeOverlay(jokeText);s
localStorage.removeItem('jokeAbout');
}
addEventListeners();
const buttonForJoker = document.getElementById("buttonForJoker");
buttonForJoker.addEventListener("click", displayJoke);


const thumbnailImages = document.getElementsByClassName('thumbnail');
for (const thumbnailImage of thumbnailImages) {
  thumbnailImage.addEventListener('click', () => {
    const newImage = thumbnailImage.src;
    imageObserver.update(newImage);
  });
}

const whiteButton = document.getElementById('whiteButton');
whiteButton.addEventListener('click', () => {
  const currentImage = document.getElementById('image').src;
  const newImage = currentImage.replace('-black', '-white');
  imageObserver.update(newImage);
});

const blackButton = document.getElementById('blackButton');
blackButton.addEventListener('click', () => {
  const currentImage = document.getElementById('image').src;
  const newImage = currentImage.replace('-white', '-black');
  imageObserver.update(newImage);
});

