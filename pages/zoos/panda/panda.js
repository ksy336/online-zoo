const button = document.querySelectorAll('.grid-cell ');
const article = document.querySelectorAll('.cell-button__button');


const infoClickHandler = (e) => {
    e.target.closest('.grid-cell').classList.toggle('open');


};
for (let btn of button) {
    btn.addEventListener('click', (e) => infoClickHandler(e));
};



/* animal carousel*/

const gap = 20;
const carousel = document.getElementById('carousel'),
    content = document.querySelector('.video'),
    typeTextElement = document.getElementById('type-text'),
    next = document.getElementById('next'),
    prev = document.getElementById('prev'),
    switchButton = document.getElementById('switch-type');

let slideType = 'all'; // all or one
let slideIndex = 0;
let slideCoefficient = 5;

switchButton.addEventListener('click', () => {
    typeTextElement.innerText = slideType;
    if (slideType === 'all') {
        slideType = 'one';
    } else {
        slideType = 'all';
    }
});

let width = carousel.offsetWidth;
let imgWidth = document.querySelector('.video').offsetWidth;
window.addEventListener('resize', (e) => {
    width = carousel.offsetWidth;
    imgWidth = document.querySelector('.video').offsetWidth;
});

next.addEventListener('click', e => {
    delayAutoSliding();

    slideIndex += slideType === 'all' ? slideCoefficient : 1;

    carousel.scrollTo((imgWidth + gap) * slideIndex, 0);
    if (slideIndex > 0) {
        prev.style.display = 'flex';
    }
    if (slideIndex >= 15) {
        next.style.display = 'none';
    }
});

prev.addEventListener('click', e => {
    delayAutoSliding();

    slideIndex -= slideType === 'all' ? slideCoefficient : 1;

    carousel.scrollTo((imgWidth + gap) * slideIndex, 0);
    if (slideIndex < 15) {
        next.style.display = 'flex';
    }
    if (slideIndex <= 0) {
        prev.style.display = 'none';
    }
});

const slideFunc = () => {
    slideIndex += slideType === 'all' ? slideCoefficient : 1;
    if (slideIndex > 0) {
        prev.style.display = 'flex';
    }
    if (slideIndex >= 15) {
        next.style.display = 'none';
    }
    if (slideIndex > 15) {
        if (!(slideIndex < 20 && slideType === 'all')) {
            slideIndex = 0;
        }
        prev.style.display = 'none';
        next.style.display = 'flex';
    }
    carousel.scrollTo((imgWidth + gap) * slideIndex, 0);
}

let autoSlideInterval = setInterval(slideFunc, 3000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
    clearTimeout(autoSlideTimeout);
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;

    autoSlideTimeout = setTimeout(() => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(slideFunc, 3000);
    }, 6000);
};

carousel.addEventListener('click', delayAutoSliding);

const videos = document.querySelectorAll('.video-item');
let inactive = document.querySelector('.inactive');

function createBigIframe(elem) {
    elem.currentTarget.classList.add('inactive');
    inactive.classList.remove('inactive');
    inactive = elem.currentTarget;
    document.querySelector('.big').classList.add('inactive');
    prepareFrame();
    function prepareFrame() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", `${elem.currentTarget.dataset.video}`);
        ifrm.classList.add('big');
        document.querySelector('.video').insertBefore(ifrm, document.querySelector('.video').children[0]);
    }

    document.getElementsByTagName('iframe').src = elem.currentTarget.dataset.video;
}

videos.forEach(elem => elem.addEventListener('click', createBigIframe));







