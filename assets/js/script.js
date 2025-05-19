console.log('script.js loaded'); // Add this line to confirm script execution

class Portfolio {
    constructor() {
      this.initMobileMenu();
      this.initScrollEffects();
      this.initScrollInteractions(); /* Initialize new scroll interactions */
      this.initTerminalAnimation(); /* Initialize terminal animation */
      this.initParticles();
      this.initFormValidation();
    }
  
    initMobileMenu() {
      const hamburger = document.querySelector('.nav__burger'); // Corrected selector
      const navMenu = document.querySelector('.nav__menu'); // Corrected selector
  
      if (hamburger && navMenu) { // Add check to ensure elements are found
        hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          navMenu.classList.toggle('active');
        });
      } else {
        console.error('Mobile menu elements not found.'); // Log error if elements are missing
      }
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
  
    /* New method for scroll interaction patterns */
    initScrollInteractions() {
      // 1. 3D Parallax Matrix (JS Fallback/Enhancement)
      const parallaxContainers = document.querySelectorAll('.parallax-3d-container');

      if (!('animationTimeline' in document.documentElement.style)) {
        // Fallback for browsers that don't support CSS Scroll Timeline
        const parallaxObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Simple JS parallax effect based on scroll position
              const layers = entry.target.querySelectorAll('.parallax-3d-layer');
              layers.forEach(layer => {
                const speed = parseFloat(layer.dataset.speed) || 0.1; // Get speed from data attribute
                const translateY = (entry.boundingClientRect.top - window.innerHeight) * speed;
                layer.style.transform = `translateY(${translateY}px) translateZ(${translateY * -0.5}px)`; // Basic 3D feel
              });
            } else {
              // Reset transform when not intersecting
              const layers = entry.target.querySelectorAll('.parallax-3d-layer');
              layers.forEach(layer => {
                layer.style.transform = 'translateY(0) translateZ(0)';
              });
            }
          });
        }, { threshold: 0, rootMargin: '0px 0px -50px 0px' }); // Adjust rootMargin as needed

        parallaxContainers.forEach(container => {
          parallaxObserver.observe(container);
        });

        // Optional: Add a scroll listener for smoother updates, but be mindful of performance
        // window.addEventListener('scroll', () => { ... update layer transforms ... });
        // Consider throttling/debouncing scroll events if using a scroll listener.
      }

      // 2. Velocity-Based Blur (JS Fallback/Enhancement)
      const blurElements = document.querySelectorAll('.scroll-blur-element');

      if (!('animationTimeline' in document.documentElement.style)) {
         // Fallback: Apply blur based on element's position in viewport
         const blurObserver = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
             const element = entry.target;
             if (entry.isIntersecting) {
               const intersectionRatio = entry.intersectionRatio;
               // Apply blur based on how much of the element is visible
               // Adjust the blur calculation for desired effect
               const blurAmount = Math.max(0, (0.5 - Math.abs(intersectionRatio - 0.5)) * 10); // Max blur at center
               element.style.filter = `blur(${blurAmount}px)`;
             } else {
               element.style.filter = 'blur(0px)'; // Remove blur when not intersecting
             }
           });
         }, { threshold: Array.from({length: 50}, (_, i) => i / 50) }); // Observe at multiple thresholds

        blurElements.forEach(el => {
           blurObserver.observe(el);
         });
      }


      // 3. Dynamic Gradient Shadows (Primarily CSS/Tailwind)
      // No specific JS needed unless for a complex fallback or interaction
      // Ensure Tailwind is configured to allow arbitrary values for shadow utility.

      // Reduced Motion Check
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        // Disable JS animations if reduced motion is preferred
        // This might involve removing event listeners or not initializing certain effects
      console.log('Reduced motion is preferred. Disabling some JS animations.');
      }
    }

    /* New method for terminal animation */
    initTerminalAnimation() {
      const terminalOutput = document.querySelector('.terminal__output-text'); // Assuming this is the output element
      console.log('Terminal output element:', terminalOutput); // Log the element
      if (!terminalOutput) {
        console.error('Terminal output element not found. Animation aborted.'); // More specific error message
        return;
      }

      // Clear any existing hardcoded content with a slight delay
      setTimeout(() => {
        terminalOutput.textContent = '';
        console.log('Terminal content cleared.'); // Log when content is cleared
      }, 50); // 50ms delay

      const messageSequences = [
        // Simulated Security Scans
        [
          "> Connecting to Ethereum mainnet...",
          "> Loading contract: 0xABC123...",
          "> Running static analysis...",
          "> [INFO] Detected Solidity version: 0.8.19",
          "> [OK] No reentrancy vulnerabilities found.",
          "> [WARN] Unchecked external call at line 152.",
          "> [INFO] Gas optimization: potential savings at line 87.",
          "> [OK] No integer overflows detected.",
          "> [ALERT] Access control issue: function 'withdrawAll' is public.",
          "> Audit complete. 2 issues found. Report generated."
        ],
        // Security Tips or Facts
        [
          "> Tip: Always use OpenZeppelin's libraries for access control.",
          "> Fact: 34% of DeFi hacks in 2024 were due to flash loan exploits.",
          "> Tip: Never hardcode private keys in your contracts."
        ],
        // Notable Vulnerabilities Detected (Anonymized)
        [
          "> Analyzing DeFi Protocol...",
          "> [HIGH] Unprotected upgradeable proxy function detected.",
          "> [MEDIUM] Inconsistent event emission on state change.",
          "> [LOW] Gas inefficiency in loop at line 210."
        ],
        // Simulated Bug Bounty Submissions
        [
          "> Submitting vulnerability report...",
          "> Target: Pear Protocol",
          "> Severity: HIGH",
          "> Description: Unchecked external call in 'claimReward'",
          "> Status: Submitted to project team."
        ],
        // Easter Eggs & Fun
        [
          "> Scanning for rug pulls...",
          "> [OK] No rugs found. You’re safe... for now."
        ],
        // Startup Sequence
        [
          "> Initializing darknet node...",
          "> Loading threat intelligence feeds...",
          "> Deploying honeypots...",
          "> Ready for audit."
        ],
        // Live Security News Headlines (Static for now)
        [
          "> [NEWS] Major DeFi protocol suffers $20M exploit due to oracle manipulation.",
          "> [NEWS] New reentrancy attack vector discovered in cross-chain bridges."
        ]
      ];

      let sequenceIndex = 0;
      let lineIndex = 0;
      let charIndex = 0;
      let typingSpeed = 30; // milliseconds per character
      let lineDelay = 800; // milliseconds between lines
      let sequenceDelay = 3000; // milliseconds between sequences

      function type() {
        console.log(`Typing: Sequence ${sequenceIndex}, Line ${lineIndex}, Char ${charIndex}`); // Log typing progress
        if (sequenceIndex < messageSequences.length) {
          const currentSequence = messageSequences[sequenceIndex];
          if (lineIndex < currentSequence.length) {
            const currentLine = currentSequence[lineIndex];
            if (charIndex < currentLine.length) {
              // Append character
              terminalOutput.textContent += currentLine.charAt(charIndex);
              charIndex++;
              setTimeout(type, typingSpeed);
            } else {
              // End of line, add newline and move to next line
              terminalOutput.textContent += '\n';
              lineIndex++;
              charIndex = 0;
              setTimeout(type, lineDelay);
            }
          } else {
            // End of sequence, clear terminal and move to next sequence
            setTimeout(() => {
              terminalOutput.textContent = ''; // Clear terminal
              sequenceIndex++;
              lineIndex = 0;
              // Loop back to the start if all sequences are shown
              if (sequenceIndex >= messageSequences.length) {
                sequenceIndex = 0;
              }
              type(); // Start the next sequence
            }, sequenceDelay);
          }
        } else {
          // All sequences shown, loop back to the first sequence
          sequenceIndex = 0;
          lineIndex = 0;
          charIndex = 0;
          setTimeout(type, sequenceDelay); // Wait before starting the loop again
        }
      }

      // Start the typing animation
      type();
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

  /* Ripple effect for buttons */
  document.querySelectorAll('.button').forEach(button => {
    button.style.position = 'relative'; // Needed for absolute positioning of ripple
    button.style.overflow = 'hidden'; // Hide ripple outside button bounds

    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const size = Math.max(button.offsetWidth, button.offsetHeight);
      const x = e.clientX - button.getBoundingClientRect().left - size / 2;
      const y = e.clientY - button.getBoundingClientRect().top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('ripple'); // Add ripple class for styling and animation

      // Remove any existing ripples to prevent multiple ripples on rapid clicks
      const existingRipple = button.querySelector('.ripple');
      if (existingRipple) {
        existingRipple.remove();
      }

      button.appendChild(ripple);

      // Remove ripple after animation ends
      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    });
  });
