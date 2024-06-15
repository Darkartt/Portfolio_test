// Tooltips
const auditEntries = document.querySelectorAll('.audit-entry');

auditEntries.forEach(entry => {
  entry.addEventListener('mouseover', () => {
    const vulns = JSON.parse(entry.getAttribute('data-vulns'));
    entry.setAttribute('data-vulns', `High: ${vulns.high}\nMedium: ${vulns.medium}\nLow: ${vulns.low}\nCritical: ${vulns.critical}`); 
  });

  entry.addEventListener('mouseout', () => {
    const vulns = JSON.parse(entry.getAttribute('data-vulns'));
    entry.setAttribute('data-vulns', JSON.stringify(vulns)); 
  });
});

// Modal and Contact Form Handling
const quoteButton = document.getElementById('quote-button');
const quoteModal = document.getElementById('quote-modal');
const closeButton = document.querySelector('.close-button');
const quoteForm = document.getElementById('quote-form');
const yourEmail = 'GTI9377@gmail.com';  

quoteButton.addEventListener('click', () => {
  quoteModal.style.display = 'block';
  document.body.classList.add('modal-open');
});

closeButton.addEventListener('click', () => {
  quoteModal.style.display = 'none';
  document.body.classList.remove('modal-open');
});

window.onclick = function(event) {
  if (event.target == quoteModal) {
    quoteModal.style.display = "none";
    document.body.classList.remove('modal-open');
  }
};

// Quote form handling with validation
quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(quoteForm);

    // Basic validation
    const requiredFields = ['first-name', 'last-name', 'email'];
    let isValid = true;

    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        const error = input.nextElementSibling;
        if (input.value.trim() === '') {
            error.textContent = 'This field is required.';
            error.style.display = 'block';
            isValid = false;
        } else if (field === 'email' && !validateEmail(input.value.trim())) {
            error.textContent = 'Please enter a valid email address.';
            error.style.display = 'block';
            isValid = false;
        } else {
            error.style.display = 'none';
        }
    });

    if (isValid) {
        // Simple email construction 
        const subject = `Quote Request from ${formData.get('first-name')} ${formData.get('last-name')} (${formData.get('company')})`;
        const body = `Project Name: ${formData.get('project-name')}\n\nProject Description:\n${formData.get('project-description')}\n\nBudget (USD): ${formData.get('budget')}\n\nTimeline (Weeks): ${formData.get('timeline')}`;

        const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink; // Open email client

        alert("Your quote request has been submitted. We'll get back to you soon!");
        quoteForm.reset();
        quoteModal.style.display = "none";
        document.body.classList.remove('modal-open');
    }
});

// Email validation function
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

// Black Hat Animation (Falling Numbers)
const animationContainer = document.getElementById('animation-container');

function createAnimatedNumber() {
  const number = document.createElement('div');
  number.classList.add('animated-number');

  // Generate random bytecode-like string
  const bytecode = '0x' + Array.from({ length: 6 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  number.textContent = bytecode;

  // Set starting position at a random X coordinate
  number.style.left = `${Math.random() * 100}vw`;
  number.style.top = '-10vh'; // Start above the viewport

  // Ending position (falls off the bottom of the viewport)
  const endTop = `110vh`; 
  
  number.style.fontSize = `${Math.random() * 20 + 10}px`; // Random font size

  // Adjust animation duration for a slower fall
  number.style.animationDuration = `${Math.random() * 8 + 4}s`; 
  number.style.animationDelay = `${Math.random() * 2}s`; 
  number.style.animation = `moveDown ${number.style.animationDuration} ${number.style.animationDelay} forwards`;

  animationContainer.appendChild(number);

  // Remove after animation completes
  setTimeout(() => {
    number.remove();
  }, (parseFloat(number.style.animationDuration) + parseFloat(number.style.animationDelay)) * 1000);
}

setInterval(createAnimatedNumber, 900); 

// Particle Effects (Corrected)
const particleContainer = document.getElementById('particle-container');
const buttons = document.querySelectorAll('footer a'); 

buttons.forEach(button => {
  button.addEventListener('mouseover', (event) => {
    const buttonRect = button.getBoundingClientRect();
    const x = buttonRect.left + buttonRect.width / 2; // Center of the button
    const y = buttonRect.top + buttonRect.height / 2; // Center of the button

    for (let i = 0; i < 10; i++) { 
      createParticle(x, y);
    }
  });
});

function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particleContainer.appendChild(particle);

  // Set initial position and styles
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  const size = Math.random() * 6 + 4; // Random size between 4px and 10px
  const speed = Math.random() * 1 + 0.5; // Random speed between 0.5s and 1.5s
  const directionX = (Math.random() - 0.5) * 2; // Random horizontal direction
  const directionY = (Math.random() - 0.5) * 2; // Random vertical direction

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Create a keyframes animation for particle movement
  particle.style.animation = `moveParticle ${speed}s ease-out forwards`;

  setTimeout(() => {
    particle.remove(); // Remove the particle after animation completes
  }, speed * 1000); // Remove after 'speed' seconds

  // Define the moveParticle animation in CSS
  document.styleSheets[0].insertRule(`
    @keyframes moveParticle {
      to {
        transform: translate(${x + 100 * directionX}px, ${y + 100 * directionY}px);
        opacity: 0;
      }
    }
  `);
}
