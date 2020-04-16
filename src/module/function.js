
// Navigation for mobile menu

//hamburger icon
const hamburger = document.querySelector('.menu-btn');
const mainNav = document.querySelector('.main__bg')
//menu-wrapper 
const menuWrapper = document.querySelector('.navbar');
const closeBtn = document.querySelector('.closebtn');

let menuOpen = false;
console.log(hamburger)

hamburger.addEventListener('click', () => {
   
        // mainNav.style.marginLeft = '400px'
        menuWrapper.style.marginLeft= '0px';
        // hamburger.classList.remove('open');
        console.log('noy');
       
})

closeBtn.addEventListener('click', function() {

        // hamburger.classList.add('open');
        // mainNav.style.marginLeft = '0px'
        menuWrapper.style.marginLeft= '-600px';
        console.log('fine');

})

























