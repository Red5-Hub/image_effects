let audio = document.getElementById('backgroundAudio');
let audioControl = document.querySelector('.audio-control');

// Iniciar la reproducción cuando se carga la página
window.onload = function() {
  audio.play();
}

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    audioControl.textContent = '🔊';
  } else {
    audio.pause();
    audioControl.textContent = '🔇';
  }
}

let currentTheme = 'light';

function toggleTheme(theme) {
  const body = document.body;

  if (currentTheme === theme) {
    body.classList.remove('dark-theme', 'pink-theme');
    body.classList.add('light-theme');
    currentTheme = 'light';
  } else {
    body.classList.remove('light-theme', 'dark-theme', 'pink-theme');
    body.classList.add(theme + '-theme');
    currentTheme = theme;
  }
}

function applyEffect(effect) {
  const image = document.getElementById('astronaut');
  switch (effect) {
    case 'brightness':
      image.style.filter = 'brightness(1.8)';
      break;
    case 'contrast':
      image.style.filter = 'contrast(200%)';
      break;
    case 'blur':
      image.style.filter = 'blur(5px)';
      break;
    case 'grayscale':
      image.style.filter = 'grayscale(100%)';
      break;
    case 'invert':
      image.style.filter = 'invert(100%)';
      break;
    case 'sepia':
      image.style.filter = 'sepia(100%)';
      break;
    case 'saturate':
      image.style.filter = 'saturate(200%)';
      break;
    case 'hue-rotate':
      image.style.filter = 'hue-rotate(90deg)';
      break;
    case 'drop-shadow':
      image.style.filter = 'drop-shadow(5px 5px 5px black)';
      break;
    case 'opacity':
      image.style.opacity = '0.5';
      break;
    case 'negative':
      image.style.filter = 'invert(100%) hue-rotate(180deg)';
      break;
    case 'motion-blur':
      image.style.filter = 'blur(5px)';
      image.style.transition = 'filter 0.3s';
      break;
    case 'combo':
      image.style.filter = 'contrast(130%) brightness(80%) saturate(200%)';
      break;
    case 'rotate':
      image.style.transform = 'rotate(45deg)';
      break;
    case 'mirror-horizontal':
      image.style.transform = 'scaleX(-1)';
      break;
    case 'mirror-vertical':
      image.style.transform = 'scaleY(-1)';
      break;
    case 'zoom':
      image.style.transform = 'scale(1.8)';
      break;
    default:
      image.style.filter = 'none';
      image.style.opacity = '1';
      image.style.transform = 'none';
      image.style.transition = 'none';
      image.style.imageRendering = 'auto';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.image-container');
  const image = container.querySelector('img');

  // Obtener las coordenadas del contenedor
  let rect = container.getBoundingClientRect();
  let centerX = rect.left + rect.width / 2;
  let centerY = rect.top + rect.height / 2;

  // Detectar si es un dispositivo móvil
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (!isMobile) {
    // Añadir el evento de movimiento del ratón
    document.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - centerX;
      let deltaY = mouseY - centerY;

      let percentX = deltaX / window.innerWidth;
      let percentY = deltaY / window.innerHeight;

      let maxMove = 25; // máximo movimiento en píxeles

      // Aplicar la transformación al contenedor
      container.style.transform = `translate(${percentX * maxMove}px, ${percentY * maxMove}px)`;
    });

    // Actualizar la posición central cuando se redimensiona la ventana
    window.addEventListener('resize', () => {
      rect = container.getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
    });
  }
});
