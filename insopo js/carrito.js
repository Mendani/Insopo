let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio) {
    precio = Number(precio);
    carrito.push({ nombre, precio });
    guardarCarrito();
    renderCarrito();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    renderCarrito();
}

function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    renderCarrito();
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


function enviarWhatsApp() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    const direccion = document.getElementById("direccion").value;

    if (direccion.trim() === "") {
        alert("Por favor ingresá una dirección");
        return;
    }

    let mensaje = "Hola! 👋 Quiero hacer el siguiente pedido:%0A%0A";
    let total = 0;

    carrito.forEach(item => {
        mensaje += `• ${item.nombre} - $${item.precio}%0A`;
        total += item.precio;
    });

    mensaje += `%0A📍 Dirección: ${direccion}`;
    mensaje += `%0A💰 Total: $${total}`;

    const telefono = "59894691720"; // tu número
    const url = `https://wa.me/${telefono}?text=${mensaje}`;

    window.open(url, "_blank");
}



function renderCarrito() {
    const lista = document.getElementById("carrito");
    const totalTexto = document.getElementById("total");

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio;
        lista.innerHTML += `
            <li>
                ${item.nombre} - $${item.precio}
                <button onclick="eliminarProducto(${index})">❌</button>
            </li>
        `;
    });

    totalTexto.textContent = "Total: $" + total;
}

renderCarrito();