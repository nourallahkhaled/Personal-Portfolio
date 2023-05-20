// const myList = document.getElementById('myList');
// const myLinks = myList.querySelectorAll('a');

// myLinks.forEach(link => {
//     link.addEventListener('click', function () {
//         // Remove the 'active' class from all links
//         myLinks.forEach(link => {
//             link.classList.remove('active');
//         });

//         // Add the 'active' class to the clicked link
//         this.classList.add('active');
//     });
// });
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


