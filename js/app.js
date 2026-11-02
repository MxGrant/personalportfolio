import { projects, skills, approach, toolkit, contact } from './data.js';

/* --------------------------------------------------------------------------
   Icons
   -------------------------------------------------------------------------- */
const ICONS = {
  play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.8v.01"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  check: '<path d="M4 12.5l5 5L20 6.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M4 7l8 6 8-6"/>',
  linkedin:
    '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v7M7.5 7.2v.01M11.5 17v-4a2.6 2.6 0 0 1 5.2 0v4"/>',
  github:
    '<path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  download: '<path d="M12 3v12M7 11l5 5 5-5M5 21h14"/>',
  external:
    '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  pen: '<path d="M4 20l4.5-1.2L19 8.3a2.9 2.9 0 0 0-4.1-4.1L4.4 14.7z"/><path d="M13.5 5.5l5 5"/>',
  code: '<path d="M9 8l-4 4 4 4M15 8l4 4-4 4"/>',
  cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>',
  gamepad:
    '<rect x="2.5" y="7" width="19" height="10" rx="4.5"/><path d="M7 10v4M5 12h4M15.6 11h.01M17.6 13.2h.01"/>',
  database:
    '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  kanban:
    '<rect x="4" y="4" width="16" height="16" rx="2.5"/><path d="M9 8v8M15 8v5"/>',
  target:
    '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/>',
  compass:
    '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  bulb:
    '<path d="M9.5 18h5M10.5 21h3"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.6 1.2.6 2.2h6c0-1 .1-1.8.6-2.2A6 6 0 0 0 12 3z"/>',
  users:
    '<circle cx="9.5" cy="8" r="3.5"/><path d="M3.5 19v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M20.5 19v-1a4 4 0 0 0-3-3.8"/>',
  cycle:
    '<path d="M20 12a8 8 0 1 1-2.7-6"/><path d="M20 4v4.5h-4.5"/>'
};

const icon = (name, extra = '') =>
  `<svg class="icon ${extra}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] ?? ''}</svg>`;

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */
const esc = (value = '') =>
  String(value).replace(/[&<>"']/g, (char) => {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
  });

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const chipList = (items, label) => `
  <ul class="chips" ${label ? `aria-label="${esc(label)}"` : ''}>
    ${items.map((item) => `<li>${esc(item)}</li>`).join('')}
  </ul>`;

const placeholder = (text) => `<p class="ghost">[Placeholder — ${esc(text)}]</p>`;

/* --------------------------------------------------------------------------
   Featured project
   -------------------------------------------------------------------------- */
function renderFeatured() {
  const mount = document.getElementById('featured-mount');
  const project = projects.find((entry) => entry.featured) ?? projects[0];
  if (!mount || !project) return;

  const { poster } = project;

  mount.innerHTML = `
    <article class="featured" aria-labelledby="featured-title" style="--c1:${poster.c1};--c2:${poster.c2};--accent:${poster.accent}">
      <div class="featured__art" aria-hidden="true">
        <span class="featured__rings"></span>
        <span class="featured__glyph">${esc(poster.glyph)}</span>
        <span class="featured__word">${poster.words.map(esc).join('<br>')}</span>
      </div>
      <div class="featured__scrim" aria-hidden="true"></div>

      <div class="featured__content">
        <p class="eyebrow eyebrow--red"><span class="pulse-dot" aria-hidden="true"></span>Featured project</p>
        <h3 class="featured__title" id="featured-title">${esc(project.title)}</h3>
        <p class="featured__meta">${esc(project.category)}</p>
        <p class="featured__desc">${esc(project.overview)}</p>
        ${chipList(project.tech ?? [], 'Technologies')}
        <p class="featured__features">${(project.features ?? []).map(esc).join(' · ')}</p>
        <div class="featured__actions">
          <button class="btn btn--primary" type="button" data-project-open="${esc(project.id)}">
            ${icon('info')} More Info
          </button>
          <a class="btn btn--ghost" href="#row-projects">Browse all projects ${icon('arrow')}</a>
        </div>
      </div>
    </article>`;
}

/* --------------------------------------------------------------------------
   Project carousel
   -------------------------------------------------------------------------- */
function projectCard(project, index) {
  const { poster } = project;
  return `
    <article
      class="project-card"
      role="button"
      tabindex="0"
      data-project="${esc(project.id)}"
      aria-haspopup="dialog"
      aria-label="${esc(project.title)} — ${esc(project.category)}. Open project details."
      style="--c1:${poster.c1};--c2:${poster.c2};--accent:${poster.accent}"
    >
      <div class="poster poster--${esc(poster.motif)}" aria-hidden="true">
        <span class="poster__wash"></span>
        <span class="poster__motif"></span>
        <span class="poster__glyph">${esc(poster.glyph)}</span>
        <span class="poster__word">${poster.words.map(esc).join('<br>')}</span>
        <span class="poster__index">${String(index + 1).padStart(2, '0')}</span>
      </div>

      <div class="card__overlay">
        <div class="card__icons" aria-hidden="true">
          <span class="card__icon card__icon--play">${icon('play')}</span>
          <span class="card__icon">${icon('info')}</span>
        </div>
        <h4 class="card__title">${esc(project.title)}</h4>
        <p class="card__category">${esc(project.category)}</p>
        <p class="card__desc">${esc(project.description)}</p>
        <span class="card__cta">View details ${icon('arrow')}</span>
      </div>
    </article>`;
}

function renderProjects() {
  const track = document.getElementById('row-projects');
  if (!track) return;
  track.innerHTML = projects.map(projectCard).join('');
}

/* --------------------------------------------------------------------------
   Skills + approach carousels
   -------------------------------------------------------------------------- */
function renderSkills() {
  const track = document.getElementById('row-skills');
  if (!track) return;

  track.innerHTML = skills
    .map(
      (skill) => `
      <article class="tile">
        <div class="tile__top">
          <span class="tile__icon">${icon(skill.icon)}</span>
        </div>
        <h4 class="tile__title">${esc(skill.title)}</h4>
        <p class="tile__blurb">${esc(skill.blurb)}</p>
        <ul class="tile__tags" aria-label="${esc(skill.title)} tools">
          ${skill.tags.map((tag) => `<li class="tile__tag">${esc(tag)}</li>`).join('')}
        </ul>
      </article>`
    )
    .join('');
}

function renderApproach() {
  const track = document.getElementById('row-approach');
  if (!track) return;

  track.innerHTML = approach
    .map(
      (item, index) => `
      <article class="tile">
        <div class="tile__top">
          <span class="tile__icon">${icon(item.icon)}</span>
          <span class="tile__num" aria-hidden="true">0${index + 1}</span>
        </div>
        <h4 class="tile__title">${esc(item.title)}</h4>
        <p class="tile__blurb">${esc(item.blurb)}</p>
      </article>`
    )
    .join('');
}

function renderToolkit() {
  const grid = document.getElementById('skill-grid');
  if (!grid) return;

  grid.innerHTML = toolkit
    .map(
      (group) => `
      <article class="skill-card">
        <div class="skill-card__head">
          ${icon(group.icon)}
          <h3 class="skill-card__title">${esc(group.title)}</h3>
        </div>
        <ul class="skill-card__list">
          ${group.items.map((item) => `<li>${esc(item)}</li>`).join('')}
        </ul>
      </article>`
    )
    .join('');
}

/* --------------------------------------------------------------------------
   Contact
   -------------------------------------------------------------------------- */
function contactAction({ label, iconName, href, primary = false, download = false, placeholderText }) {
  if (!href) {
    return `<span class="btn ${primary ? 'btn--primary' : 'btn--ghost'} btn--placeholder" aria-disabled="true" title="${esc(placeholderText)}">
      ${icon(iconName)} ${esc(label)}
      <span class="action-flag">placeholder</span>
    </span>`;
  }

  const isExternal = /^https?:/i.test(href);
  return `<a class="btn ${primary ? 'btn--primary' : 'btn--ghost'}" href="${esc(href)}"
    ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}
    ${download ? 'download' : ''}>
    ${icon(iconName)} ${esc(label)}
  </a>`;
}

function renderContact() {
  const mount = document.getElementById('contact-actions');
  if (!mount) return;

  mount.innerHTML = [
    contactAction({
      label: contact.email ? contact.email : 'Email me',
      iconName: 'mail',
      href: contact.email ? `mailto:${contact.email}` : null,
      primary: true,
      placeholderText: 'Add your email address in js/data.js'
    }),
    contactAction({
      label: 'LinkedIn',
      iconName: 'linkedin',
      href: contact.linkedin,
      placeholderText: 'Add your LinkedIn profile URL in js/data.js'
    }),
    contactAction({
      label: 'GitHub',
      iconName: 'github',
      href: contact.github,
      placeholderText: 'Add your GitHub profile URL in js/data.js'
    }),
    contactAction({
      label: 'Download CV',
      iconName: 'download',
      href: contact.cv,
      download: true,
      placeholderText: 'Add your CV file path in js/data.js'
    })
  ].join('');
}

/* --------------------------------------------------------------------------
   Project dialog
   -------------------------------------------------------------------------- */
const dialog = document.getElementById('project-dialog');
const detailContent = document.getElementById('detail-content');
const detailClose = document.getElementById('detail-close');

function detailLink(label, iconName, href, placeholderText) {
  if (!href) {
    return `<span class="btn btn--ghost btn--sm btn--placeholder" aria-disabled="true" title="${esc(placeholderText)}">
      ${icon(iconName)} ${esc(label)} <span class="action-flag">placeholder</span>
    </span>`;
  }
  return `<a class="btn btn--ghost btn--sm" href="${esc(href)}" target="_blank" rel="noopener noreferrer">
    ${icon(iconName)} ${esc(label)}
  </a>`;
}

const blockText = (value, placeholderText) =>
  value ? `<p>${esc(value)}</p>` : placeholder(placeholderText);

function detailTemplate(project) {
  const { poster } = project;
  const shots = [1, 2, 3]
    .map(
      (n) => `
      <figure class="shot">
        <div class="shot__frame">
          <strong>Screenshot ${String(n).padStart(2, '0')}</strong>
          <span>Add a real image of ${esc(project.title)}</span>
        </div>
        <figcaption>Placeholder ${String(n).padStart(2, '0')}</figcaption>
      </figure>`
    )
    .join('');

  const features = project.features
    ? `<ul class="detail__features">${project.features
        .map((feature) => `<li>${icon('check')}<span>${esc(feature)}</span></li>`)
        .join('')}</ul>`
    : placeholder('list the key features of this project');

  const tech = project.tech
    ? chipList(project.tech, 'Technologies used')
    : placeholder('add the technologies and tools you used');

  return `
    <div class="detail__hero" style="--c1:${poster.c1};--c2:${poster.c2};--accent:${poster.accent}">
      <div class="detail__heroInner">
        <p class="eyebrow eyebrow--red">${project.featured ? 'Featured project' : 'Project details'}</p>
        <h2 class="detail__title" id="detail-title">${esc(project.title)}</h2>
        <p class="detail__meta"><span>${esc(project.category)}</span></p>
        <p class="detail__tagline">${esc(project.overview)}</p>
        <div class="detail__actions">
          ${detailLink('GitHub', 'github', project.links?.repo, 'Add the repository URL in js/data.js')}
          ${detailLink('Live demo', 'external', project.links?.demo, 'Add the live site or demo URL in js/data.js')}
        </div>
      </div>
    </div>

    <div class="detail__body">
      <div class="detail__main">
        <section class="detail__block">
          <h3>Project overview</h3>
          <p>${esc(project.overview)}</p>
        </section>

        <section class="detail__block">
          <h3>The problem I wanted to solve</h3>
          ${blockText(project.problem, 'describe the problem or brief behind this project')}
        </section>

        <section class="detail__block">
          <h3>My role &amp; contributions</h3>
          ${blockText(project.role, 'describe what you owned, built and decided')}
        </section>

        <section class="detail__block">
          <h3>Key features</h3>
          ${features}
        </section>

        <section class="detail__block">
          <h3>Screenshots</h3>
          <div class="shots">${shots}</div>
          <p class="detail__hint">Gallery images are labelled placeholders — replace them with real screenshots of ${esc(project.title)}.</p>
        </section>

        <section class="detail__block">
          <h3>Challenges &amp; what I learned</h3>
          ${blockText(project.learned, 'add the hardest part of the build and what you took from it')}
        </section>
      </div>

      <aside class="detail__side" aria-label="Project facts">
        <div class="detail__sideBox">
          <h3>Technologies &amp; tools</h3>
          ${tech}
        </div>

        <div class="detail__sideBox">
          <h3>Project facts</h3>
          <dl class="meta-list">
            <div><dt>Category</dt><dd>${esc(project.category)}</dd></div>
            <div><dt>Type</dt><dd>${project.featured ? 'Featured project' : 'Selected project'}</dd></div>
            <div><dt>Role</dt><dd>${project.role ? esc(project.role) : 'Placeholder — add your role'}</dd></div>
          </dl>
        </div>

        <div class="detail__sideBox">
          <h3>Links</h3>
          <p class="detail__linkNote">
            Repository and live links are placeholders. Add them to
            <code>js/data.js</code> to make these buttons active.
          </p>
        </div>
      </aside>
    </div>`;
}

function openProject(id) {
  const project = projects.find((entry) => entry.id === id);
  if (!project || !dialog || !detailContent) return;

  detailContent.innerHTML = detailTemplate(project);
  detailContent.scrollTop = 0;
  if (dialog.open) return;

  document.body.classList.add('is-locked');

  if (typeof dialog.showModal === 'function') {
    try {
      dialog.showModal();
    } catch (error) {
      document.body.classList.remove('is-locked');
      throw error;
    }
  } else {
    dialog.setAttribute('open', '');
  }
}

function closeProject() {
  if (!dialog) return;
  if (typeof dialog.close === 'function') {
    dialog.close();
  } else {
    dialog.removeAttribute('open');
  }
  document.body.classList.remove('is-locked');
}

function initDialog() {
  if (!dialog) return;

  detailClose?.addEventListener('click', closeProject);

  dialog.addEventListener('close', () => {
    document.body.classList.remove('is-locked');
  });

  // Click on the backdrop (the dialog element itself, outside the panel) closes it.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeProject();
  });
}

/* --------------------------------------------------------------------------
   Card activation
   -------------------------------------------------------------------------- */
function initCardActivation() {
  document.addEventListener('click', (event) => {
    const opener = event.target.closest('[data-project-open]');
    if (opener) {
      event.preventDefault();
      openProject(opener.dataset.projectOpen);
      return;
    }

    const card = event.target.closest('.project-card');
    if (card) openProject(card.dataset.project);
  });

  document.addEventListener('keydown', (event) => {
    const card = event.target.closest?.('.project-card');
    if (!card) return;
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      openProject(card.dataset.project);
    }
  });
}

/* --------------------------------------------------------------------------
   Carousels: buttons, keyboard, drag, edge states
   -------------------------------------------------------------------------- */
const carouselUpdaters = [];

function initCarousel(block) {
  const track = block.querySelector('.row-track');
  if (!track) return;

  const buttons = block.querySelectorAll('.row-btn');

  const step = () => {
    const first = track.firstElementChild;
    if (!first) return track.clientWidth * 0.8;
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 16;
    return first.getBoundingClientRect().width + gap;
  };

  const update = () => {
    const maxScroll = track.scrollWidth - track.clientWidth - 2;
    buttons.forEach((button) => {
      const direction = Number(button.dataset.dir);
      button.disabled = direction < 0 ? track.scrollLeft <= 2 : track.scrollLeft >= maxScroll;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      track.scrollBy({
        left: Number(button.dataset.dir) * step(),
        behavior: reducedMotion.matches ? 'auto' : 'smooth'
      });
    });
  });

  track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });

  track.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    track.scrollBy({
      left: (event.key === 'ArrowRight' ? 1 : -1) * step(),
      behavior: reducedMotion.matches ? 'auto' : 'smooth'
    });
  });

  // Pointer drag for desktop; touch devices use native scrolling.
  let startX = 0;
  let startScroll = 0;
  let dragging = false;
  let moved = false;

  track.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch' || event.button !== 0) return;
    dragging = true;
    moved = false;
    startX = event.clientX;
    startScroll = track.scrollLeft;
    track.classList.add('is-dragging');
  });

  track.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    const delta = event.clientX - startX;
    if (!moved && Math.abs(delta) > 6) {
      moved = true;
      track.setPointerCapture?.(event.pointerId);
    }
    if (moved) {
      track.scrollLeft = startScroll - delta;
      event.preventDefault();
    }
  });

  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    track.classList.remove('is-dragging');
    if (moved) {
      track.dataset.dragged = 'true';
      window.setTimeout(() => {
        track.dataset.dragged = 'false';
      }, 0);
    }
  };

  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);
  track.addEventListener('pointerleave', endDrag);

  // Suppress the click that follows a drag.
  track.addEventListener(
    'click',
    (event) => {
      if (track.dataset.dragged === 'true') {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    true
  );

  if ('ResizeObserver' in window) {
    new ResizeObserver(update).observe(track);
  }

  update();
  carouselUpdaters.push(update);
}

function initCarousels() {
  document.querySelectorAll('.row-block').forEach(initCarousel);
}

/* --------------------------------------------------------------------------
   Navigation
   -------------------------------------------------------------------------- */
function initNav() {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  const progress = document.getElementById('scroll-progress');
  if (!nav) return;

  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    toggle?.setAttribute('aria-expanded', String(open));
    toggle?.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };

  toggle?.addEventListener('click', () => {
    setMenu(!nav.classList.contains('is-open'));
  });

  links?.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenu(false);
      toggle?.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860 && nav.classList.contains('is-open')) setMenu(false);
  });

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progress.style.width = `${ratio * 100}%`;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll spy
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.nav__link')];

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    // Only sections represented in the navigation drive the active state.
    sections
      .filter((section) => navLinks.some((link) => link.getAttribute('href') === `#${section.id}`))
      .forEach((section) => spy.observe(section));
  }
}

/* --------------------------------------------------------------------------
   Reveal on scroll
   -------------------------------------------------------------------------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || reducedMotion.matches) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );

  items.forEach((item) => observer.observe(item));
}

/* --------------------------------------------------------------------------
   Boot
   -------------------------------------------------------------------------- */
function init() {
  renderFeatured();
  renderProjects();
  renderSkills();
  renderApproach();
  renderToolkit();
  renderContact();

  initNav();
  initDialog();
  initCardActivation();
  initCarousels();
  initReveal();

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Recalculate carousel edges once webfonts have settled.
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => carouselUpdaters.forEach((update) => update()));
  }

  // Handle reduced-motion changes without a reload.
  reducedMotion.addEventListener?.('change', () => {
    if (!reducedMotion.matches) return;
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
