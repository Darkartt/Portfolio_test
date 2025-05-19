import { initBlockchainVisualization } from './three/blockchain-visualization.js';
import { initParticles } from './particles.js';
import { initSecurityFeatures } from './security.js';
import { initModals } from './modals.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles
    initParticles();
    
    // Initialize blockchain visualization
    const cleanupThree = initBlockchainVisualization();

    // Initialize other modules
    initModals();
    initSecurityFeatures();

    // Scroll Animations
    const sectionsToAnimate = document.querySelectorAll('.section-entry');
    if (sectionsToAnimate.length > 0) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-entry--visible');
                    // Optional: unobserve after animation to save resources if animation is one-time
                    // observer.unobserve(entry.target);
                } else {
                    // Remove class if you want animation to re-trigger on scroll up then down
                    entry.target.classList.remove('section-entry--visible');
                }
            });
        }, {
            root: null, // relative to document viewport
            rootMargin: '0px',
            threshold: 0.1 // 10% of the element is visible
        });

        sectionsToAnimate.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // Cleanup
    window.addEventListener('beforeunload', () => {
        if (typeof cleanupThree === 'function') {
            cleanupThree();
        }
        const loaderElement = document.querySelector('.loader');
        if (loaderElement) {
            loaderElement.style.display = 'block';
        }
    });
});
