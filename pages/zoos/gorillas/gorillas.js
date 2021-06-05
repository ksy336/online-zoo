const button = document.querySelectorAll('.grid-cell ');
const article = document.querySelectorAll('.cell-button__button');


const infoClickHandler = (e) => {
    e.target.closest('.grid-cell').classList.toggle('open');


};
for (let btn of button) {
    btn.addEventListener('click', (e) => infoClickHandler(e));
};
