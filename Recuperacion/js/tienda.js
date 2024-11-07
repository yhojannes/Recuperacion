// Función calcular el subtotal de un producto
function calcularSubtotal(cantidad, precio) {
    return cantidad * precio;
}

// Función calcular el descuento
function calcularDescuento(subtotal, descuento) {
    return subtotal * descuento / 100;
}

// Función alcular el total
function calcularTotal(subtotal, descuento) {
    return subtotal - calcularDescuento(subtotal, descuento);
}

// Función para el contenido HTML de la factura
function generarFactura(producto, cantidad, precio, descuento) {

    const subtotal = calcularSubtotal(cantidad, precio);
    const descuentoAplicado = calcularDescuento(subtotal, descuento);
    const total = calcularTotal(subtotal, descuento);

    const subtotalRedondeado = Math.floor(subtotal);
    const descuentoRedondeado = Math.floor(descuentoAplicado);
    const totalRedondeado = Math.floor(total);

    return `
        <p><strong>Producto: ${producto}</strong></p> <!-- Producto ya ha sido recortado -->
        <p><strong>Subtotal --> ${subtotalRedondeado}</strong></p>
        <p><strong>Descuento -> ${descuentoRedondeado}</strong></p>
        <p><strong>Total -----> ${totalRedondeado}</strong></p>
    `;
}

// Función para generar la factura
document.getElementById('factura').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreProducto = document.getElementById('producto').value.trim();

    // El trim no esta funcionando
    console.log(`"${nombreProducto}"`);

    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precio = parseFloat(document.getElementById('precio').value);
    const descuento = parseFloat(document.getElementById('descuento').value || 0);

    // Generar factura
    const facturaHTML = generarFactura(nombreProducto, cantidad, precio, descuento);
    document.getElementById('resultado').innerHTML = facturaHTML;
});
