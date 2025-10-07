document.addEventListener("DOMContentLoaded", () => {
  const bride = document.getElementById("bride");
  const groom = document.getElementById("groom");
  const heart = document.getElementById("heart");

  if (bride) bride.addEventListener("click", () => goTo("bride.html"));
  if (groom) groom.addEventListener("click", () => goTo("groom.html"));
  if (heart) heart.addEventListener("click", () => goTo("details.html"));
});

function goTo(page) {
  document.body.classList.add("fade-out");
  setTimeout(() => window.location.href = page, 500);
}

function goHome() {
  document.body.classList.add("fade-out");
  setTimeout(() => window.location.href = "index.html", 500);
}
document.addEventListener("DOMContentLoaded", () => {
  const momentsBtn = document.getElementById("momentsBtn");
  if (momentsBtn) momentsBtn.addEventListener("click", () => goTo("moments.html"));
});
// Scroll animation for fade-in elements
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2, // How much of element is visible before animation
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
function goHome() {
  window.location.href = "index.html";
}
