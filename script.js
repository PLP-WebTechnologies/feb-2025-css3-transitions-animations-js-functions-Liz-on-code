// JavaScript to store and retrieve preferences using localStorage

// DOM elements
const animateBtn = document.getElementById('animateBtn');
const animatedImage = document.getElementById('animatedImage');
const darkModeBtn = document.getElementById('darkModeBtn');

// Check if dark mode is already set in localStorage
const darkModePreference = localStorage.getItem('darkMode');
if (darkModePreference === 'enabled') {
  document.body.classList.add('dark-mode');
  darkModeBtn.classList.add('dark-mode');
}

// Event listener for the "Click to Animate!" button
animateBtn.addEventListener('click', () => {
  // Toggle the animation class on the image
  animatedImage.classList.toggle('animate');
});

// Event listener for the "Toggle Dark Mode" button
darkModeBtn.addEventListener('click', () => {
  // Toggle dark mode in localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  if (isDarkMode) {
    document.body.classList.remove('dark-mode');
    darkModeBtn.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  } else {
    document.body.classList.add('dark-mode');
    darkModeBtn.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  }
});
