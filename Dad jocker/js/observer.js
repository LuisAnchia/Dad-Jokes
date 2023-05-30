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
    } else if (image.includes('product-case-black')) {
      price = 7;
    } else if (image.includes('product-poster-white')) {
      price = 3;
    } else if (image.includes('product-poster-black')) {
      price = 5;
    } else if (image.includes('product-shirt-white')) {
      price = 10;
    } else if (image.includes('product-shirt-black')) {
      price = 13;
    } else if (image.includes('product-pillow-white')) {
      price = 12;
    } else if (image.includes('product-pillow-black')) {
      price = 15;
    }

    priceElement.textContent = '$' + price;
  }
}
