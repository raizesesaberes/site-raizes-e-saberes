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

const universityCourses = [
  {
    id: "formacao-docente-essencial",
    title: "Formacao Docente Essencial",
    trail: "Trilha de Formacao Docente",
    audience: "Professores",
    hours: 12,
    certificates: 186,
    publishedAt: "2026-07-11",
    status: "Publicado",
    featured: true,
    resources: {
      video: null,
      pdf: null,
      assessment: null,
      certificate: null,
    },
    lessons: [
      { id: "planejamento-pedagogico", title: "Planejamento pedagogico com intencionalidade" },
      { id: "rotinas-de-aula", title: "Rotinas de aula e organizacao do tempo" },
      { id: "praticas-de-avaliacao", title: "Praticas de avaliacao formativa" },
      { id: "recursos-digitais", title: "Recursos digitais em sala" },
    ],
  },
  {
    id: "gestao-pedagogica-em-rede",
    title: "Gestao Pedagogica em Rede",
    trail: "Trilha de Gestao",
    audience: "Gestores",
    hours: 10,
    certificates: 94,
    publishedAt: "2026-07-10",
    status: "Em expansao",
    resources: {
      video: null,
      pdf: null,
      assessment: null,
      certificate: null,
    },
    lessons: [
      { id: "leitura-de-indicadores", title: "Leitura de indicadores educacionais" },
      { id: "reunioes-pedagogicas", title: "Reunioes pedagogicas orientadas por dados" },
      { id: "planos-de-intervencao", title: "Planos de intervencao e acompanhamento" },
    ],
  },
  {
    id: "avaliacao-para-aprendizagem",
    title: "Avaliacao para Aprendizagem",
    trail: "Trilha Avalia+",
    audience: "Professores e coordenadores",
    hours: 8,
    certificates: 72,
    publishedAt: "2026-07-09",
    status: "Em expansao",
    resources: {
      video: null,
      pdf: null,
      assessment: null,
      certificate: null,
    },
    lessons: [
      { id: "diagnostico-inicial", title: "Diagnostico inicial e escuta pedagogica" },
      { id: "rubricas", title: "Rubricas simples para acompanhar progresso" },
      { id: "devolutivas", title: "Devolutivas que orientam novas aprendizagens" },
    ],
  },
];

const universityTrails = [
  { title: "Formacao Docente", status: "Publicado" },
  { title: "Gestao Pedagogica", status: "Em expansao" },
  { title: "Avalia+", status: "Em expansao" },
  { title: "Tecnologias Educacionais", status: "Em expansao" },
];

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

const getFeaturedUniversityCourse = () =>
  universityCourses.find((course) => course.featured) ||
  [...universityCourses].sort((firstCourse, secondCourse) => secondCourse.publishedAt.localeCompare(firstCourse.publishedAt))[0];

const getLatestUniversityCourses = () =>
  [...universityCourses]
    .sort((firstCourse, secondCourse) => secondCourse.publishedAt.localeCompare(firstCourse.publishedAt))
    .slice(0, 3);

const getUniversityLessonPosition = (lessonId) => {
  for (const course of universityCourses) {
    const lessonIndex = course.lessons.findIndex((lesson) => lesson.id === lessonId);
    if (lessonIndex >= 0) {
      return { course, lessonIndex };
    }
  }

  return { course: getFeaturedUniversityCourse(), lessonIndex: -1 };
};

const getNextUniversityLesson = () => {
  const lastCompletedLesson = localStorage.getItem("university:lastCompletedLesson");
  const { course, lessonIndex } = getUniversityLessonPosition(lastCompletedLesson);
  const nextLesson = course.lessons[lessonIndex + 1] || course.lessons[0];
  return { course, lesson: nextLesson };
};

const renderUniversityLive = () => {
  const courseWeekCard = document.querySelector("[data-university-course-week]");
  if (!courseWeekCard) {
    return;
  }

  const featuredCourse = getFeaturedUniversityCourse();
  const latestCourses = getLatestUniversityCourses();
  const totalHours = universityCourses.reduce((sum, course) => sum + course.hours, 0);
  const totalCertificates = universityCourses.reduce((sum, course) => sum + course.certificates, 0);
  const expansionTrails = universityTrails.filter((trail) => trail.status === "Em expansao").length;
  const nextLesson = getNextUniversityLesson();

  document.querySelector("[data-university-featured-title]").textContent = featuredCourse.trail;
  document.querySelector("[data-university-featured-meta]").textContent =
    `${featuredCourse.lessons.length} aulas - ${featuredCourse.hours}h de formacao`;
  document.querySelector("[data-university-progress]").textContent = "68%";

  const lessonList = document.querySelector("[data-university-lessons]");
  if (lessonList) {
    lessonList.innerHTML = featuredCourse.lessons
      .slice(0, 3)
      .map((lesson) => `<span>${lesson.title}</span>`)
      .join("");
  }

  courseWeekCard.innerHTML = `
    <span class="live-label">Destaque do Curso da Semana</span>
    <h3>${featuredCourse.title}</h3>
    <p>${featuredCourse.trail} - ${featuredCourse.hours}h - ${featuredCourse.audience}</p>
    <div class="course-resource-row">
      <span>Video</span>
      <span>PDF</span>
      <span>Avaliacao</span>
      <span>Certificado</span>
    </div>
    <a href="#contato">Ver curso</a>
  `;

  const newCourseList = document.querySelector("[data-university-new-courses]");
  if (newCourseList) {
    newCourseList.innerHTML = latestCourses
      .map(
        (course) => `
          <article>
            <div>
              <strong>${course.title}</strong>
              <span>${course.trail} - ${course.hours}h</span>
            </div>
            ${course.status === "Em expansao" ? `<small>Em expansao</small>` : ""}
          </article>
        `
      )
      .join("");
  }

  const newCourseCount = document.querySelector("[data-university-new-count]");
  if (newCourseCount) {
    newCourseCount.textContent = `${latestCourses.length} publicados`;
  }

  const stats = document.querySelector("[data-university-stats]");
  if (stats) {
    stats.innerHTML = `
      <span><strong>${universityCourses.length}</strong><small>cursos</small></span>
      <span><strong>${totalHours}h</strong><small>formacao</small></span>
      <span><strong>${totalCertificates}</strong><small>certificados</small></span>
      <span><strong>${expansionTrails}</strong><small>trilhas em expansao</small></span>
      <div class="trail-expansion-list">
        ${universityTrails
          .filter((trail) => trail.status === "Em expansao")
          .map((trail) => `<small>${trail.title}<b>Em expansao</b></small>`)
          .join("")}
      </div>
    `;
  }

  const continueCard = document.querySelector("[data-university-continue]");
  if (continueCard) {
    continueCard.querySelector("h3").textContent = nextLesson.lesson.title;
    continueCard.querySelector("p").textContent = `${nextLesson.course.trail} - proxima aula sugerida automaticamente.`;
  }
};

document.querySelector("[data-complete-university-lesson]")?.addEventListener("click", () => {
  const nextLesson = getNextUniversityLesson();
  localStorage.setItem("university:lastCompletedLesson", nextLesson.lesson.id);
  renderUniversityLive();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && videoModal && !videoModal.hidden) {
    closeVideoModal();
  }
});

syncHeader();
renderUniversityLive();
window.addEventListener("scroll", syncHeader, { passive: true });
syncLibrary();
