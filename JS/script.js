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
    var left_side = document.getElementsByClassName('left-intro');
    var right_side = document.getElementsByClassName('right-intro')[0];
    var fixed = document.getElementsByClassName('fixed')[0];
        for (ele of left_side)
        {
            ele.classList.toggle('scrolled', window.scrollY > 0);
        }
    
    right_side.classList.toggle('scrolled', window.scrollY > 0);
    fixed.classList.toggle('scrolled', window.scrollY>0);
})

//ABOUT 
const links = document.querySelectorAll('.myLink');
const paragraphs = document.querySelectorAll('.tab_item');

links.forEach((link, index) => {
    link.addEventListener('click', function () {
        // Hide all paragraphs
        paragraphs.forEach(paragraph => {
            paragraph.style.display = 'none';
        });

        // Show the selected paragraph
        paragraphs[index].style.display = 'block';
    });
});


// Loop through the nav links
links.forEach(link => {
    // Add a click event listener to each link
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the link from navigating to a new page

        // Remove the active class from the current link
        const currentLink = document.querySelector('.active');
        currentLink.classList.remove('active');

        // Add the active class to the clicked link
        this.classList.add('active');
    });
});
