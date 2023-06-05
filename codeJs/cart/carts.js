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
      let producto = new Producto(this.getAttribute('data-producto'), imagen, this.getAttribute('data-precio'));
      carrito.push(producto);
      alert('Producto "' + producto.nombre + '" agregado al carrito.');
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
    carritoList.innerHTML = 'No hay productos pendientes.';
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
      carritoList.innerHTML = 'No hay productos pendientes.';
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

