

const productosCarrito=document.getElementById("productos-carrito")
const totalCarrito=document.getElementById("total-compra")



let carrito=[];

function agregar(nombre,precio) {
    carrito.push({nombre,precio})
    mostrarcarrito();
}

function mostrarcarrito(){
    productosCarrito.innerHTML='';
    let total=0;
    carrito.forEach(producto => {
        const lista=document.createElement('li');
        lista.textContent=`${producto.nombre}: $${producto.precio}`;
        productosCarrito.appendChild(lista);
        total+=producto.precio;
        
    });
    totalCarrito.textContent=`$${total}`;
}

function eliminarcarrito(){
    carrito=[]
    mostrarcarrito()
}