const botonMenu = document.querySelector(".hamb");
const menu = document.querySelector("#menu-principal");
const icono = botonMenu.querySelector("i");

botonMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
});
