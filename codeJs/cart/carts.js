import Producto from '../cart/productCart.js';

export function addEventListeners() {
  let agregarBtns = document.getElementsByClassName('agregar-btn');
  let carritoList = document.getElementById('carrito-list');
  let verCarritoBtn = document.getElementById('ver-carrito-btn');
  let modal = document.getElementById('modal');
  let modalContent = document.getElementsByClassName('modal-content')[0];
  let closeBtn = document.getElementsByClassName('close')[0];
  let carrito = [];

  for (let i = 0; i < agregarBtns.length; i++) {
    agregarBtns[i].addEventListener('click', function() {
      let imagenPrincipal = document.getElementById('image');
      let imagen = imagenPrincipal ? imagenPrincipal.getAttribute('src') : this.getAttribute('data-imagen');
      let precio = imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-shirt-white') ? '10'
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-shirt-black') ? '13' 
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-case-black') ? '7' 
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-case-white') ? '5'
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-pillow-white') ? '12'
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-pillow-black') ? '15'
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-poster-white') ? '3'
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-poster-black') ? '5': this.getAttribute('data-precio');
      let nombre = imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-shirt-white') ? 'Product Shirt White'
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-shirt-black') ? 'Product Shirt Black' 
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-case-black') ? 'Product case Black'
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-case-white') ? 'Product case white'
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-pillow-white') ? 'Product pillow white' 
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-pillow-black') ? 'Product pillow black' 
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-poster-white') ? 'Product poster white' 
                 : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-poster-black') ? 'Product poster black' : imagenPrincipal && imagenPrincipal.getAttribute('src').includes('product-poster-black') ? 'Product poster black' :  this.getAttribute('data-producto');
      let producto = new Producto(nombre, imagen, precio);
      carrito.push(producto);
      alert('Product "' + producto.nombre + '" Added the Cart.');
    });
  }

  const eliminarTodoBtn = document.getElementById("eliminarTodoBtn");
  eliminarTodoBtn.addEventListener("click", function() {
    carrito = [];
    actualizarLista();
  });

  const eliminarUnoBtn = document.getElementById("eliminarUnoBtn");
  eliminarUnoBtn.addEventListener("click", function() {
    carrito.pop();
    actualizarLista();
  });

  function actualizarLista() {
    carritoList.innerHTML = '';
    if (carrito.length === 0) {
      carritoList.innerHTML = 'Don´t there any products in this moment..';
    } else {
      for (let j = 0; j < carrito.length; j++) {
        let producto = carrito[j];
        let li = producto.mostrarProducto();
        carritoList.appendChild(li);
      }
    }
  }

  verCarritoBtn.addEventListener('click', function() {
    carritoList.innerHTML = '';
    if (carrito.length === 0) {
      carritoList.innerHTML = 'Don´t there any products in this moment.';
    } else {
      for (let j = 0; j < carrito.length; j++) {
        let producto = carrito[j];
        let li = producto.mostrarProducto();
        carritoList.appendChild(li);
      }
    }
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}