document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting immediately

    let isValid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const terms = document.getElementById("terms").checked;

    // Name validation
    if (name === "") {
      alert("Full Name is required.");
      isValid = false;
    }

    // Email validation (simple regex check)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
    }

    // Password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      isValid = false;
    }

    // Date of birth validation
    if (dob === "") {
      alert("Please enter your date of birth.");
      isValid = false;
    }

    // Gender selection validation
    if (gender === "") {
      alert("Please select your gender.");
      isValid = false;
    }

    // Terms and conditions validation
    if (!terms) {
      alert("You must agree to the Terms & Conditions.");
      isValid = false;
    }

    // Submit the form if all validations pass
    if (isValid) {
      alert("Registration Successful!");
      form.submit(); // Allow the form to submit
    }
  });
});
