
const donateBtn = document.querySelector('.cards__button');//Donate button
const inputs =  document.querySelectorAll('input');
const popupWrapper = document.querySelector('.popup-wrapper');
const exitButton = document.querySelector('.donat__close');
const cards = document.querySelector('.cards');

popupWrapper.addEventListener('click', (event) => {
    if (event.target.className === 'popup-wrapper popup-cards') {
        window.location.replace('../landing/landing.html');
    }
});

exitButton.addEventListener('click', () => {
    window.location.replace('../landing/landing.html');
});

cards.addEventListener('change', changeInput);

donateBtn.addEventListener('click', submitDonate);

function validateInput(regex, input, maxValue) {
    if (maxValue !== undefined && maxValue < Number(input.value)) {
       input.setAttribute('style', 'border: 2px solid #9b1212;');
       return;
    }
    if (regex.test(input.value)) {
        input.setAttribute('style', 'border: 2px solid #5aa734;');
        input.dataset.validated = 'true';
    } else {
        input.setAttribute('style', 'border: 2px solid #9b1212;');
        input.dataset.validated = 'false';
    }
}
function changeInput(event) {
    const activeElem = event.target;
    const regexCardNumber = /^\d{16}$/;
    const regexYy = /^\d{2}$/;
    const regexMm = /^\d{2}$/;
    const maxMonth = 12;
    const regexCardHolder = /^[a-zA-Z]+$/;
    const regexCvc = /^\d{3}$/;

   if (activeElem.matches('.card-number')) {
       validateInput(regexCardNumber, activeElem);
       return;
    }
    if (activeElem.matches('.mm')) {
        validateInput(regexMm, activeElem, maxMonth);
        return;
    }
    if (activeElem.matches('.yy')) {
        validateInput(regexYy, activeElem);
        return;
    }
    if (activeElem.matches('.mm')) {
        validateInput(regexMm, activeElem);
        return;
    }
    if (activeElem.matches('.cardholder-name')) {
        validateInput(regexCardHolder , activeElem);
        return;
    }
    if (activeElem.matches('.cvc')) {
        validateInput(regexCvc, activeElem);
        return;
    }
}

function submitDonate() {
    inputs.forEach((el) => {
        if (el.dataset.validated === 'false') {
            alert('Enter all <<inputs>>');
            throw new Error('Enter all <<inputs>>');
        }
    });
    alert('Thank you for your donation!');
    window.location.replace('../landing/landing.html');
}