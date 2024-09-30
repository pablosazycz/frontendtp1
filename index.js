const toggleButton = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");
const toggleContainer = document.querySelector(".nav__toggle-container");

toggleButton.addEventListener("click", () => {
  toggleContainer.classList.toggle("active");
});

const formulario = document.getElementById("formulario");
formulario.addEventListener("click", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  const error = document.getElementById("error");
  const mensajeEnviado = document.getElementById("mensaje-enviado");
  const contactoForm = document.querySelector(".contacto__form");
  error.innerHTML = "";
  if (!nombre) {
    error.innerHTML += "<p>Por favor, ingresa tu nombre</p>";
    return;
  }
  if (
    !email ||
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  ) {
    error.innerHTML += "<p>Por favor, ingresa un correo electrónico válido</p>";
    return;
  }
  if (!mensaje) {
    error.innerHTML += "<p>Por favor, ingresa tu mensaje</p>";
    return;
  }

  if (!nombre || !email || !mensaje) {
    return;
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      email: email,
      mensaje: mensaje,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      formulario.style.display = "none";
      mensajeEnviado.style.display = "block";

      setTimeout(() => {
        mensajeEnviado.style.display = "none";
      }, 3000); 
      setTimeout(() => {
        formulario.style.display = "block";
      }, 3000);
      const imagen = document.getElementById("imagen-contacto");
      imagen.classList.add("animate-slide");

      setTimeout(() => {
        imagen.classList.remove("animate-slide");
      }, 2000); 
    })
    .catch((error) => {
      console.log(error);
    });
});
