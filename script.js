const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function toggleMenu() {
  const nav = document.getElementById("navlinks");
  nav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navlinks = document.getElementById("navlinks");
  const closeBtn = document.getElementById("closeBtn");

  hamburger.addEventListener("click", function () {
    navlinks.classList.add("show");
  });

  closeBtn.addEventListener("click", function () {
    navlinks.classList.remove("show");
  });
});

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  try {
    // Replace with your Google Apps Script Web App URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbz6W4vVox66PYOBKnfCI1vq0Gv0FD8o2ojzG3mNZtpZRN5uNDZj4QrcFXGE1lRTbLtsgw/exec";

    const response = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      successMessage.style.display = "block";
      form.reset();
      setTimeout(() => (successMessage.style.display = "none"), 4000);
    } else {
      alert("Error: Could not send your message.");
    }
  } catch (error) {
    alert("Network error: " + error.message);
  }
});
