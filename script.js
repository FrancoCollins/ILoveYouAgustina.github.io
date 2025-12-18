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
    heart.style.transform = `rotate(${Math.random() * 360}deg)`;
    heartsContainer.appendChild(heart);

    const duration = 4 + Math.random() * 3;
    heart.animate(
        [
            { transform: `translateY(0) rotate(${Math.random() * 360}deg)`, opacity: 1 },
            { transform: `translateY(-${bodyHeight + 50}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
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

const heartInterval = setInterval(createHeart, 500);

setTimeout(() => {
    clearInterval(heartInterval);
}, 7000); // 10 segundos


// Animación inicial del párrafo
window.addEventListener('load', () => {
    const nosotrosP = document.querySelector('#nosotros p');
    if (nosotrosP) {
        nosotrosP.style.opacity = 1;
    }
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

// <!-- Carrusel JS manual -->
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

const slideWidth = track.children[0].getBoundingClientRect().width + 10; // ancho + margen
let isMoving = false;

// Inicializamos posición
track.style.transform = `translateX(0px)`;

// Función mover siguiente
function nextSlide() {
    if(isMoving) return;
    isMoving = true;

    track.style.transition = 'transform 0.4s ease-in-out';
    track.style.transform = `translateX(-${slideWidth}px)`;

    track.addEventListener('transitionend', () => {
        track.style.transition = 'none';
        // Mover la primera imagen al final
        track.appendChild(track.firstElementChild);
        // Resetear posición
        track.style.transform = `translateX(0px)`;
        isMoving = false;
    }, { once: true });
}

// Función mover anterior
function prevSlide() {
    if(isMoving) return;
    isMoving = true;

    // Mover la última imagen al inicio antes de animar
    track.insertBefore(track.lastElementChild, track.firstElementChild);
    track.style.transition = 'none';
    track.style.transform = `translateX(-${slideWidth}px)`;

    // Animar hacia la posición original
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            track.style.transition = 'transform 0.4s ease-in-out';
            track.style.transform = `translateX(0px)`;
        });
    });

    track.addEventListener('transitionend', () => {
        isMoving = false;
    }, { once: true });
}

// Botones
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// PLANES //









document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('cards-container-plans');
    const planForm = document.getElementById('plan-form');

    // Array en memoria para guardar los planes
    let plans = [];

    // Función para renderizar todas las tarjetas
    function renderPlans() {
        cardsContainer.innerHTML = ''; // Limpiar contenedor

        if (plans.length === 0) {
            const msg = document.createElement('p');
            msg.textContent = 'No hay planes aún. Agrega uno con el formulario 😊';
            cardsContainer.appendChild(msg);
            return;
        }

        plans.forEach(plan => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${plan.name}</h3>
                <p><strong>Autor:</strong> ${plan.author}</p>
                <p><strong>Fecha del plan:</strong> ${plan.date}</p>
                <p><strong>Creado:</strong> ${plan.created}</p>
            `;
            cardsContainer.appendChild(card);
        });
    }

    // Render inicial
    renderPlans();

    // Manejo del formulario
    planForm.addEventListener('submit', e => {
        e.preventDefault(); // Evita que la página se recargue

        const formData = new FormData(planForm);
        const newPlan = {
            name: formData.get('name'),
            author: formData.get('author'),
            date: formData.get('date'),
            created: new Date().toISOString().split('T')[0] // Fecha actual
        };

        plans.push(newPlan);  // Guardar en memoria
        renderPlans();        // Renderizar todas las tarjetas
        planForm.reset();     // Limpiar el formulario
    });
});
