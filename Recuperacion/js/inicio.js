document.getElementById("InicioSesion").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombreInicio").value.trim();
    const telefono = document.getElementById("telefonoInicio").value.trim();
    const correo = document.getElementById("correoInicio").value.trim();

    // Obtener los datos del usuario desde localStorage
    const usuarioGuardado = localStorage.getItem(correo);

    if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);

        if (usuario.nombre === nombre && usuario.telefono === telefono) {
            alert("Inicio de sesión correcto");
            window.location.href = "tienda.html";
        } else {
            alert("Nombre o teléfono incorrecto.");
        }
    } else {
        alert("Correo electrónico no registrado.");
    }
});