document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');
    const emailInput = document.getElementById('email');
    const formGroup = document.querySelector('.form-group');
    const errorMessage = document.querySelector('.error-message');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }

    function showError(message) {
        formGroup.classList.add('error');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function hideError() {
        formGroup.classList.remove('error');
        errorMessage.style.display = 'none';
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!email) {
            showError('Please provide an email address');
        } else if (!validateEmail(email)) {
            showError('Please provide a valid email address');
        } else {
            hideError();
            // Success handling - Add API call here
            console.log('Valid email submitted:', email);
            form.reset();
        }
    });

    emailInput.addEventListener('input', function() {
        if (formGroup.classList.contains('error')) {
            hideError();
        }
    });
});
