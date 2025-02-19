import { BlockchainVisualizer } from './three/blockchain-visualization.js';
import { SecurityManager } from './security.js';

// Initialize Security (if applicable)
SecurityManager.initEncryptedComms();

class Portfolio {
    constructor() {
        this.initCyberEffects();
        this.init3DVisualization();
    }

    initCyberEffects() {
        document.querySelectorAll('.service-card, .audit-card').forEach(card => {
            card.addEventListener('mousemove', this.handleCardMove);
            card.addEventListener('mouseleave', this.handleCardLeave);
        });
    }

    handleCardMove(e) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.target.style.transform = `
            perspective(1000px)
            rotateX(${(y - rect.height / 2) / 8}deg)
            rotateY(${-(x - rect.width / 2) / 8}deg)
        `;
    }

    handleCardLeave(e) {
        e.target.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }

    init3DVisualization() {
        const visualizer = new BlockchainVisualizer({
            container: document.getElementById('blockchain-canvas'),
            chain: 'ethereum'
        });
        visualizer.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded'); // Debug: Confirm DOM is loaded
    new Portfolio();

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('is-active');
        });
    } else {
        console.error('Hamburger or nav menu not found');
    }

    // Audit Card Interactions
    document.querySelectorAll('.audit-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.audit-card');
            const findings = card.querySelector('.audit-findings');
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
            findings.style.display = isExpanded ? 'none' : 'block';
            card.classList.toggle('expanded');
        });
    });

    // Modal Handling
    const modal = document.getElementById('quote-modal');
    if (!modal) {
        console.error('Modal element not found');
        return;
    }

    const openModal = () => {
        console.log('Opening modal'); // Debug: Confirm function runs
        modal.style.display = 'flex';
    };

    const closeModal = () => {
        console.log('Closing modal'); // Debug: Confirm function runs
        modal.style.display = 'none';
    };

    const ctaButtons = document.querySelectorAll('.cta-button');
    if (ctaButtons.length === 0) {
        console.error('No CTA buttons found');
    } else {
        ctaButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                console.log('CTA button clicked'); // Debug: Confirm click
                openModal();
            });
        });
    }

    const closeButton = document.querySelector('#quote-modal .close-button');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    } else {
        console.error('Close button not found');
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Form Validation
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            const formData = new FormData(e.target);
            window.location.href = `mailto:GTI9377@gmail.com?subject=Quote Request&body=${formDataToBody(formData)}`;
            closeModal();
        });
    } else {
        console.error('Quote form not found');
    }

    // Helper functions
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const formDataToBody = (formData) => {
        return Array.from(formData.entries())
            .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
            .join('&');
    };

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });
    document.querySelectorAll('.typing-text, .audit-card').forEach(el => observer.observe(el));
});