const btn = document.querySelector('.cafe__info-button:nth-child(1)');
const btn2 = document.querySelector('.cafe__info-button:nth-child(2)');
const btn3 = document.querySelector('.cafe__info-button:nth-child(3)');
const img = document.querySelector('.cafe__image');

btn.addEventListener('click', ()=> {
    img.classList.toggle('menu');
});

btn2.addEventListener('click', ()=>{
    img.classList.toggle('drinks');
});

btn3.addEventListener('click', ()=>{
    img.classList.toggle('takeaway');
});