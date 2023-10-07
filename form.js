function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var usernameError = document.getElementById("username-error");
    var passwordError = document.getElementById("password-error");
    var confirmPasswordError = document.getElementById("confirm-password-error");
    var emailerror = document.getElementById("email-error").value;

    // Reset error messages
    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    emailerror.textContent="";

    // Validate username (minimum 5 characters)
    if (username.length < 5) {
        usernameError.textContent = "Username must be at least 5 characters long.";
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
        emailerror.textContent = "Invalid email format.";
        return false;
    }

    // Validate password (minimum 8 characters)
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        return false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    }

    // Redirect to the same page (you can change the URL)
    window.location.href = "form.html";

    // Registration successful
    alert("Registration successful!");
    return true;
}