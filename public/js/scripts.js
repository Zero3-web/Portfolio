document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    service_id: 'your_service_id',
                    template_id: 'your_template_id',
                    user_id: 'your_user_id',
                    template_params: data,
                }),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
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
