import { callJoker } from '../codeJs/random.js';
import { addEventListeners } from '../codeJs/cart/carts.js';
addEventListeners();
import { showJoke } from '../codeJs/callRandom.js';
showJoke();

const jokeText = localStorage.getItem('jokeAbout');
if (jokeText) {
showJokeOverlay(jokeText);s
localStorage.removeItem('jokeAbout');
}

import { ImageObserver } from './observer.js';
const imageObserver = new ImageObserver();
const imageElement = document.getElementById('image');

const colorMappings = {
  'product-case': { white: 'black', black: 'white' },
  'product-poster': { white: 'black', black: 'white' },
  'product-shirt': { white: 'black', black: 'white' },
  'product-pillow': { white: 'black', black: 'white' }
};

const products = {
  'product-case': {
    price: { white: 5, black: 7 },
    title: 'Product Case',
    colors: ['white', 'black']
  },
  'product-poster': {
    price: { white: 3, black: 5 },
    title: 'Product Poster',
    colors: ['white', 'black']
  },
  'product-shirt': {
    price: { white: 10, black: 13 },
    title: 'Product Shirt',
    colors: ['white', 'black']
  },
  'product-pillow': {
    price: { white: 12, black: 15 },
    title: 'Product Pillow',
    colors: ['white', 'black']
  }
};

imageElement.addEventListener('load', () => {
  const currentImage = imageElement.src;
  imageObserver.update(currentImage);
});

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
