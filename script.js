// === CONFIGURA AQUÍ LOS DATOS DE TU EVENTO ===
const fechaEvento = new Date("2026-12-20T16:00:00"); // AÑO-MES-DÍAThh:mm:ss

function actualizarContador() {
    const ahora = new Date();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
        document.getElementById("contador").innerHTML = "<p>🦖 ¡Hoy es la fiesta! 🦕</p>";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    document.getElementById("dias").textContent = String(dias).padStart(2, "0");
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
}

// Botón de confirmar asistencia
document.getElementById("confirmarBtn").addEventListener("click", function() {
    alert("🦖 ¡Gracias por confirmar! Será una fiesta increíble. ¡Te esperamos! 🦕");
});

// Iniciar contador
actualizarContador();
setInterval(actualizarContador, 60000);
