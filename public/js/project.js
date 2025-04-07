document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    const projects = {
        1: {
            title: 'Proyecto 1',
            description: 'Este proyecto trata sobre el desarrollo de una aplicación web moderna.',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            link: 'https://github.com/tuusuario/proyecto1'
        },
        2: {
            title: 'Proyecto 2',
            description: 'Este proyecto trata sobre la creación de un sistema de gestión de tareas.',
            technologies: ['React', 'Node.js', 'MongoDB'],
            link: 'https://github.com/tuusuario/proyecto2'
        },
        3: {
            title: 'Proyecto 3',
            description: 'Este proyecto trata sobre el diseño de una página web responsiva.',
            technologies: ['Bootstrap', 'Sass', 'JavaScript'],
            link: 'https://github.com/tuusuario/proyecto3'
        },
        4: {
            title: 'Proyecto 4',
            description: 'Este proyecto trata sobre la implementación de un sistema de autenticación.',
            technologies: ['Express', 'JWT', 'MongoDB'],
            link: 'https://github.com/tuusuario/proyecto4'
        },
        5: {
            title: 'Proyecto 5',
            description: 'Este proyecto trata sobre la creación de un portafolio interactivo.',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            link: 'https://github.com/tuusuario/proyecto5'
        },
        6: {
            title: 'Proyecto 6',
            description: 'Este proyecto trata sobre el desarrollo de una API RESTful.',
            technologies: ['Node.js', 'Express', 'PostgreSQL'],
            link: 'https://github.com/tuusuario/proyecto6'
        }
    };

    const project = projects[projectId];
    if (project) {
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-description').textContent = project.description;
        const techList = document.getElementById('project-technologies');
        project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            techList.appendChild(li);
        });
        document.getElementById('project-link').href = project.link;
    } else {
        document.body.innerHTML = '<h1>Proyecto no encontrado</h1>';
    }
});
