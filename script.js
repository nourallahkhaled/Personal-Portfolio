// Menu
const popupButton = document.getElementById('popup-button');
const closeButton = document.getElementById('close-button');
const popupMenu = document.getElementById('popup-menu');
const main = document.getElementById('overlay');

popupButton.addEventListener('click', function() {
// popupMenu.style.display = 'inline-block' ;
popupMenu.classList.toggle('show', true);
popupMenu.classList.remove('hide', true);
main.classList.remove('menu-closed');
main.classList.toggle('menu-opened', true);

});
closeButton.addEventListener('click', function() {
    // popupMenu.style.display = 'none' ;
    main.classList.toggle('menu-closed', true);
    popupMenu.classList.toggle('hide', true);


});


// Typing Text 
const texts = ['John Doe', 'Web Developer'];
const textElement = document.getElementById('text');
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.innerHTML = texts[textIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex++;
        if (textIndex >= texts.length) {
        textIndex = 0;
        }
        setTimeout(typeText, 1000);
    }
}

typeText();

// Canvas Signature
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.font = "35px Pacifico";
ctx.fillStyle = "gray";
ctx.fillText("John Doe", 10, 50);

window.addEventListener('scroll', () => {
    var left_side = document.getElementsByClassName('left-intro')[0];
    var right_side = document.getElementsByClassName('right-intro')[0];
    var fixed = document.getElementsByClassName('fixed')[0];
    left_side.classList.toggle('scrolled', window.scrollY > 0);
    right_side.classList.toggle('scrolled', window.scrollY > 0);
    fixed.classList.toggle('scrolled', window.scrollY>0);
})