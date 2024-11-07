// Expresión para validar el formato de email
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Nombre
function validarNombre() {
    const nombre = document.getElementById("nombre").value.trim();
    const mensajeElemento = document.getElementById("mensajeNombre");

    if (nombre.length >= 3) {
        mensajeElemento.textContent = "Nombre válido.";
        mensajeElemento.style.color = "green";
    } else {
        mensajeElemento.textContent = "El nombre debe tener al menos 3 caracteres.";
        mensajeElemento.style.color = "red";
    }
}

// Edad
function validarEdad() {
    const edad = document.getElementById("edad").value.trim();
    const mensajeElemento = document.getElementById("mensajeEdad");

    if (edad >= 18) {
        mensajeElemento.textContent = "Edad válida.";
        mensajeElemento.style.color = "green";
    } else {
        mensajeElemento.textContent = "Debes tener al menos 18 años.";
        mensajeElemento.style.color = "red";
    }
}

// Formato email
function validarEmail() {
    const emailLimpio = document.getElementById("correo").value.trim();
    const mensajeElemento = document.getElementById("mensajeEmail");

    if (regexEmail.test(emailLimpio)) {
        mensajeElemento.textContent = `El email "${emailLimpio}" es válido.`;
        mensajeElemento.style.color = "green";
    } else {
        mensajeElemento.textContent = `El email "${emailLimpio}" no es válido.`;
        mensajeElemento.style.color = "red";
    }
}

// Teléfono
function validarTelefono() {
    const telefono = document.getElementById("telefono").value.trim();
    const mensajeElemento = document.getElementById("mensajeTelefono");
    const regexTelefono = /^[0-9]{10}$/;

    if (regexTelefono.test(telefono)) {
        mensajeElemento.textContent = "Teléfono válido.";
        mensajeElemento.style.color = "green";
    } else {
        mensajeElemento.textContent = "El teléfono debe tener 10 dígitos.";
        mensajeElemento.style.color = "red";
    }
}

// Validar el formulario
document.getElementById("Registro").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener valores 
    const nombre = document.getElementById("nombre").value.trim();
    const edad = parseInt(document.getElementById("edad").value.trim());
    const email = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    // Verificar si son válidos
    if (nombre && edad >= 18 && regexEmail.test(email) && /^[0-9]{10}$/.test(telefono)) {
        
        // Guardar los datos en el localStorage
        const usuario = {
            nombre: nombre,
            edad: edad,
            correo: email,
            telefono: telefono
        };

        // Guardar el usuario en localStorage usando el correo como clave
        localStorage.setItem(email, JSON.stringify(usuario));

        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "inicio.html";
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }
});