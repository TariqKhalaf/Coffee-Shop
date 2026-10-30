const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {

    // Remove active from all links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add active to clicked link
    this.classList.add("active");
  });
});