document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('cards-container-flights');
    const flightForm = document.getElementById('flight-form');

    // Cargar viajes desde localStorage o inicializar vacío
    let flights = JSON.parse(localStorage.getItem('flights')) || [];

    // Función para renderizar todas las tarjetas
    function renderFlights() {
        cardsContainer.innerHTML = '';

        if (flights.length === 0) {
            const msg = document.createElement('p');
            msg.textContent = 'No hay viajes aún. Agrega uno con el formulario ✈️';
            cardsContainer.appendChild(msg);
            return;
        }

        flights.forEach(flight => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>✈️ ${flight.destination}</h3>
                <p><strong>Autor:</strong> ${flight.author}</p>
                <p><strong>Ida:</strong> ${flight.departure}</p>
                <p><strong>Vuelta:</strong> ${flight.return || '—'}</p>
                <p><strong>Creado:</strong> ${flight.created}</p>
                <p class="flight-description"><strong>Notas:</strong> ${flight.description}</p>
            `;
            cardsContainer.appendChild(card);
        });
    }

    // Render inicial
    renderFlights();

    // Manejo del formulario
    flightForm.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(flightForm);
        const newFlight = {
            destination: formData.get('destination'),
            author: formData.get('author'),
            departure: formData.get('departure'),
            return: formData.get('return'),
            description: formData.get('description') || '',
            created: new Date().toISOString().split('T')[0]
        };

        flights.push(newFlight);
        localStorage.setItem('flights', JSON.stringify(flights));
        renderFlights();
        flightForm.reset();
    });
});

// Carousel
const container = document.getElementById('cards-container-flights');
const prevBtn = document.querySelector('.carousel-btn.prev-flights');
const nextBtn = document.querySelector('.carousel-btn.next-flights');

let scrollAmount = 0;
const cardWidth = 220;

nextBtn.addEventListener('click', () => {
    scrollAmount += cardWidth;
    if (scrollAmount > container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
    }
    container.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) {
        scrollAmount = container.scrollWidth - container.clientWidth;
    }
    container.style.transform = `translateX(-${scrollAmount}px)`;
});
