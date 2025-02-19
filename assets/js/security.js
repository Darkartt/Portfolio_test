import CryptoJS from 'crypto-js';

export class SecurityManager {
  static initEncryptedComms() {
    return new Promise((resolve) => {
      document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('contact-form');
        
        if (!form) {
          console.warn('Contact form element not found');
          return resolve(false);
        }

        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          
          try {
            const encrypted = {
              email: CryptoJS.AES.encrypt(form.email.value, 'SECRET_KEY').toString(),
              message: CryptoJS.AES.encrypt(form.message.value, 'SECRET_KEY').toString()
            };
            
            await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(encrypted)
            });
            
            this.showHUD('Message securely transmitted');
          } catch (error) {
            this.showHUD('Secure transmission failed', true);
          }
        });
        
        resolve(true);
      });
    });
  }

  static showHUD(message, isError = false) {
    const hud = document.createElement('div');
    hud.className = `hud-notification ${isError ? 'error' : ''}`;
    hud.textContent = message;
    document.body.appendChild(hud);
    setTimeout(() => hud.remove(), 3000);
  }
}