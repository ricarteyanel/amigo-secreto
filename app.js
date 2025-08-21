// Estado global de participantes
const amigos = [];

// Normaliza para comparar nombres (evita duplicados por mayúsculas/espacios)
function normalizar(str) {
  return str.trim().toLowerCase().replace(/\s+/g, " ");
}

// Agrega un nombre desde el input #amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  const resultado = document.getElementById("resultado");

  // Limpia resultado anterior
  resultado.innerHTML = "";

  if (!nombre) {
    alert("Por favor, ingresá un nombre.");
    input.focus();
    return;
  }

  const yaExiste = amigos.some((a) => normalizar(a) === normalizar(nombre));
  if (yaExiste) {
    alert("Ese nombre ya está en la lista.");
    input.value = "";
    input.focus();
    return;
  }

  amigos.push(nombre);
  input.value = "";
  input.focus();
  renderLista();
}

// Renderiza la lista en el <ul id="listaAmigos">
function renderLista() {
  const lista = document.getElementById("listaAmigos");
  if (amigos.length === 0) {
    lista.innerHTML = "";
    return;
  }

  lista.innerHTML = amigos.map((a, i) => `<li>${i + 1}. ${a}</li>`).join("");
}

// Sortea un participante aleatorio y lo muestra en <ul id="resultado">
function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    alert("Primero agregá al menos un nombre.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const seleccionado = amigos[indice];

  resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${seleccionado}</strong></li>`;
}
