
// Mobile Navigation Toggle
const navToggler = document.getElementById('navToggler');
const mobileNavLinks = document.getElementById('mobileNavLinks');

navToggler.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        mobileNavLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Course enroll button functionality
document.querySelectorAll('.course-enroll').forEach(button => {
    button.addEventListener('click', () => {
        const courseTitle = button.closest('.course-card').querySelector('.course-title').textContent;
        alert(`You've enrolled in ${courseTitle}! Redirecting to payment...`);
    });
});
