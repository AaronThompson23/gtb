function register(){
    var login = document.getElementById("login-btn");

    login.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "login.html";
    });
}

let originalValue; // Declare a variable to hold the original value

function hideAccount() {
    const eyeIcon = document.querySelector(".toggleAccount i");
    const accountLabel = document.querySelector(".acct");

    // Initialize originalValue only once
    if (!originalValue) {
        originalValue = accountLabel.textContent.trim(); // Get original value the first time the function is called
    }

    // Calculate the number of digits before the decimal point
    const numDigits = originalValue.split('.')[0].replace(/[^0-9]/g, '').length;
    const maskedValue = 'x'.repeat(numDigits); // Create a string of 'x's based on the number of digits

    // Toggle between fa-eye and fa-eye-slash
    if (eyeIcon.classList.contains('fa-eye')) {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        accountLabel.textContent = maskedValue; // Change label content to masked value
    } else {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        accountLabel.textContent = originalValue; // Change back to original value
    }
}

function transferLink() {
    const tfLink = document.getElementById('tf-link');
    tfLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "transfer.html";

    });
}

function transactferLink() {
    const trLink = document.getElementById('tr-link');
    trLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "history.html";

    });
}




