document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (!validateEmail(email)) {
            errorMessage.textContent = 'Please provide a valid email address';
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            // Handle successful submission (e.g., send to server)
            console.log('Email submitted:', email);
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});
