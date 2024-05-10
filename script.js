//active menu button//
let menuBtn = document.querySelector('#menu-btn');
let menubar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menubar.classList.toggle('active');
}

//lets remove menu-bar on scroll//

window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menubar.classList.remove('active');
}

//Scroling Reveal//

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-bio h1, .about-resume', {origin: 'left'});
ScrollReveal().reveal('.home-bio p', {origin: 'right'});
ScrollReveal().reveal('.home-bio, heading', {origin: 'top'});
ScrollReveal().reveal('.profile-pic, .about-items, .skills-item, .projects-items, .form', {origin: 'bottom'});

//Typing Animation//

const animText = new Typed ('.animated-text', {
    strings: ['Web Designer', 'Writer'],
    backSpeed: 150,
    typeSpeed: 100,
    backDelay: 700,
    loop: true
});
// JavaScript for confirmation message
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    var confirmation = confirm('Are you sure you want to submit this form?'); // Show confirmation dialog
    if (confirmation) {
        // If user confirms, submit the form
        document.querySelector('form').submit();
        // Show message sent confirmation
        alert('Message sent successfully!');
    }
});
