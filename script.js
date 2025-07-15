// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });

  // Add hover effects to project cards
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });

  // Error handling for external links
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      try {
        if (this.target === "_blank") {
          return true;
        }
      } catch (error) {
        console.warn("Link navigation warning:", error);
      }
    });
  });
});

// Dynamic navbar background on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (nav) {
    if (window.scrollY > 100) {
      nav.style.background = "rgba(0, 0, 0, 0.95)";
    } else {
      nav.style.background = "rgba(0, 0, 0, 0.9)";
    }
  }
});
