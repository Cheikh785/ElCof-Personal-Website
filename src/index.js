import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { log } from "console";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name && email && message) {
        // Here, you can add code to send the form data via an email service or backend API.

        // Show confirmation message
        document.getElementById('confirmationMessage').style.display = 'block';

        // Clear the form fields
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyXn94qOwmw4Shhd5sPpN1aaGnwdiFHNjvvuK95wpABPwbq3L8wIaucWAdBsaM33bQ/exec';
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        const urlEncodedData = new URLSearchParams();
        urlEncodedData.append('name', name);
        urlEncodedData.append('email', email);
        urlEncodedData.append('message', message);

        fetch(scriptURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlEncodedData.toString()
          })
            .then(response => {
              if (response.ok) {
                console.log('Form submitted successfully!');
                document.getElementById('confirmationMessage').style.display = 'block';
              } else {
                console.error('Form submission failed.');
              }
            })
            .catch(error => console.error('Error!', error.message));

    });
});

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Loop through each link and add an event listener for click events
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the 'active' class from all nav items
        navLinks.forEach(link => link.parentElement.classList.remove('active'));

        // Add the 'active' class to the clicked item
        this.parentElement.classList.add('active');
    });
});