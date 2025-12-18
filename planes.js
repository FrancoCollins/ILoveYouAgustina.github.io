document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('cards-container-plans');
    const planForm = document.getElementById('plan-form');

    // Cargar planes desde localStorage o inicializar vacío
    let plans = JSON.parse(localStorage.getItem('plans')) || [];

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
                <p class="plan-description"><strong>Descripción:</strong> ${plan.description}</p>
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
            description: formData.get('description') || '',
            created: new Date().toISOString().split('T')[0] // Fecha actual
        };

        plans.push(newPlan);               // Guardar en memoria
        localStorage.setItem('plans', JSON.stringify(plans)); // Guardar en localStorage
        renderPlans();                     // Renderizar todas las tarjetas
        planForm.reset();                  // Limpiar el formulario
    });
});

// Carousel
const container = document.getElementById('cards-container-plans');
const prevBtn = document.querySelector('.carousel-btn.prev-plans');
const nextBtn = document.querySelector('.carousel-btn.next-plans');

let scrollAmount = 0;
const cardWidth = 220; // 200px ancho + 20px gap

nextBtn.addEventListener('click', () => {
    scrollAmount += cardWidth;
    if(scrollAmount > container.scrollWidth - container.clientWidth) {
        scrollAmount = 0; // loop infinito
    }
    container.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= cardWidth;
    if(scrollAmount < 0) {
        scrollAmount = container.scrollWidth - container.clientWidth; // loop infinito
    }
    container.style.transform = `translateX(-${scrollAmount}px)`;
});
