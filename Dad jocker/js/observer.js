export class ImageObserver {
  update(image) {
    // Lógica de actualización del observador de imagen
    console.log('Imagen actualizada:', image);

    const imageElement = document.getElementById('image');
    imageElement.src = image;

    const priceElement = document.querySelector('.display-principal span');
    let price = 0;

    if (image.includes('product-case-white')) {
      price = 5;
      const title = document.querySelector('h1');
      title.textContent = "Product Case white";

    } else if (image.includes('product-case-black')) {
      price = 7;
      const title = document.querySelector('h1');
      title.textContent = "Product Case Black";

    } else if (image.includes('product-poster-white')) {
      price = 3;
      const title = document.querySelector('h1');
      title.textContent = "Product poster white";

    } else if (image.includes('product-poster-black')) {
      price = 5;
      const title = document.querySelector('h1');
      title.textContent = "Product poster black";

    } else if (image.includes('product-shirt-white')) {
      price = 10;
      const title = document.querySelector('h1');
      title.textContent = "Product shirt white";

    } else if (image.includes('product-shirt-black')) {
      price = 13;
      const title = document.querySelector('h1');
      title.textContent = "Product shirt black";

    } else if (image.includes('product-pillow-white')) {
      price = 12;
      const title = document.querySelector('h1');
      title.textContent = "Product pillow white";

    } else if (image.includes('product-pillow-black')) {
      price = 15;
      const title = document.querySelector('h1');
      title.textContent = "Product pillow black";
    }

    priceElement.textContent = '$' + price;
  }
}
