const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const contactForm = document.querySelector("[data-contact-form]");

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

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const nome = data.get("nome") || "";
  const instituicao = data.get("instituicao") || "";
  const email = data.get("email") || "";
  const telefone = data.get("telefone") || "";
  const mensagem = data.get("mensagem") || "";

  const subject = "Solicitacao de demonstracao - Raizes e Saberes";
  const body = [
    `Nome: ${nome}`,
    `Escola ou instituicao: ${instituicao}`,
    `E-mail: ${email}`,
    `Telefone: ${telefone}`,
    "",
    "Mensagem:",
    mensagem,
  ].join("\n");

  window.location.href =
    `mailto:graficasantahelena@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
