document.addEventListener('DOMContentLoaded', () => {
    console.log('Archivo app.js cargado correctamente');  

    document.getElementById('ingresarBtn').addEventListener('click', () => {
        const usuario = document.getElementById('usuario').value;
        const contrasena = document.getElementById('contrasena').value;
        const loginResultado = document.getElementById('loginResultado');

        console.log('Botón Ingresar fue clickeado');  // Para verificar si el evento se activa

        if (usuario === 'fernandoorivas' && contrasena === 'DiseñoSoftware') {
            console.log('Credenciales correctas');  // Para verificar si pasa por aquí
            window.location.href = 'correcto.html';  // Cambia 'correcto.html' por la página a la que quieras redirigir
        } else {
            loginResultado.innerHTML = '<p>Usuario o contraseña incorrectos. Inténtalo de nuevo.</p>';
            loginResultado.style.color = 'red';
            console.log('Credenciales incorrectas');  // Para verificar si pasa por aquí
        }
    });
});
