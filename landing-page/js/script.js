const hamburger = document.querySelector('.hamburger');
const navContent = document.querySelector('.nav__content');
const isOpen = document.getElementById('is__open')

// console.log(navContent);
hamburger.addEventListener('click', function () {
    navContent.classList.toggle('is__open');
    navContent.classList.toggle('is__hidden');
    // isOpen.parentElement.removeChild(isOpen);

})