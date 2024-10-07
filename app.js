const apiKey = 'df77ce8ee05241ff9c255757240410';
const buscarBtn = document.getElementById('buscarBtn');
const ciudadInput = document.getElementById('ciudad');
const resultadoDiv = document.getElementById('resultado');

buscarBtn.addEventListener('click', () => {
    const ciudad = ciudadInput.value;
    if (ciudad === "") {
        resultadoDiv.innerHTML = "<p>Por favor, ingresa una ciudad.</p>";
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${ciudad}&lang=es`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultadoDiv.innerHTML = `<p>No se pudo encontrar el clima para la ciudad: ${ciudad}</p>`;
            } else {
                resultadoDiv.innerHTML = `
                    <h2>Clima en ${data.location.name}, ${data.location.country}</h2>
                    <p>Temperatura: ${data.current.temp_c}°C</p>
                    <p>Condición: ${data.current.condition.text}</p>
                    <p></p>Humedad: ${data.current.humidity}%</p>                    
                    <p>Viento: ${data.current.wind_kph} kph</p>
                `;
            }
        })
        .catch(error => {
            resultadoDiv.innerHTML = "<p>Hubo un error al obtener el clima.</p>";
        });
});
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



