
// gsap.to(".scroll-down h3",{
//     y:-40,
//     repeat:-1,
//     duration:1,
//     yoyo:true
// })








// document.querySelector('.info-done').addEventListener('click', function(){
//     alert("we will reach you soon!");
// });

const nav_button = document.querySelector('.navbar-btn');
const main_content = document.querySelector('.main');
const nav_header = document.querySelector('.header');
const toggleNavbar = () => {
    nav_header.classList.toggle('active');
    main_content.classList.toggle('rock-roll');
};


nav_button.addEventListener('click', () => toggleNavbar());