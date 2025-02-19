export class SecurityManager {
  static initEncryptedComms() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const encryptedData = {
        name: CryptoJS.AES.encrypt(form.name.value, 'SECURE_KEY').toString(),
        email: CryptoJS.AES.encrypt(form.email.value, 'SECURE_KEY').toString(),
        message: CryptoJS.AES.encrypt(form.message.value, 'SECURE_KEY').toString()
      };

      try {
        await fetch('/api/secure-contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(encryptedData)
        });
        this.showHUDNotification('Secure transmission successful');
      } catch (error) {
        this.showHUDError('Encrypted channel failure');
      }
    });
  }

  static showHUDNotification(message) {
    const hud = document.createElement('div');
    hud.className = 'cyber-hud';
    hud.innerHTML = `
      <span class="hud-icon">🔒</span>
      <span class="hud-text">${message}</span>
    `;
    document.body.appendChild(hud);
    setTimeout(() => hud.remove(), 3000);
  }
}