import { ImageObservable, ImageObserver } from './observer.js';

const imageObservable = new ImageObservable();
const imageObserver = new ImageObserver();

imageObservable.addObserver(imageObserver);

const thumbnailImages = document.getElementsByClassName('thumbnail');
for (const thumbnailImage of thumbnailImages) {
  thumbnailImage.addEventListener('click', () => {
    const newImage = thumbnailImage.src;
    imageObservable.notifyObservers(newImage);
  });
}

document.getElementById('blackButton').addEventListener('click', () => {
  const newImage = 'img/product-shirt-black.jpg';
  imageObservable.notifyObservers(newImage);
});

document.getElementById('whiteButton').addEventListener('click', () => {
  const newImage = 'img/product-shirt-white.jpg';
  imageObservable.notifyObservers(newImage);
});
