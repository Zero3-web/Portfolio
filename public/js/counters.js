document.addEventListener('DOMContentLoaded', () => {
    const counters = [
        { id: 'age-counter', value: 24 },
        { id: 'studies-counter', value: 1 }, // Representing BYU
        { id: 'experience-counter', value: 1 },
        { id: 'projects-counter', value: 6 }
    ];

    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        let count = 0;
        const interval = setInterval(() => {
            if (count < counter.value) {
                count++;
                element.textContent = count;
            } else {
                clearInterval(interval);
            }
        }, 100); // Slower speed (100ms per increment)
    });
});
