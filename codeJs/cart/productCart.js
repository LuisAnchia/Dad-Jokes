// archivo Producto.js
export default class Producto {
    constructor(nombre, imagen, precio) {
      this.nombre = nombre;
      this.imagen = imagen;
      this.precio = precio;
    }
  
    mostrarProducto() {
      let li = document.createElement('li');
      let img = document.createElement('img');
      img.src = this.imagen;
      img.alt = this.nombre;
      li.appendChild(img);
      li.appendChild(document.createTextNode(this.nombre + ' - $' + this.precio));
      return li;
    }
  }