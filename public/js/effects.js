// Typewriter effect
const typewriterText = document.getElementById('typewriter-text');
if (typewriterText) {
    const text = typewriterText.textContent;
    typewriterText.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        }
    }

    type();
}

// Scroll-to-top button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show'); // Show button when scrolled down
    } else {
        scrollToTopButton.classList.remove('show'); // Hide button when near the top
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});

// Toggle 'scrolled' class on navigation bar
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled'); // Add the 'scrolled' class when scrolling down
    } else {
        nav.classList.remove('scrolled'); // Remove the 'scrolled' class when at the top
    }
});

// Fade-in effect on scroll with ARIA attributes
const fadeInElements = document.querySelectorAll('.fade-in');

const handleScroll = () => {
    fadeInElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
            el.setAttribute('aria-hidden', 'false'); // Element is now visible
        } else {
            el.setAttribute('aria-hidden', 'true'); // Element is hidden
        }
    });
};

window.addEventListener('scroll', handleScroll);
handleScroll(); // Trigger on page load
