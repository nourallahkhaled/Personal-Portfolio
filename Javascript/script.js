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


