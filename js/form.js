document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const email = emailInput.value;
    const password = passwordInput.value;

    // Example criteria (Replace with actual logic)
    if (email === 'authoritiesaviation@gmail.com' && password === 'Ayomide23!') {
        emailInput.style.border = '';
        passwordInput.style.border = '';

        // Store login status in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        // Set a delay before redirecting
        setTimeout(function() {
            window.location.href = 'dashboard.html'; // Redirect to the dashboard
        }, 3000);
    } else {
        emailInput.style.border = '2px solid #EE4B2B';
        passwordInput.style.border = '2px solid #EE4B2B';
    }
});
