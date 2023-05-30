import { ImageObserver } from './observer.js';
import { callJoker } from './random.js';

const imageObserver = new ImageObserver();

const thumbnailImages = document.getElementsByClassName('thumbnail');
for (const thumbnailImage of thumbnailImages) {
  thumbnailImage.addEventListener('click', () => {
    const newImage = thumbnailImage.src;
    imageObserver.update(newImage);
  });
}


  document.getElementById('blackButton').addEventListener('click', () => {
    const currentImage = document.getElementById('image').src;
  
    if (currentImage.includes('product-pillow-white')) {
      const newImage = currentImage.replace('product-pillow-white', 'product-pillow-black');
      imageObserver.update(newImage);
    }

     else if (currentImage.includes('product-poster-white')) {
        const newImage = currentImage.replace('product-poster-white', 'product-poster-black');
        imageObserver.update(newImage);
      }
    
      else if (currentImage.includes('product-case-white')) {
        const newImage = currentImage.replace('product-case-white', 'product-case-black');
        imageObserver.update(newImage);
      }
      else if (currentImage.includes('product-shirt-white')) {
        const newImage = currentImage.replace('product-shirt-white', 'product-shirt-black');
        imageObserver.update(newImage);
      }
    
  
  
  imageObserver.update(newImage);
});

document.getElementById('whiteButton').addEventListener('click', () => {
  const currentImage = document.getElementById('image').src;
  let newImage = '';

  if (currentImage.includes('product-pillow-white')) {
    const newImage = currentImage.replace('product-pillow-white', 'product-pillow-black');
    imageObserver.update(newImage);
  }

  if (currentImage.includes('product-shirt')) {
    newImage = currentImage.replace('product-shirt-black', 'product-shirt-white');
  } else if (currentImage.includes('product-poster')) {
    newImage = currentImage.replace('product-poster-black', 'product-poster-white');
  } else if (currentImage.includes('product-case')) {
    newImage = currentImage.replace('product-case-black', 'product-case-white');
  } else if (currentImage.includes('product-pillow')) {
    newImage = currentImage.replace('product-pillow-black', 'product-pillow-white');
  }

  imageObserver.update(newImage);
});

const imageElement = document.getElementById('image');
imageElement.addEventListener('load', () => {
  const currentImage = imageElement.src;
  imageObserver.update(currentImage);
});

