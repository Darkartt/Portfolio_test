// Optimized Particle System
class ParticleSystem {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.particles = [];
        this.maxParticles = 100;
        this.animationFrame = null;
    }

    createParticle(x, y) {
        if (this.particles.length >= this.maxParticles) return;

        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        this.container.appendChild(particle);

        this.particles.push({
            element: particle,
            x: Math.random() * window.innerWidth,
            y: -10,
            speed: Math.random() * 3 + 1
        });

        this.animate();
    }

    animate() {
        this.particles.forEach((particle, index) => {
            particle.y += particle.speed;
            particle.element.style.top = `${particle.y}px`;

            if (particle.y > window.innerHeight) {
                particle.element.remove();
                this.particles.splice(index, 1);
            }
        });

        this.animationFrame = requestAnimationFrame(() => this.animate());
    }

    initHoverEffect(selector) {
        document.querySelectorAll(selector).forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                const rect = e.target.getBoundingClientRect();
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => this.createParticle(
                        rect.left + rect.width / 2,
                        rect.top + rect.height / 2
                    ), i * 50);
                }
            });
        });
    }
}

// Initialize particle system
const particles = new ParticleSystem('particle-container');
particles.initHoverEffect('button, .social-links a, .cta-button');