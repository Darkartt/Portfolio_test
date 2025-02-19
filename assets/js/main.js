document.addEventListener('DOMContentLoaded', () => {
  // Modal functionality
  const modal = document.getElementById('quote-modal');
  const openButtons = document.querySelectorAll('.cta-button, #quote-button');
  const closeButton = document.querySelector('.close-button');

  // Open modal
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Audit details toggle
  document.querySelectorAll('.audit-details').forEach(button => {
    button.addEventListener('click', () => {
      const findings = button.nextElementSibling;
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
      findings.style.display = isExpanded ? 'none' : 'block';
      button.setAttribute('aria-expanded', !isExpanded);
      button.textContent = isExpanded ? 'View Findings' : 'Hide Findings';
    });
  });

  // Smooth scroll for navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Form submission
  document.getElementById('quote-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    alert('Quote request submitted successfully!');
  });
});document.addEventListener('DOMContentLoaded', () => {
  // Modal functionality
  const modal = document.getElementById('quote-modal');
  const openButtons = document.querySelectorAll('.cta-button, #quote-button');
  const closeButton = document.querySelector('.close-button');

  // Open modal
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Audit details toggle
  document.querySelectorAll('.audit-details').forEach(button => {
    button.addEventListener('click', () => {
      const findings = button.nextElementSibling;
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
      findings.style.display = isExpanded ? 'none' : 'block';
      button.setAttribute('aria-expanded', !isExpanded);
      button.textContent = isExpanded ? 'View Findings' : 'Hide Findings';
    });
  });

  // Smooth scroll for navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Form submission
  document.getElementById('quote-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    alert('Quote request submitted successfully!');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Terminal typing effect
  const terminalText = document.querySelector('.typing-text');
  const phrases = [
    "INITIALIZING_SECURITY_PROTOCOLS...",
    "ANALYZING_SMART_CONTRACTS...",
    "CHECKING_VULNERABILITIES...",
    "SYSTEM_SECURE"
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeTerminal() {
    const currentPhrase = phrases[phraseIndex];
    
    if (!isDeleting) {
      terminalText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeTerminal, 2000);
        return;
      }
    } else {
      terminalText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    
    setTimeout(typeTerminal, isDeleting ? 50 : 100);
  }

  typeTerminal();

  // Cyber button hover effects
  document.querySelectorAll('.cyber-button').forEach(button => {
    button.addEventListener('mousemove', e => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    });
  });

  // Rest of your existing modal and interaction code...
});