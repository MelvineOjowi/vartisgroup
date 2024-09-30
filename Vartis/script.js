// Get the button elements
const facebookBtn = document.getElementById('facebook-btn');
const twitterBtn = document.getElementById('twitter-btn');
const linkedinBtn = document.getElementById('linkedin-btn');

// Add event listeners to the buttons
facebookBtn.addEventListener('click', () => {
    window.open('https://www.facebook.com', '_blank');
});

twitterBtn.addEventListener('click', () => {
    window.open('https://twitter.com', '_blank');
});

linkedinBtn.addEventListener('click', () => {
    window.open('https://www.linkedin.com', '_blank');
});
const slider = document.querySelector('.image-slider');
const slides = slider.children;
let currentSlide = 0;

function slideToLeft() {
  slides[currentSlide].style.transform = 'translateX(-100%)';
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.transform = 'translateX(0)';
}

setInterval(slideToLeft, 3000); // adjust the interval according to your needs
// Get the insurance-solutions container
const insuranceSolutions = document.querySelector('.insurance-solutions');

// Add an event listener to the window scroll event
window.addEventListener('scroll', () => {
    // Check if the window has scrolled past the top of the container
    if (window.scrollY > insuranceSolutions.offsetTop) {
        // Add the sticky class to the container
        insuranceSolutions.classList.add('sticky');
    } else {
        // Remove the sticky class from the container
        insuranceSolutions.classList.remove('sticky');
    }
});
// get the message icon and chatbot popup elements
const messageIcon = document.getElementById('message-icon');
const chatbotPopup = document.getElementById('chatbot-popup');
const closeBtn = document.getElementById('close-btn');

// add event listener to message icon
messageIcon.addEventListener('click', () => {
  // show the chatbot popup
  chatbotPopup.style.display = 'block';
});

// add event listener to close button
closeBtn.addEventListener('click', () => {
  // hide the chatbot popup
  chatbotPopup.style.display = 'none';
});