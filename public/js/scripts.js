document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });

    // Example: Dynamically load projects
    const projects = [
        { title: 'Project 1', description: 'Description of project 1' },
        { title: 'Project 2', description: 'Description of project 2' }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
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
