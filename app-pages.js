const modules = {
  biblioteca: {
    title: "Biblioteca Digital",
    subtitle: "Sua jornada de conhecimento comeca aqui",
    code: "MS-001",
    html: `
      <div class="screen-title">
        <p>MS-001</p>
        <h1>Biblioteca Digital</h1>
        <span>Sua jornada de conhecimento comeca aqui</span>
      </div>
      <div class="library-grid">
        <section class="wide-panel">
          <div class="panel-head"><h2>Continuar Leitura</h2><a href="book-viewer.html">Ver todos</a></div>
          <div class="reading-row">
            <article class="reading-card"><img src="assets/RAIZES_INFANTIL5_VOL1_BIBLIOTECA.webp" alt="Capa Matematica" /><div><h3>Matematica</h3><p>5º Ano</p><i style="--value:72%"></i><a class="mini-action" href="book-viewer.html">Continuar</a></div></article>
            <article class="reading-card"><img src="assets/RAIZES_INFANTIL4_VOL2_BIBLIOTECA.webp" alt="Capa Ciencias" /><div><h3>Ciencias</h3><p>4º Ano</p><i style="--value:48%"></i><a class="mini-action" href="book-viewer.html">Continuar</a></div></article>
            <article class="reading-card"><img src="assets/RAIZES_INFANTIL3_VOL2_BIBLIOTECA.webp" alt="Capa Historia" /><div><h3>Historia</h3><p>6º Ano</p><i style="--value:28%"></i><a class="mini-action" href="book-viewer.html">Continuar</a></div></article>
            <article class="reading-card"><img src="assets/RAIZES_INFANTIL4_VOL1_BIBLIOTECA.webp" alt="Capa Geografia" /><div><h3>Geografia</h3><p>3º Ano</p><i style="--value:15%"></i><a class="mini-action" href="book-viewer.html">Continuar</a></div></article>
          </div>
        </section>
        <aside class="quick-card"><h2>Navegacao Rapida</h2><a>Livros Recentes</a><a>Meus Favoritos</a><a>Leitura em Andamento</a><a>Novos Materiais</a></aside>
        <section class="wide-panel">
          <div class="panel-head"><h2>Colecoes</h2><a>Ver todos</a></div>
          <div class="collection-strip">
            <article><b>⌂</b><strong>Educacao Infantil</strong><span>48 livros</span></article>
            <article><b>♙</b><strong>Ensino Fundamental</strong><span>256 livros</span></article>
            <article><b>✓</b><strong>Avalia+</strong><span>32 livros</span></article>
            <article><b>▣</b><strong>Literatura</strong><span>124 livros</span></article>
            <article><b>♧</b><strong>Formacao Continuada</strong><span>67 livros</span></article>
            <article><b>▤</b><strong>Materiais Complementares</strong><span>89 livros</span></article>
          </div>
        </section>
        <aside class="premium-card"><img src="logo-premium-dark.png" alt="Raizes e Saberes Premium" onerror="this.hidden=true;" /><h2>Explore o Premium</h2><p>Acesso ilimitado ao acervo e funcionalidades exclusivas.</p><button>Saiba mais</button></aside>
        <section class="wide-panel recent-books">
          <div class="panel-head"><h2>Livros Recentes</h2><a>Ver todos</a></div>
          <div class="book-strip">
            <img src="assets/RAIZES_INFANTIL5_VOL1_BIBLIOTECA.webp" alt="" />
            <img src="assets/RAIZES_INFANTIL2_VOL1_BIBLIOTECA.webp" alt="" />
            <img src="assets/RAIZES_INFANTIL4_VOL1_BIBLIOTECA.webp" alt="" />
            <img src="assets/RAIZES_INFANTIL3_VOL2_BIBLIOTECA.webp" alt="" />
            <img src="assets/RAIZES_INFANTIL5_VOL2_BIBLIOTECA.webp" alt="" />
            <img src="assets/RAIZES_INFANTIL4_VOL2_BIBLIOTECA.webp" alt="" />
          </div>
        </section>
      </div>
    `,
  },
  viewer: {
    title: "Book Viewer",
    subtitle: "Colecao Raizes e Saberes - 4º Ano - Ciencias",
    code: "MS-002",
    html: `
      <div class="viewer-shell">
        <aside class="page-rail"><h2>Paginas</h2><img src="assets/RAIZES_INFANTIL5_VOL1_BIBLIOTECA.webp" alt="" /><img class="selected" src="assets/RAIZES_INFANTIL4_VOL1_BIBLIOTECA.webp" alt="" /><img src="assets/RAIZES_INFANTIL3_VOL1_BIBLIOTECA.webp" alt="" /><img src="assets/RAIZES_INFANTIL2_VOL1_BIBLIOTECA.webp" alt="" /></aside>
        <section class="book-spread">
          <div class="page left-page"><span class="chapter">3</span><h1>Os seres vivos<br />e o ambiente</h1><p>Todos os seres vivos precisam do ambiente para sobreviver. Eles obtem do ambiente os recursos necessarios para viver, como agua, luz, ar e alimentos.</p><div class="nature-photo"></div><b>28</b></div>
          <div class="page right-page"><p>As plantas produzem seu proprio alimento por meio da <strong>fotossintese</strong>. Ja os animais obtem seu alimento de outros seres vivos.</p><div class="tree-diagram"><span>Luz do sol</span><strong>Oxigenio</strong><em>Agua e sais minerais</em></div><div class="reflect-box"><strong>Para refletir</strong><span>Como os seres vivos interagem entre si e com o ambiente?</span></div><b>29</b></div>
        </section>
        <aside class="summary-rail"><h2>Sumario</h2><p><strong>Capitulo 1</strong><span>10</span></p><p><strong>Capitulo 2</strong><span>22</span></p><p class="active"><strong>Capitulo 3</strong><span>28</span></p><p><strong>Capitulo 4</strong><span>40</span></p></aside>
      </div>
      <div class="viewer-controls"><button>−</button><span>100%</span><button>+</button><button>‹</button><strong>29 / 128</strong><button>›</button></div>
    `,
  },
  professor: {
    title: "Painel do Professor",
    subtitle: "Que bom te ver por aqui. Vamos transformar o dia dos nossos alunos.",
    code: "MS-003",
    html: `
      <div class="dashboard-head"><div><p>MS-003</p><h1>Ola, Professor Marcos!</h1><span>Que bom te ver por aqui. Vamos transformar o dia dos nossos alunos.</span></div></div>
      <div class="teacher-layout">
        <section class="panel"><div class="panel-head"><h2>Minhas Turmas</h2><a>Ver todas</a></div><div class="class-grid"><article>4º Ano A<span>28 alunos</span></article><article>5º Ano B<span>27 alunos</span></article><article>6º Ano A<span>30 alunos</span></article><article>3º Ano C<span>25 alunos</span></article></div></section>
        <section class="panel span-2"><div class="panel-head"><h2>Planejamento Semanal</h2><a>Ver semana completa</a></div><div class="week-grid"><article>Seg 20<strong>Matematica</strong><span>8h - 9h40</span></article><article>Ter 21<strong>Portugues</strong><span>8h - 9h40</span></article><article class="today">Qua 22<strong>Geografia</strong><span>8h - 9h40</span></article><article>Qui 23<strong>Ciencias</strong><span>10h - 11h40</span></article><article>Sex 24<strong>Ed. Fisica</strong><span>10h - 11h40</span></article></div></section>
        <section class="panel"><h2>Proximas Aulas</h2><ul class="clean-list"><li>Geografia <span>Hoje - 8h00</span></li><li>Arte <span>Hoje - 10h00</span></li><li>Matematica <span>Amanha - 8h00</span></li></ul></section>
        <section class="panel"><h2>Atividades Pendentes</h2><ul class="clean-list"><li>Atividade de Matematica <span>15 entregas</span></li><li>Leitura e Interpretacao <span>8 entregas</span></li><li>Experimento: Ciclo da Agua <span>12 entregas</span></li></ul></section>
        <section class="panel chart-card"><h2>Correcoes</h2><div class="donut">68%</div><strong>24</strong><span>Atividades para corrigir</span></section>
        <section class="panel book-mini"><h2>Biblioteca Integrada</h2><img src="assets/RAIZES_INFANTIL5_VOL1_BIBLIOTECA.webp" alt="" /><div><strong>Ciencias</strong><span>4º Ano</span><button>Continuar leitura</button></div></section>
      </div>
    `,
  },
  avalia: {
    title: "Avalia+",
    subtitle: "Inteligencia em avaliacao",
    code: "MS-004",
    html: `
      <div class="dashboard-head blue"><div><p>MS-004</p><h1>AVALIA+</h1><span>Inteligencia em avaliacao</span></div></div>
      <div class="metric-row"><article>Participacoes<strong>18.742</strong><span>95,4%</span></article><article>Desempenho Medio<strong>72,6%</strong><span>▲ 6,3 p.p.</span></article><article>Acertos<strong>16.842</strong><span>▲ 8,7%</span></article><article>Aprendizado Adequado<strong>68,4%</strong><span>▲ 7,1 p.p.</span></article><article>Atencao Especial<strong>24,8%</strong><span>▼ 3,2 p.p.</span></article><article>Critico<strong>6,8%</strong><span>▼ 3,9 p.p.</span></article></div>
      <div class="analytics-grid">
        <section class="panel span-2"><h2>Evolucao da Aprendizagem</h2><div class="line-chart blue-line"></div></section>
        <section class="panel"><h2>Desempenho por Disciplina</h2><div class="bar-list blue-bars"><p>Lingua Portuguesa<i style="--value:78%"></i></p><p>Matematica<i style="--value:71%"></i></p><p>Ciencias<i style="--value:69%"></i></p><p>Historia<i style="--value:66%"></i></p><p>Geografia<i style="--value:65%"></i></p></div></section>
        <section class="panel chart-card"><h2>Niveis de Aprendizagem</h2><div class="donut">18.742</div><ul class="legend"><li>Adequado 68,4%</li><li>Basico 24,8%</li><li>Critico 6,8%</li></ul></section>
        <section class="panel span-2"><h2>Diagnosticos</h2><table><tr><td>EF04LP01</td><td>82,1%</td><td>Adequado</td></tr><tr><td>EF04MA05</td><td>71,4%</td><td>Basico</td></tr><tr><td>EF04CI03</td><td>68,7%</td><td>Basico</td></tr></table></section>
        <section class="panel"><h2>Atividades Recentes</h2><ul class="clean-list"><li>Avaliacao de Matematica</li><li>Diagnostico de Leitura</li><li>Avaliacao de Ciencias</li></ul></section>
      </div>
    `,
  },
  secretaria: {
    title: "Secretaria Municipal",
    subtitle: "Acompanhe os principais indicadores da educacao municipal",
    code: "MS-005",
    html: `
      <div class="dashboard-head"><div><p>MS-005</p><h1>Visao Geral da Rede</h1><span>Acompanhe os principais indicadores da educacao municipal</span></div></div>
      <div class="metric-row"><article>Estudantes<strong>24.875</strong><span>95,2%</span></article><article>Escolas<strong>58</strong><span>100%</span></article><article>Professores<strong>1.482</strong><span>97,5%</span></article><article>Desempenho Medio<strong>72,6%</strong><span>▲ 6,3 p.p.</span></article><article>Frequencia Media<strong>94,1%</strong><span>▲ 2,4 p.p.</span></article><article>IDEB Projetado<strong>6,1</strong><span>▲ 0,3</span></article></div>
      <div class="analytics-grid secretaria-grid">
        <section class="panel span-2"><h2>Evolucao do Desempenho da Rede</h2><div class="line-chart"></div></section>
        <section class="panel"><h2>Desempenho por Etapa de Ensino</h2><div class="bar-list"><p>Educacao Infantil<i style="--value:86%"></i></p><p>Anos Iniciais<i style="--value:74%"></i></p><p>Anos Finais<i style="--value:67%"></i></p><p>Ensino Medio<i style="--value:61%"></i></p></div></section>
        <section class="panel map-card"><h2>IDEB por Escola</h2><div class="map-shape"></div></section>
        <section class="panel"><h2>Ranking de Escolas</h2><ol class="rank-list"><li>EM Professor Olavo Bilac <span>86,9%</span></li><li>EMEF Monteiro Lobato <span>83,2%</span></li><li>EM Vereador Joao Lima <span>80,7%</span></li></ol></section>
        <section class="panel chart-card"><h2>Frequencia da Rede</h2><div class="donut">94,1%</div></section>
        <section class="panel"><h2>Alertas e Acompanhamentos</h2><ul class="clean-list"><li>5 escolas com desempenho abaixo de 50%</li><li>12 escolas com frequencia abaixo de 85%</li><li>8 escolas com queda no desempenho</li></ul></section>
      </div>
    `,
  },
  gestor: {
    title: "Gestor Escolar",
    subtitle: "Escola Municipal Joao da Silva",
    code: "MS-006",
    html: `
      <div class="dashboard-head"><div><p>MS-006</p><h1>Painel do Gestor Escolar</h1><span>Escola Municipal Joao da Silva</span></div></div>
      <div class="metric-row"><article>Estudantes<strong>582</strong><span>Ativos</span></article><article>Turmas<strong>23</strong><span>Ativas</span></article><article>Professores<strong>41</strong><span>Ativos</span></article><article>Desempenho Medio<strong>72,6%</strong><span>▲ 6,3 p.p.</span></article><article>Frequencia Media<strong>94,1%</strong><span>▲ 2,4 p.p.</span></article><article>Avalia+ Participacao<strong>92,3%</strong><span>▲ 4,1 p.p.</span></article></div>
      <div class="analytics-grid">
        <section class="panel"><h2>Desempenho por Etapa</h2><div class="column-chart"></div></section>
        <section class="panel"><h2>Desempenho por Turma</h2><div class="bar-list"><p>6º Ano A<i style="--value:76%"></i></p><p>6º Ano B<i style="--value:72%"></i></p><p>7º Ano A<i style="--value:69%"></i></p><p>8º Ano A<i style="--value:74%"></i></p></div></section>
        <section class="panel chart-card"><h2>Frequencia por Turma</h2><div class="donut">94,1%</div></section>
        <section class="panel"><h2>Alertas Pedagogicos</h2><ul class="clean-list"><li>5 turmas com desempenho abaixo de 60%</li><li>12 estudantes com baixa frequencia</li><li>3 atividades atrasadas</li></ul></section>
        <section class="panel span-2"><h2>Biblioteca Digital</h2><div class="book-strip small"><img src="assets/RAIZES_INFANTIL3_VOL1_BIBLIOTECA.webp" alt="" /><img src="assets/RAIZES_INFANTIL4_VOL1_BIBLIOTECA.webp" alt="" /><img src="assets/RAIZES_INFANTIL5_VOL1_BIBLIOTECA.webp" alt="" /></div></section>
        <section class="panel"><h2>Atalhos Rapidos</h2><div class="shortcut-grid"><button>Lancar Frequencia</button><button>Registrar Atividade</button><button>Plano de Aula</button><button>Relatorios</button></div></section>
      </div>
    `,
  },
  familia: {
    title: "Painel da Familia",
    subtitle: "Acompanhe a jornada escolar dos seus filhos",
    code: "MS-007",
    html: `
      <div class="dashboard-head family"><div><p>MS-007</p><h1>Ola, Ana Paula!</h1><span>Acompanhe a jornada escolar dos seus filhos</span></div></div>
      <div class="family-grid">
        <section class="panel span-2"><div class="panel-head"><h2>Meus Filhos</h2><a>Ver todos</a></div><div class="child-row"><article><span>Pedro Silva</span><strong>95,2%</strong><i style="--value:95%"></i></article><article><span>Maria Silva</span><strong>92,1%</strong><i style="--value:92%"></i></article></div></section>
        <section class="family-banner">Acompanhe cada conquista.<br />Participe de cada passo.</section>
        <section class="panel chart-card"><h2>Frequencia dos Filhos</h2><div class="donut">93,6%</div></section>
        <section class="panel span-2"><h2>Evolucao da Aprendizagem</h2><div class="bar-list"><p>Lingua Portuguesa<i style="--value:85%"></i></p><p>Matematica<i style="--value:92%"></i></p><p>Ciencias<i style="--value:80%"></i></p><p>Historia<i style="--value:78%"></i></p></div></section>
        <section class="panel"><h2>Alertas Importantes</h2><ul class="clean-list"><li>Reuniao de Pais e Mestres</li><li>Entrega de atividades</li><li>Comunicado da escola</li></ul></section>
        <section class="panel"><h2>Proximos Eventos</h2><ul class="clean-list"><li>Passeio Pedagogico</li><li>Avaliacao de Matematica</li><li>Entrega de Boletins</li></ul></section>
      </div>
    `,
  },
};

const navItems = [
  ["biblioteca", "Biblioteca Digital", "biblioteca.html"],
  ["viewer", "Book Viewer", "book-viewer.html"],
  ["professor", "Painel do Professor", "professor.html"],
  ["avalia", "Avalia+", "avalia.html"],
  ["secretaria", "Secretaria Municipal", "secretaria.html"],
  ["gestor", "Gestor Escolar", "gestor.html"],
  ["familia", "Painel da Familia", "familia.html"],
];

const mobileItems = [
  ["biblioteca", "Inicio", "biblioteca.html"],
  ["viewer", "Livro", "book-viewer.html"],
  ["professor", "Professor", "professor.html"],
  ["avalia", "Avalia+", "avalia.html"],
  ["familia", "Mais", "familia.html"],
];

const renderAppPage = () => {
  const mount = document.querySelector("[data-app-page]");
  if (!mount) {
    return;
  }

  const activeKey = mount.dataset.appPage || "biblioteca";
  const activeModule = modules[activeKey] || modules.biblioteca;
  document.title = `${activeModule.title} | Raizes e Saberes`;

  const nav = navItems
    .map(([key, label, href]) => `<a class="${key === activeKey ? "is-active" : ""}" href="${href}">${label}</a>`)
    .join("");
  const mobileNav = mobileItems
    .map(([key, label, href]) => `<a class="${key === activeKey ? "is-active" : ""}" href="${href}">${label}</a>`)
    .join("");

  mount.innerHTML = `
    <div class="app-shell">
      <aside class="app-sidebar" aria-label="Navegacao principal">
        <a class="sidebar-logo" href="index.html" aria-label="Raizes e Saberes">
          <img src="logo-sidebar-dark.png" alt="Raizes e Saberes Ecossistema Educacional" onerror="this.hidden=true; this.nextElementSibling.hidden=false;" />
          <span class="sidebar-logo-fallback" hidden><strong>Raizes e Saberes</strong><em>Ecossistema Educacional</em></span>
        </a>
        <nav class="app-nav" aria-label="Master Screens">${nav}</nav>
        <section class="sidebar-profile">
          <img src="logo-app.png" alt="" onerror="this.hidden=true;" />
          <div><strong>Raizes e Saberes</strong><span>MASTER PACK V1</span></div>
        </section>
      </aside>
      <main class="app-main">
        <header class="app-topbar">
          <a class="icon-button menu-toggle" href="biblioteca.html" aria-label="Inicio">☰</a>
          <label class="app-search"><span>Pesquisar</span><input type="search" placeholder="Buscar livros, turmas, alunos, atividades..." /></label>
          <button class="top-filter" type="button">Filtros</button>
          <div class="top-actions" aria-label="Acoes"><span class="notif">3</span><span class="notif">2</span><div class="user-chip"><span>MS</span><strong>Ola, Professor<br />Marcos Silva</strong></div></div>
        </header>
        <section class="screen is-active route-screen" data-route-screen="${activeKey}">${activeModule.html}</section>
      </main>
    </div>
    <nav class="mobile-tabbar" aria-label="Navegacao mobile">${mobileNav}</nav>
  `;

  requestAnimationFrame(() => {
    document.querySelector(".route-screen")?.classList.add("is-mounted");
  });
};

renderAppPage();
