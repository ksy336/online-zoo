const gap = 20;
const carousel = document.querySelector(".animal-cards-slider"),
    content = document.querySelector(".animal-cards-slider-grid"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});
let width = carousel.offsetWidth;
window.addEventListener("resize", e => width = carousel.offsetWidth);



/*how it works carousel*/

const state = {};
const carouselList = document.querySelector('.main__slider');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
    var newActive = event.target;
    var isItem = newActive.closest('.carousel__item');

    if (!isItem || newActive.classList.contains('carousel__item_active')) {
        return;
    };

    update(newActive);
});

const update = function(newActive) {
    const newActivePos = newActive.dataset.pos;

    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first = elems.find((elem) => elem.dataset.pos == -2);
    const last = elems.find((elem) => elem.dataset.pos == 2);

    current.classList.remove('carousel__item_active');

    [current, prev, next, first, last].forEach(item => {
        var itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos)
    });
};

const getPos = function (current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
        return -current
    }

    return diff;
};


/*donate popup */
const bttn = document.querySelector('.button__footer');
const popupWrapper = document.querySelector('.popup-donate');
const donatePopup = document.querySelector('.donate-popup');
const exitButton = document.querySelector('.donat__close');
const nextButton = document.querySelector('.next-button');

bttn.addEventListener('click', showPopup);

popupWrapper.addEventListener('click',(event) => {
    if (event.target.className === "popup-wrapper popup-donate") {
        popupClose();
    }
});
exitButton.addEventListener('click', () => {
    popupClose();
});

function showPopup() {
    popupWrapper.style.display = 'flex';
    donatePopup.style.display = 'block';
}
function popupClose() {
    popupWrapper.style.display = 'none';
    donatePopup.style.display = 'none';
}

/*Validate*/
const inputField = document.querySelector('.donate-form__amount');
nextButton.addEventListener('click', submitDonate);
inputField.addEventListener('change', changeDataInput);

function validateData(regex, input) {
    if (regex.test(input.value) && Number(input.value) > 0) {
        input.dataset.validated = true;
        input.setAttribute('style', 'border: 2px solid #5aa734;');
    } else {
        input.dataset.validated = false;
        input.setAttribute('style', 'border: 2px solid #9b1212;');
    }
}
function changeDataInput (event) {
    const regexCardNumber = /^\d{1,4}$/;
    validateData(regexCardNumber, event.target);
}
function submitDonate(event) {
     if (inputField.dataset.validated === false) {
         alert('Enter amount');
        throw new Error('Enter all <<inputs>>');
     }
    window.location.replace('../cards/cards.html');
}

