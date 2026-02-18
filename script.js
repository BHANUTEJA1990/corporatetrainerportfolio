// script.js

// 1. Initial Load Animation
window.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();

    tl.from(".reveal-text", {
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
    })
        .from(".sub-text", {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.5")
        .from("nav", {
            opacity: 0,
            y: -20,
            duration: 0.5
        }, "-=0.5");
});

// 2. Custom Cursor Tracking
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.3,
        ease: "power2.out"
    });
});

// 3. Hover Effect for Links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 4, duration: 0.3 });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
    });
});

(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your Public Key
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const btn = document.getElementById('submit-btn');
    btn.innerText = 'Sending...';

    // "this" refers to the form element
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
            btn.innerText = 'Message Sent!';
            btn.style.background = '#00ff00'; // Success color
            this.reset(); // Clear the form
        }, (error) => {
            btn.innerText = 'Failed to Send';
            btn.style.background = '#ff0000'; // Error color
            console.log('FAILED...', error);
        });
});
// Animate the form fields on scroll
gsap.from(".input-group", {
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%", // Starts when the section is 80% down the screen
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2, // Each field follows the other
    ease: "power4.out"
});

// Update the Submit Button feedback
const form = document.getElementById('contact-form');
const btn = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
    // Add a simple "sending" scale effect
    gsap.to(btn, { scale: 0.95, duration: 0.1 });
    gsap.to(btn, { scale: 1, duration: 0.1, delay: 0.1 });
});