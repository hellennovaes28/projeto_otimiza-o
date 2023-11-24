const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = 'Mudar Tema';
button.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});
document.body.appendChild(button);

