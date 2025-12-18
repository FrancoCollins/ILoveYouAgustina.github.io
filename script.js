/* Body */
body {
    font-family: 'Georgia', serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #ffe6f0, #ffd1dc);
    color: #d6006c;
    overflow-x: hidden; /* previene scroll horizontal */
}

/* Navbar */
.navbar {
    width: 100%;
    padding: 10px 20px;
    background-color: rgba(214, 0, 108, 0.95);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
}

/* Lista del menú lateral */
.nav-list {
    margin-top: 53px;
    position: fixed;        /* ahora cubre todo el viewport */
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;          /* altura completa de la pantalla */
    background-color: #ffd1dc; /* rosa clarito */
    list-style: none;
    display: flex;
    flex-direction: column;
    z-index: 2000; /* menor que el botón hamburguesa */
    transform: translateX(-200vw); /* fuera de la pantalla */
    transition: transform 0.3s ease;
}

.nav-list li {
    margin: 20px 0;
    padding-left: 10px;
}

.nav-list li a {
    color: #d6006c;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: bold;
}

.nav-list.active {
    transform: translateX(0); /* entra al viewport */

}

/* Botón hamburguesa */
.menu-toggle {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    z-index: 1001;
    overflow: visible; /* permitir que las barras rotadas no se corten */
}


.bar {
    height: 3px;
    width: 25px;
    background-color: white;
    margin: 4px 0;
    transition: 0.3s;
}

.menu-toggle.active .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}
.menu-toggle.active .bar:nth-child(2) {
    opacity: 0;
}
.menu-toggle.active .bar:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
}


/* Sección Nosotros */
section#nosotros {
    padding: 100px 20px 50px;
    text-align: center;
}

/* Párrafo fadeIn */
section#nosotros p {
    opacity: 0;
    animation: fadeIn 3s ease-in forwards;
}

/* Corazones */
.heart {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #d6006c;
    transform: rotate(45deg);
}

.heart::before,
.heart::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #d6006c;
    border-radius: 50%;
}

.heart::before { top: -10px; left: 0; }
.heart::after { left: 10px; top: 0; }

@keyframes fadeIn {
    to { opacity: 1; }
}

@keyframes twinkle {
    from { opacity: 0.3; }
    to { opacity: 1; }
}

/* Botón música */
#play-music {
    margin-top: 20px;
    font-size: 1.2em;
    padding: 10px 20px;
    border: none;
    background-color: #d6006c;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}
