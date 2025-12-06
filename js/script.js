/*const toggleBtn = document.getElementById("toggleTheme");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Função para alternar a imagem do botao tema
function toggleTheme() {
  if (body.classList.contains("bg-dark")) {
    body.classList.remove("bg-dark", "text-white");
    body.classList.add("bg-light", "text-dark");
    themeIcon.src = "./img/icones/lampada2.png"; // Caminho do ícone claro
  } else {
    body.classList.remove("bg-light", "text-dark");
    body.classList.add("bg-dark", "text-white");
    themeIcon.src = "./img/icones/lampada2d.png"; // Caminho do ícone escuro (adicione este arquivo)
  }
}

// Inicializa tema claro
body.classList.add("bg-light", "text-dark");
toggleBtn.addEventListener("click", toggleTheme);/*/
//-----------------------------------------------------------------------------------
// theme-toggle.js
const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('bg-dark', 'text-white');
        body.classList.remove('bg-light', 'text-dark');
        themeIcon.src = "./img/icones/lampada2.png"; // Caminho do ícone claro
    } else {
        body.classList.add('bg-light', 'text-dark');
        body.classList.remove('bg-dark', 'text-white');
        themeIcon.src = "./img/icones/lampada2d.png"; // Caminho do ícone escuro (adicione este arquivo)
    }
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
}

toggleBtn.addEventListener('click', toggleTheme);

// Inicializa tema ao carregar a página
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);