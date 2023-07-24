let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })


}

// document.getElementById('downloadCV').addEventListener('click', function() {
//     // Replace 'your_cv.pdf' with the actual filename of your CV
//     const cvFilename = 'Resume_KJ(6)';
    
//     // Replace 'path/to/your_cv.pdf' with the actual file path or URL of your CV
//     const cvFilePath = 'https://drive.google.com/file/d/1ho1BZKo9VaiZkAS1X6-TD_PrWRHp1cwX/view?usp=sharing';

//     const link = document.createElement('a');
//     link.href = cvFilePath;
//     link.download = cvFilename;
//     link.target = '_blank'; // Open the link in a new tab
//     link.click();
// });


