class Portfolio {
    constructor() {
      this.initMobileMenu();
      this.initScrollEffects();
      this.initParticles();
      this.initFormValidation();
    }
  
    initMobileMenu() {
      const hamburger = document.querySelector('.hamburger');
      const navMenu = document.querySelector('.nav-menu');
  
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    }
  
    initScrollEffects() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);
  
      document.querySelectorAll('.service-card, .audit-card').forEach(el => {
        observer.observe(el);
      });
    }
  
    initParticles() {
      const particleContainer = document.getElementById('particle-container');
      const particleCount = 100;
  
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        particleContainer.appendChild(particle);
      }
    }
  
    initFormValidation() {
      const form = document.getElementById('quote-form');
      
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (this.validateForm()) {
          this.submitForm();
        }
      });
    }
  
    validateForm() {
      const email = document.getElementById('email').value;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    submitForm() {
      const formData = new FormData(document.getElementById('quote-form'));
      window.location.href = `mailto:your@email.com?subject=Quote Request&body=${encodeURIComponent(formData)}`;
    }
  }
  
  // Initialize portfolio when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
  });