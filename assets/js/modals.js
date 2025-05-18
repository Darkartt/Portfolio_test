export function initModals() {
    const modalHTML = (message) => `
        <div class="cyber-modal">
            <div class="modal-content glitch-effect">
                <span class="close-btn cyber-btn">&times;</span>
                <p>${message}</p>
            </div>
        </div>
    `;

    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-modal]')) {
            const message = e.target.dataset.modal;
            const modal = document.createElement('div');
            modal.innerHTML = modalHTML(message);
            document.body.appendChild(modal);
        }

        if (e.target.closest('.close-btn')) {
            document.querySelector('.cyber-modal').remove();
        }
    });
}