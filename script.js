document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  if (name && email && message) {
    alert("Your message has been sent! We'll get back to you soon.");
  } else {
    alert("Please fill out all fields.");
  }
});

