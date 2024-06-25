const productos = [
    { id: 1, nombre: 'Camiseta oficial 2024', precio: 10000, cantidad: 0 },
    { id: 2, nombre: 'Short oficial 2024', precio: 6000, cantidad: 0 },
    { id: 3, nombre: 'Medias oficiales 2024', precio: 3000, cantidad: 0 }
];

const totalCarrito = document.getElementById("total-compra");

function mostrarCarrito() {
    const productosCarrito = document.getElementById("productos-carrito");
    productosCarrito.innerHTML = '';
    productos.forEach(producto => {
        if (producto.cantidad > 0) { 
            const textocarrito = document.createElement('div');
            textocarrito.className = 'producto';
            textocarrito.innerHTML = `
                <span>${producto.nombre}</span>
                <span>$${producto.precio}</span>
                <span id="cantidad-${producto.id}"> x${producto.cantidad}</span>
                <button onclick="agregarUnidad(${producto.id})">+</button>
                <button onclick="quitarUnidad(${producto.id})">-</button>
            `;
            productosCarrito.appendChild(textocarrito);
        }
    });
    actualizarTotal();
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    producto.cantidad += 1;
    mostrarCarrito();
}

function agregarUnidad(id) {
    const producto = productos.find(p => p.id === id);
    producto.cantidad += 1;
    document.getElementById(`cantidad-${producto.id}`).textContent = " x"+producto.cantidad;
    actualizarTotal();
}  

function quitarUnidad(id) {
    const producto = productos.find(p => p.id === id);
    if (producto.cantidad > 0) {
        producto.cantidad -= 1;
        if (producto.cantidad === 0) {
            mostrarCarrito();
        } else {
            document.getElementById(`cantidad-${producto.id}`).textContent = " x"+producto.cantidad;
        }
        actualizarTotal();
    }
}

function actualizarTotal() {
    const total = productos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    document.getElementById('total-compra').textContent = "$"+total;
}

function vaciarCarrito() {
    productos.forEach(producto => producto.cantidad = 0);
    mostrarCarrito();
}

function compraRealizada(){
    if (productos.every(producto => producto.cantidad === 0)){
        alert("El carrito está vacio")
    }
    else{
        alert("Compra realizada con éxito")
        vaciarCarrito()
    }
    
}