// Array para almacenar los productos del carrito
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

// Función para actualizar la lista del carrito en la web
function actualizarCarrito() {
    let listaCarrito = document.getElementById("carrito");
    let totalCarrito = document.getElementById("total");
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        let item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.style.marginLeft = "10px";
        botonEliminar.onclick = () => eliminarDelCarrito(index);
        
        item.appendChild(botonEliminar);
        listaCarrito.appendChild(item);

        total += producto.precio;
    });

    totalCarrito.textContent = `Total: $${total}`;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para vaciar todo el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}
