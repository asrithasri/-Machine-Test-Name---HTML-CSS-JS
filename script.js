document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission until validation passes
    
    // Grab input values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('form-error-message');
    
    // Validation checks
    if (!firstName || !lastName || !email || !phone || !password) {
        errorMessage.textContent = "All fields are required.";
        errorMessage.style.display = "block";
        return;
    }

    // Email validation using regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        return;
    }

    // Phone number validation (10-14 digits)
    const phonePattern = /^[0-9]{10,14}$/;
    if (!phone.match(phonePattern)) {
        errorMessage.textContent = "Please enter a valid phone number (10-14 digits).";
        errorMessage.style.display = "block";
        return;
    }

    // Password validation (at least 8 characters)
    if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
        errorMessage.style.display = "block";
        return;
    }

    // Clear error message if all validations pass
    errorMessage.style.display = "none";

    // Log the form data in the required format
    const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phone,
        password: password
    };

    console.log(formData);

    // Show success alert
    alert("Form submitted successfully!");

    // Refresh the form by resetting its values
    document.getElementById('signup-form').reset();
});
