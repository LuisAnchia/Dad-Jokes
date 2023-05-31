const products = {
  'product-case-white': {
    price: 5,
    title: 'Product Case white'
  },
  'product-case-black': {
    price: 7,
    title: 'Product Case Black'
  },
  'product-poster-white': {
    price: 3,
    title: 'Product poster white'
  },
  'product-poster-black': {
    price: 5,
    title: 'Product poster black'
  },
  'product-shirt-white': {
    price: 10,
    title: 'Product shirt white'
  },
  'product-shirt-black': {
    price: 13,
    title: 'Product shirt black'
  },
  'product-pillow-white': {
    price: 12,
    title: 'Product pillow white'
  },
  'product-pillow-black': {
    price: 15,
    title: 'Product pillow black'
  }
};

export class ImageObserver {
  update(image) {
    console.log('Imagen actualizada:', image);
    const imageElement = document.getElementById('image');
    imageElement.src = image;
    const priceElement = document.querySelector('.display-principal span');
    const product = products[image.split('/').pop().split('.')[0]];
    priceElement.textContent = '$' + product.price;
    const title = document.querySelector('h1');
    title.textContent = product.title;
  }
}