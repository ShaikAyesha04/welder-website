document.addEventListener('DOMContentLoaded', function () {
  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop real form submission

      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Simulate submission success
      alert(`Thank you, ${name}! Your message has been sent.`);
      contactForm.reset(); // Clear the form
    });
  }

  // Login Form Validation
  const loginForm = document.querySelector('form[action="login.php"]');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop real form submission

      // Get form values
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Simple validation
      if (!email || !password) {
        alert('Please fill in both email and password.');
        return;
      }

      // Simulate login success (this would be replaced with actual authentication in the backend)
      alert('Login successful!');
      loginForm.reset(); // Clear the form
    });
  }

  // Password Visibility Toggle (for login and register forms)
  const togglePasswordVisibility = (toggleButton, passwordField) => {
    toggleButton.addEventListener('click', function () {
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }
    });
  };

  const passwordFieldLogin = document.getElementById('password');
  const togglePasswordBtnLogin = document.getElementById('toggle-password-login');

  if (passwordFieldLogin && togglePasswordBtnLogin) {
    togglePasswordVisibility(togglePasswordBtnLogin, passwordFieldLogin);
  }

  const passwordFieldRegister = document.getElementById('register-password');
  const togglePasswordBtnRegister = document.getElementById('toggle-password-register');

  if (passwordFieldRegister && togglePasswordBtnRegister) {
    togglePasswordVisibility(togglePasswordBtnRegister, passwordFieldRegister);
  }

  // Scroll to top functionality (Optional)
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Register Form Submission
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();  // Prevent form submission

      // Retrieve form data
      const name = document.getElementById("name").value.trim(); // Corrected here
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("register-password").value.trim(); // Corrected here
      const confirmPassword = document.getElementById("confirm-password") ? document.getElementById("confirm-password").value.trim() : '';

      // Basic validation
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      if (!name || !email || !password || (confirmPassword && !confirmPassword)) {
        alert("Please fill in all fields.");
        return;
      }

      // Simulating a successful registration (you can replace this with an actual backend request)
      // Normally, here you'd send the data to a server using Fetch API or AJAX

      // Show success message and hide the form
      document.getElementById("success-message").classList.remove("d-none");
      document.getElementById("register-form").reset();  // Reset the form fields after successful registration
    });
  }
});

