export class ImageObservable {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(image) {
      for (const observer of this.observers) {
        observer.update(image);
      }
    }
  }
  
  export class ImageObserver {
    update(image) {
      const imageElement = document.getElementById('image');
      imageElement.src = image;
    }
  }
  
  const thumbnailImages = document.getElementsByClassName('thumbnail');
  for (const thumbnailImage of thumbnailImages) {
    thumbnailImage.addEventListener('click', () => {
      const newImage = thumbnailImage.src;
      imageObservable.notifyObservers(newImage);
    });
  }

