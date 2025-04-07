document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validación básica
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Mostrar spinner de carga
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        setTimeout(() => {
            alert('¡Gracias por tu mensaje!');
            form.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar';
        }, 2000); // Simular un retraso de envío
    });

    // Example: Dynamically load projects with alt attributes for images
    const projects = [
        { title: 'Project 1', description: 'Description of project 1', imageAlt: 'Image of Project 1' },
        { title: 'Project 2', description: 'Description of project 2', imageAlt: 'Image of Project 2' }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <img src="path/to/image.jpg" alt="${project.imageAlt}">
        `;
        projectList.appendChild(projectDiv);
    });

    // Set the current year dynamically
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    } else {
        console.error('Element with id "current-year" not found.');
    }
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Distancia desplazada desde la parte superior
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Altura total desplazable
    const scrollPercent = (scrollTop / docHeight) * 100; // Porcentaje de desplazamiento
    document.getElementById('progress-bar').style.width = `${scrollPercent}%`; // Actualiza el ancho de la barra
});
