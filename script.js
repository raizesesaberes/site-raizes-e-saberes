const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const contactForm = document.querySelector("[data-contact-form]");
const librarySearch = document.querySelector("[data-library-search]");
const libraryFilters = document.querySelectorAll("[data-filter]");
const libraryCards = document.querySelectorAll("[data-library-grid] .library-card");
const libraryShelves = document.querySelectorAll("[data-library-shelf]");
const libraryEmpty = document.querySelector("[data-library-empty]");
const bookModal = document.querySelector("[data-book-modal]");
const bookButtons = document.querySelectorAll("[data-book-viewer]");
const bookModalCloseButtons = document.querySelectorAll("[data-book-modal-close]");
const videoModal = document.querySelector("[data-video-modal]");
const videoOpenButton = document.querySelector("[data-video-open]");
const videoCloseButton = document.querySelector("[data-video-close]");
const videoFrame = document.querySelector("[data-video-frame]");
const youtubeEmbedUrl =
  "https://www.youtube.com/embed/w4BPUg2x_O8?autoplay=1&rel=0&modestbranding=1";

const syncHeader = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

if (menuButton) {
  menuButton.setAttribute("aria-expanded", "false");

  menuButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

if (nav) {
  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      header.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
    }
  });
}

const screenButtons = document.querySelectorAll("[data-screen-target]");
const screenLinks = document.querySelectorAll("[data-screen-link]");
const screens = document.querySelectorAll("[data-screen]");

const showScreen = (screenName, shouldUpdateHash = true) => {
  if (!screens.length) {
    return;
  }

  const target = document.querySelector(`[data-screen="${screenName}"]`) || screens[0];
  const activeName = target.dataset.screen;

  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen === target);
  });

  screenButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screenTarget === activeName);
  });

  if (shouldUpdateHash) {
    history.replaceState(null, "", `#${activeName}`);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
};

screenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.screenTarget);
  });
});

screenLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showScreen(link.dataset.screenLink);
  });
});

if (screens.length) {
  showScreen(window.location.hash.replace("#", "") || "biblioteca", false);

  window.addEventListener("hashchange", () => {
    showScreen(window.location.hash.replace("#", "") || "biblioteca", false);
  });
}

if (contactForm) {
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
}

let activeLibraryFilter = "all";

const normalize = (value) =>
  String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const syncLibrary = () => {
  if (!libraryCards.length) {
    return;
  }

  const searchTerm = normalize(librarySearch?.value);
  let visibleCount = 0;

  libraryCards.forEach((card) => {
    const category = normalize(card.dataset.category);
    const title = normalize(card.dataset.title);
    const text = normalize(card.textContent);
    const matchesFilter = activeLibraryFilter === "all" || category.includes(activeLibraryFilter);
    const matchesSearch = !searchTerm || title.includes(searchTerm) || text.includes(searchTerm);
    const isVisible = matchesFilter && matchesSearch;

    card.classList.toggle("is-hidden", !isVisible);

    if (isVisible) {
      visibleCount += 1;
    }
  });

  libraryShelves.forEach((shelf) => {
    const hasVisibleCard = Array.from(shelf.querySelectorAll(".library-card")).some(
      (card) => !card.classList.contains("is-hidden")
    );

    shelf.classList.toggle("is-hidden", !hasVisibleCard);
  });

  if (libraryEmpty) {
    libraryEmpty.hidden = visibleCount > 0;
  }
};

if (librarySearch) {
  librarySearch.addEventListener("input", syncLibrary);
}

libraryFilters.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    activeLibraryFilter = filterButton.dataset.filter || "all";

    libraryFilters.forEach((button) => {
      button.classList.toggle("is-active", button === filterButton);
    });

    syncLibrary();
  });
});

bookButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (bookModal) {
      bookModal.hidden = false;
    }
  });
});

bookModalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (bookModal) {
      bookModal.hidden = true;
    }
  });
});

if (bookModal) {
  bookModal.addEventListener("click", (event) => {
    if (event.target === bookModal) {
      bookModal.hidden = true;
    }
  });
}

const openVideoModal = () => {
  if (!videoModal) {
    return;
  }

  videoModal.hidden = false;
  document.body.classList.add("modal-open");

  if (videoFrame && !videoFrame.innerHTML) {
    videoFrame.innerHTML = `
      <iframe
        src="${youtubeEmbedUrl}"
        title="Video institucional Raizes e Saberes"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    `;
  }
};

const closeVideoModal = () => {
  if (!videoModal) {
    return;
  }

  videoModal.hidden = true;
  document.body.classList.remove("modal-open");

  if (videoFrame) {
    videoFrame.innerHTML = "";
  }
};

if (videoOpenButton) {
  videoOpenButton.addEventListener("click", openVideoModal);
}

if (videoCloseButton) {
  videoCloseButton.addEventListener("click", closeVideoModal);
}

if (videoModal) {
  videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
      closeVideoModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && videoModal && !videoModal.hidden) {
    closeVideoModal();
  }
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
syncLibrary();
