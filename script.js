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
