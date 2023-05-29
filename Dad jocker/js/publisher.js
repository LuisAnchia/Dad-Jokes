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
  const currentImage = document.getElementById('image').src;
  let newImage = '';

  if (currentImage.includes('product-shirt')) {
    if (currentImage.includes('black')) {
      newImage = currentImage.replace('product-shirt-black', 'product-shirt-black');
    } else {
      newImage = currentImage.replace('product-shirt-white', 'product-shirt-black');
    }
  } else if (currentImage.includes('product-poster')) {
    newImage = currentImage.replace('product-poster-white', 'product-poster-black' );

  } else if (currentImage.includes('product-case')) {
    if (currentImage.includes('black')) {
      newImage = currentImage.replace('product-case-black', 'product-case-white');
    } else {
      newImage = currentImage.replace('product-case-white', 'product-case-black');
    }
  } else if (currentImage.includes('product-pillow')) {
    newImage = currentImage.replace('product-pillow-white', 'product-pillow-black' );

  }
  

  imageObservable.notifyObservers(newImage);
});

document.getElementById('whiteButton').addEventListener('click', () => {
  const currentImage = document.getElementById('image').src;
  let newImage = '';

  if (currentImage.includes('product-shirt')) {
    newImage = currentImage.replace('product-shirt-black', 'product-shirt-white');
  } else if (currentImage.includes('product-poster')) {
    newImage = currentImage.replace('product-poster-black', 'product-poster-white');
  } else if (currentImage.includes('product-case')) {
    newImage = currentImage.replace('product-case-black', 'product-case-white');
  } else if (currentImage.includes('product-pillow')) {
    newImage = currentImage.replace('product-pillow-black', 'product-pillow-white');
  }

  imageObservable.notifyObservers(newImage);
});

const imageElement = document.getElementById('image');
const priceElement = document.querySelector('.display-principal span');

imageElement.addEventListener('load', () => {
  const currentImage = imageElement.src;

  if (currentImage.includes('product-case-white')) {
    priceElement.textContent = '$5';
  } else if (currentImage.includes('product-case-black')) {
    priceElement.textContent = '$7';
  } else if (currentImage.includes('product-poster-white')) {
    priceElement.textContent = '$3';
  } else if (currentImage.includes('product-poster-black')) {
    priceElement.textContent = '$5';
  } else if (currentImage.includes('product-shirt-white')) {
    priceElement.textContent = '$10';
  } else if (currentImage.includes('product-shirt-black')) {
    priceElement.textContent = '$13';
  } else if (currentImage.includes('product-pillow-white')) {
    priceElement.textContent = '$12';
  } else if (currentImage.includes('product-pillow-black')) {
    priceElement.textContent = '$15';
  }
});
