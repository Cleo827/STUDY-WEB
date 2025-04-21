alert("sucessfully loaded");

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check localStorage for the saved mode and apply it
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
}

// Add event listener to toggle button
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save the current mode in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
});

const aboutButton = document.getElementById('about-button');
const modal = document.getElementById('about-modal');
const closeButton = document.querySelector('.close-button');

// Show the modal when the About button is clicked
aboutButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Hide the modal when the close button is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Hide the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

