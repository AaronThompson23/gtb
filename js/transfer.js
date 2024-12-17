document.getElementById('transfer').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Select all input fields
    const accountInput = document.getElementById('account');
    const routingInput = document.getElementById('routing');
    const bankInput = document.getElementById('bank');
    const nameInput = document.getElementById('name');
    const amountInput = document.getElementById('amount');
    const inputs = [accountInput, routingInput, bankInput, nameInput, amountInput];
    
    let allFieldsFilled = true;

    // Check each input field
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.border = '2px solid red';
            allFieldsFilled = false;
        } else {
            input.style.border = ''; // Reset border if field is filled
        }
    });

    // Open modal if all fields are filled
    if (allFieldsFilled) {
        const otpModal = document.getElementById('otp-modal');
        otpModal.style.display = 'flex'; // Assuming modal display is controlled via display property
        mainContent.classList.add('blur'); 
    }
});
