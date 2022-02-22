const tooglebtn = document.querySelector('.navbar-tooglebtn');
const menu = document.querySelector('.navbar-menu');
const icons = document.querySelector('.navbar-icons');
// const body = document.querySelector('body');

tooglebtn.addEventListener('click',() => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
// body.addEventListener('click',()=>{
//     menu.classList.remove('active');
//     icons.classList.remove('active');
// })