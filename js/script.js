const botaoMenu = document.querySelector("#menu-hamburguer");
const escondeMenu = document.querySelector("#esconde");


botaoMenu.onclick = () => {
  escondeMenu.classList.toggle('visible');
  }
  