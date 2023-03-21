const inputEl = document.querySelector('#name-input');
const nameEL = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    nameEL.textContent = event.currentTarget.value.trim();

    if (nameEL.textContent.length === 0) {
        nameEL.textContent = 'Anonymous';
    }
}