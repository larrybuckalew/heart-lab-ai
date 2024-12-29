// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
  // Navigation toggle
  const navToggle = document.querySelector('.nav-toggle');

  // Fetch API data
  fetch('https://heart-lab-ai-350114114883.us-central1.run.app/api/user/123')
    .then(response => response.json())
    .then(data => console.log(data));
});
