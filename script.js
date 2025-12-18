// Animar los corazones flotando
const hearts = document.querySelectorAll('.heart');

hearts.forEach((heart, index) => {
    const delay = index; // cada corazón inicia con un retraso diferente
    heart.style.animation = `float 5s linear ${delay}s infinite`;
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
    0% { transform: translateY(0) rotate(45deg); opacity: 1; }
    100% { transform: translateY(-600px) rotate(45deg); opacity: 0; }
}`;
document.head.appendChild(style);
