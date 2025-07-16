document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const email = document.getElementById("email").value;

  document.getElementById("mostrarNombre").textContent = `Nombre: ${nombre}`;
  document.getElementById("mostrarEdad").textContent = `Edad: ${edad}`;
  document.getElementById("mostrarEmail").textContent = `Email: ${email}`;

  // Limpiar el formulario
  e.target.reset();
});
