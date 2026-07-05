const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

menuButton.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    header.classList.remove("is-open");
  }
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
