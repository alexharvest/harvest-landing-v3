document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenubar = document.querySelector(".mobile-menubar");

  mobileMenu.addEventListener("click", function (event) {
    mobileMenubar.classList.toggle("active");
    event.stopPropagation(); // Prevent this click from triggering the document click event
  });

  document.addEventListener("click", function (event) {
    if (!mobileMenubar.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenubar.classList.remove("active");
    }
  });
});
