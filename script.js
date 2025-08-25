const productos = [
    { id: 1, nombre: "Remera Oversize", precio: 8000 },
    { id: 2, nombre: "Camisa Casual", precio: 12000 },
    { id: 3, nombre: "Jeans Regular Fit", precio: 15000 },
    { id: 4, nombre: "Buzo con capucha", precio: 18000 },
    { id: 5, nombre: "Campera de jean", precio: 25000 }
];

let carrito = [];


function mostrarCatalogo() {
    console.clear();
    console.log("=== CATÁLOGO ===");
    productos.forEach(p => console.log(`${p.id}. ${p.nombre} - $${p.precio}`));
}


function agregarAlCarrito() {
    let id = parseInt(prompt("Ingrese el número del producto a agregar:"));
    let producto = productos.find(p => p.id === id);

    if (producto) {
        carrito.push(producto);
        alert(`${producto.nombre} agregado al carrito ✅`);
    } else {
        alert("❌ Producto no válido.");
    }
}


function calcularTotal() {
    return carrito.reduce((acc, item) => acc + item.precio, 0);
}


function finalizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let total = calcularTotal();
    let confirmar = confirm(`El total es $${total}. ¿Confirmar compra?`);

    if (confirmar) {
        alert("✅ Compra realizada con éxito.");
        console.log("Detalle de la compra:");
        carrito.forEach(item => console.log(`- ${item.nombre} $${item.precio}`));
        console.log(`TOTAL: $${total}`);
        carrito = []; // vaciar carrito
    } else {
        alert("❌ Compra cancelada.");
    }
}


alert("Bienvenido al simulador de carrito");

let continuar = true;
while (continuar) {
    mostrarCatalogo();

    let opcion = prompt(`Seleccione una opción:
1. Ver catálogo
2. Agregar producto
3. Finalizar compra
4. Salir`);

    switch (opcion) {
        case "1":
            mostrarCatalogo();
            break;
        case "2":
            agregarAlCarrito();
            break;
        case "3":
            finalizarCompra();
            break;
        case "4":
            continuar = false;
            alert("Gracias por usar el simulador 👋");
            break;
        default:
            alert("❌ Opción no válida.");
            break;
    }
}
