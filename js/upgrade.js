const clickLinks = document.querySelectorAll('.open-overlay'); // Select all links
const overlay = document.querySelector('.upgrade-overlay');
const mainContent = document.querySelector('main');

// Loop through each link and add the click event listener
clickLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        overlay.style.display = 'flex'; // Show the overlay
        mainContent.classList.add('blur'); // Add blur to main content
    });
});

// Close the overlay when clicking outside the content area
overlay.addEventListener('click', function(event) {
    if (event.target === overlay) { // Check if click is outside content area
        closeUpgradeOverlay();
    }
});

function closeUpgradeOverlay() {
    overlay.style.display = 'none'; // Hide the overlay
    mainContent.classList.remove('blur'); // Remove blur from main content
}
