window.addEventListener('scroll', () => {
    var left_side = document.getElementsByClassName('left-side')[0];
    var right_side = document.getElementsByClassName('right-side')[0];
    left_side.classList.toggle('scrolled', window.scrollY > 0);
    right_side.classList.toggle('scrolled', window.scrollY > 0);
})