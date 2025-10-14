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

// Contact Form Submission
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const formData = new FormData(form);
  const data = {
    Name: formData.get("name"),
    Email: formData.get("email"),
    Message: formData.get("message"),
    Timestamp: new Date().toISOString(), // Add timestamp
  };

  // Clear previous status
  status.textContent = "Sending...";
  status.style.color = "#fff";

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzC-uYTqTolzHAmIerkC2dFHKi8zkFhiG4qmNRk09YusomojIyn-2wvtiYc4zUvOhyg/exec",
      {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      }
    );

    // Since 'no-cors' doesn't allow reading response, assume success if no error
    status.textContent = "Message sent successfully!";
    status.style.color = "green";
    form.reset(); // Reset form fields

    //Clear status message after 3 seconds
    setTimeout(() => {
      status.textContent = "";
    }, 3000);
  } catch (error) {
    status.textContent = "Error sending message. Please try again.";
    status.style.color = "red";
    console.error("Error:", error);
  }
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    document.body.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky");
    document.body.classList.remove("sticky-header");
  }
});

// Scroll animation functionality
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) * 0.8
  );
}

function handleScroll() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    if (isInViewport(element) && !element.classList.contains("visible")) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
document.addEventListener("DOMContentLoaded", handleScroll);
