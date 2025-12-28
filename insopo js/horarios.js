function toggleHorarios() {
  document.getElementById("horarios").classList.toggle("oculto");
}

function actualizarEstado() {
  const ahora = new Date();
  const dia = ahora.getDay(); // 0 = domingo, 6 = sábado
  const hora = ahora.getHours();

  const estadoBtn = document.getElementById("estado");

  let abierto = false;

  // SÁBADO
  if (dia === 6) {
    abierto = hora >= 11 && hora < 23;
  }

  // DOMINGO
  if (dia === 0) {
    abierto = hora >= 18 && hora < 23;
  }

  if (abierto) {
    estadoBtn.textContent = "🟢 Abierto ahora";
    estadoBtn.className = "abierto";
  } else {
    estadoBtn.textContent = "⛔ Cerrado ahora";
    estadoBtn.className = "cerrado";
  }
}

actualizarEstado();