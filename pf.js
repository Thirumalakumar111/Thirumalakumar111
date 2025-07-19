document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    db.collection("feedback").add({
      name,
      email,
      message,
      timestamp: new Date()
    })
    .then(() => {
      alert("Thank you for your message, Thiru will reply soon!");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      alert("Error sending message: " + error.message);
    });
  } else {
    alert("Please fill out all fields.");
  }
});
