document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('header');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const quoteForm = document.getElementById('quote-form');
    const themeToggle = document.getElementById('theme-toggle');
    const gridCanvas = document.getElementById('grid-bg');
    
    // Mobile Navigation Toggle
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Portfolio Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Theme Toggle Functionality
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.setAttribute('data-theme', themeName);
    }
    
    function toggleTheme() {
        if (localStorage.getItem('theme') === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
    
    // Initialize theme
    (function() {
        if (localStorage.getItem('theme') === 'dark') {
            setTheme('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    })();
    
    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // 3D Grid Background
    if (gridCanvas) {
        const ctx = gridCanvas.getContext('2d');
        let width, height;
        let particles = [];
        
        // Resize handler
        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            gridCanvas.width = width;
            gridCanvas.height = height;
            
            // Recreate particles
            createParticles();
        }
        
        // Create grid particles
        function createParticles() {
            particles = [];
            const particleCount = Math.floor(width * height / 10000);
            
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    z: Math.random() * 1000,
                    size: Math.random() * 2 + 0.5
                });
            }
        }
        
        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Get grid color based on theme
            const isDark = localStorage.getItem('theme') === 'dark';
            const gridColor = isDark ? 'rgba(138, 117, 255, 0.15)' : 'rgba(110, 87, 224, 0.15)';
            const gridHighlight = isDark ? 'rgba(138, 117, 255, 0.4)' : 'rgba(110, 87, 224, 0.4)';
            
            // Draw grid lines
            const gridSize = 50;
            const gridDepth = 1000;
            const perspective = 500;
            
            // Horizontal grid lines
            for (let y = -gridDepth; y < gridDepth; y += gridSize) {
                const y1 = y + (Date.now() * 0.03) % gridSize;
                const scale1 = perspective / (perspective + y1);
                const scale2 = perspective / (perspective + y1 + gridSize);
                
                if (scale1 > 0 && scale1 < 1) {
                    ctx.beginPath();
                    ctx.moveTo(0, height / 2 + y1 * scale1);
                    ctx.lineTo(width, height / 2 + y1 * scale1);
                    ctx.strokeStyle = y1 < 0 ? gridHighlight : gridColor;
                    ctx.lineWidth = scale1 * 1.5;
                    ctx.stroke();
                }
            }
            
            // Vertical grid lines
            for (let x = -gridDepth; x < gridDepth; x += gridSize) {
                const x1 = x + (Date.now() * 0.03) % gridSize;
                const scale = perspective / (perspective + x1);
                
                if (scale > 0 && scale < 1) {
                    ctx.beginPath();
                    ctx.moveTo(width / 2 + x1 * scale, 0);
                    ctx.lineTo(width / 2 + x1 * scale, height);
                    ctx.strokeStyle = x1 < 0 ? gridHighlight : gridColor;
                    ctx.lineWidth = scale * 1.5;
                    ctx.stroke();
                }
            }
            
            // Draw particles
            particles.forEach(particle => {
                particle.z -= 1;
                if (particle.z <= 0) {
                    particle.z = 1000;
                    particle.x = Math.random() * width;
                    particle.y = Math.random() * height;
                }
                
                const scale = perspective / (perspective + particle.z);
                const x = width / 2 + (particle.x - width / 2) * scale;
                const y = height / 2 + (particle.y - height / 2) * scale;
                const size = particle.size * scale;
                
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fillStyle = gridHighlight;
                ctx.fill();
            });
            
            requestAnimationFrame(animate);
        }
        
        // Initialize canvas
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();
    }
    
    // Quote Form Submission with Formspree Integration
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            // Form will be submitted to Formspree
            // No need to prevent default behavior
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const projectType = document.getElementById('project-type').value;
            const message = document.getElementById('message').value.trim();
            
            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            // Validation checks
            if (name.length < 2) {
                alert('Please enter a valid name');
                e.preventDefault();
                return;
            }
            
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                e.preventDefault();
                return;
            }
            
            if (projectType === '') {
                alert('Please select a project type');
                e.preventDefault();
                return;
            }
            
            if (message.length < 10) {
                alert('Please provide more details about your project');
                e.preventDefault();
                return;
            }
            
            // XSS Protection - Sanitize inputs is handled by Formspree
            
            // Form will be submitted to Formspree which will handle the email delivery
            // The page will be redirected to Formspree's thank you page after submission
            
            // We can add a custom success message by listening to the form submission success
            // This is handled by Formspree's redirect or AJAX submission
            console.log('Form validated and ready for Formspree submission');
        });
    }
    
    // Animation for elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .blog-card, .about-image, .about-text');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Add animation class to CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .service-card, .portfolio-item, .blog-card, .about-image, .about-text {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        @keyframes navLinkFade {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .success-message {
            text-align: center;
            padding: 30px;
            animation: fadeIn 0.5s ease;
        }
        
        .success-message i {
            font-size: 3rem;
            color: var(--success-color);
            margin-bottom: 20px;
        }
        
        .success-message h3 {
            margin-bottom: 15px;
            color: var(--primary-color);
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
});
