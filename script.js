// --- Menú hamburguesa ---
// Menú hamburguesa dinámico
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active'); // entra o sale con animación
});


// --- Corazones y estrellas ---
const heartsContainer = document.getElementById('hearts-container');
const starsContainer = document.getElementById('stars-container');
const bodyWidth = window.innerWidth;
const bodyHeight = window.innerHeight;

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * bodyWidth + 'px';
    heart.style.bottom = '20px';
    heart.style.transform = `rotate(${Math.random()*360}deg)`;
    heartsContainer.appendChild(heart);

    const duration = 4 + Math.random() * 3;
    heart.animate(
        [
            { transform: `translateY(0) rotate(${Math.random()*360}deg)`, opacity: 1 },
            { transform: `translateY(-${bodyHeight + 50}px) rotate(${Math.random()*720}deg)`, opacity: 0 }
        ],
        { duration: duration * 1000, easing: 'linear' }
    ).onfinish = () => heart.remove();
}

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * bodyWidth + 'px';
    star.style.top = Math.random() * bodyHeight + 'px';
    starsContainer.appendChild(star);

    setTimeout(() => star.remove(), 4000 + Math.random() * 3000);
}

setInterval(createHeart, 500);
setInterval(createStar, 200);

// Animación inicial del párrafo
window.addEventListener('load', () => {
    document.querySelector('#nosotros p').style.opacity = 1;
});

// --- Música de fondo ---
const playButton = document.getElementById('play-music');

// Creamos un audio temporal apuntando a un .mp3
const audio = new Audio('ruta/a/tu-audio.mp3'); // <- reemplaza con tu archivo

playButton.addEventListener('click', () => {
    // Reproducimos el audio local
    audio.play();

    // Ocultamos el botón
    playButton.style.display = 'none';

    /** Código de YouTube comentado para release futuro
    if (playerReady && player && player.playVideo) {
        player.playVideo();
        playButton.style.display = 'none';
    } 
    else {
        const warning = document.createElement('div');
        warning.textContent = '⚠️ El reproductor aún no está listo. Intenta de nuevo en unos segundos.';
        warning.style.backgroundColor = 'red';
        warning.style.color = 'white';
        warning.style.padding = '10px';
        warning.style.marginTop = '10px';
        warning.style.borderRadius = '5px';
        document.body.appendChild(warning);
        setTimeout(() => warning.remove(), 3000);
    }
    **/
});
