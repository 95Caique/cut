
// Parallaxx effect for hero section
function setupParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Mobile menu toggle (for future implementation)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Contact form handling (for future implementation)
function handleContactForm(event) {
    event.preventDefault();
    // Form handling logic here
    console.log('Contact form submitted');
}

document.addEventListener('DOMContentLoaded', function () {
    const imgs = document.querySelectorAll('.carousel-img');
    const dots = document.querySelectorAll('.dot');
    let idx = 0;

    function showImg(i) {
        imgs.forEach((img, j) => img.classList.toggle('active', j === i));
        dots.forEach((dot, j) => dot.classList.toggle('active', j === i));
    }

    function startAutoSlide() {
        setInterval(() => {
            idx = (idx + 1) % imgs.length;
            showImg(idx);
        }, 3000); // troca a cada 3 segundos
    }

    // Clique nas bolinhas (opcional)
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            idx = i;
            showImg(idx);
        });
    });

    showImg(idx);
    startAutoSlide();
});
