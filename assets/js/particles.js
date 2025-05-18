// assets/js/particles.js
export function initParticles() {
    particlesJS('particles-container', {
        particles: {
            number: { value: 80 },
            color: { value: '#00ff00' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 2 },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out'
            }
        },
        interactivity: {
            detect_on: 'window',
            events: {
                onclick: { enable: true, mode: 'push' }, // Changed to single mode 'push'
                resize: true
            },
            modes: {
                push: { particles_nb: 2 }, // Add 2 particles on click
                repulse: { distance: 100 }  // Repulse config remains, but not active on click
            }
        },
        retina_detect: true
    });
}
