/* ==========================================================================
   IMMERSIO SUPREMA - APPLE INTERACTIVE ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAppleNavbar();
  initBackgroundVideo();
  initDustParticles();
  initStatisticsCounter();
  initInteractiveSandbox();
  initPortfolioFilters();
  initCinemaModal();
  initGlobalClocks();
  initProposalForm();
});

/* --------------------------------------------------------------------------
   1. NAVBAR & SCROLL EFFECTS
   -------------------------------------------------------------------------- */
function initAppleNavbar() {
  const navbar = document.getElementById('main-navbar');
  const navLinks = document.querySelectorAll('.apple-nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

/* --------------------------------------------------------------------------
   2. HERO VIDEO & MEDIA CONTROLS
   -------------------------------------------------------------------------- */
function initBackgroundVideo() {
  const heroVideo = document.getElementById('hero-video');
  const soundToggleBtn = document.getElementById('sound-toggle');
  const soundToggleHero = document.getElementById('sound-toggle-hero');
  const soundIcon = document.getElementById('sound-icon');
  const soundIconHero = document.getElementById('sound-icon-hero');

  const playToggleBtn = document.getElementById('video-play-toggle');
  const playIcon = document.getElementById('play-icon');

  function toggleAudio() {
    if (!heroVideo) return;
    heroVideo.muted = !heroVideo.muted;
    const iconClass = heroVideo.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    if (soundIcon) soundIcon.className = iconClass;
    if (soundIconHero) soundIconHero.className = iconClass;
  }

  if (soundToggleBtn) soundToggleBtn.addEventListener('click', toggleAudio);
  if (soundToggleHero) soundToggleHero.addEventListener('click', toggleAudio);

  if (heroVideo && playToggleBtn) {
    playToggleBtn.addEventListener('click', () => {
      if (heroVideo.paused) {
        heroVideo.play();
        if (playIcon) playIcon.className = 'fas fa-pause';
      } else {
        heroVideo.pause();
        if (playIcon) playIcon.className = 'fas fa-play';
      }
    });
  }
}

/* --------------------------------------------------------------------------
   3. DELICATE SILVER & GOLD DUST PARTICLES
   -------------------------------------------------------------------------- */
function initDustParticles() {
  const canvas = document.getElementById('desert-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 60;

  class DustParticle {
    constructor() { this.reset(); }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.4;
      this.speedX = Math.random() * 0.4 + 0.1;
      this.speedY = Math.random() * -0.3 - 0.05;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.color = Math.random() > 0.4 ? '#f5f5f7' : '#e2b755';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x > width || this.y < 0) {
        this.reset();
        this.x = Math.random() * width * 0.5;
        this.y = height + 10;
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new DustParticle());
  }

  function renderLoop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(renderLoop);
  }

  renderLoop();
}

/* --------------------------------------------------------------------------
   4. STATISTICS ANIMATED COUNT-UP
   -------------------------------------------------------------------------- */
function initStatisticsCounter() {
  const statNumbers = document.querySelectorAll('.spec-number-val');
  let animated = false;

  function checkScroll() {
    const statsSection = document.querySelector('.apple-specs-section');
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0 && !animated) {
      animated = true;
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'), 10);
        const suffix = stat.textContent.includes('+') ? '+' : (stat.textContent.includes('%') ? '%' : '');
        let count = 0;
        const duration = 1800;
        const stepTime = Math.max(20, Math.floor(duration / target));

        const timer = setInterval(() => {
          count += Math.ceil(target / 40);
          if (count >= target) {
            stat.textContent = target + suffix;
            clearInterval(timer);
          } else {
            stat.textContent = count + suffix;
          }
        }, stepTime);
      });
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll();
}

/* --------------------------------------------------------------------------
   5. INTERACTIVE REAL-TIME SANDBOX WIDGET
   -------------------------------------------------------------------------- */
function initInteractiveSandbox() {
  const focalSlider = document.getElementById('range-focal');
  const lightSlider = document.getElementById('range-light');
  const sandSlider = document.getElementById('range-sand');

  const valFocal = document.getElementById('val-focal');
  const valLight = document.getElementById('val-light');
  const valSand = document.getElementById('val-sand');

  const labelFocalNum = document.getElementById('label-focal-num');
  const labelLightNum = document.getElementById('label-light-num');
  const labelSandNum = document.getElementById('label-sand-num');

  const sandboxVideo = document.getElementById('sandbox-video-viewport');
  const btnReset = document.getElementById('btn-reset-sandbox');

  function updateViewport() {
    if (!sandboxVideo) return;

    const focal = focalSlider ? focalSlider.value : 50;
    const light = lightSlider ? lightSlider.value : 80;
    const sand = sandSlider ? sandSlider.value : 25;

    if (valFocal) valFocal.textContent = `${focal}mm`;
    if (labelFocalNum) labelFocalNum.textContent = `${focal}mm`;

    if (valLight) valLight.textContent = `${light}%`;
    if (labelLightNum) labelLightNum.textContent = `${light}%`;

    if (valSand) valSand.textContent = `${sand}%`;
    if (labelSandNum) labelSandNum.textContent = `${sand}%`;

    const brightnessVal = light / 80;
    const blurVal = (105 - focal) / 25;
    const sepiaVal = sand / 100;

    sandboxVideo.style.filter = `brightness(${brightnessVal}) blur(${blurVal}px) sepia(${sepiaVal * 0.3})`;
  }

  if (focalSlider) focalSlider.addEventListener('input', updateViewport);
  if (lightSlider) lightSlider.addEventListener('input', updateViewport);
  if (sandSlider) sandSlider.addEventListener('input', updateViewport);

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (focalSlider) focalSlider.value = 50;
      if (lightSlider) lightSlider.value = 80;
      if (sandSlider) sandSlider.value = 25;
      updateViewport();
    });
  }
}

/* --------------------------------------------------------------------------
   6. PORTFOLIO SHOWCASE FILTERS
   -------------------------------------------------------------------------- */
function initPortfolioFilters() {
  const filterTabs = document.querySelectorAll('.apple-filter-btn');
  const portfolioCards = document.querySelectorAll('.apple-work-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. CINEMA LIGHTBOX MODAL PLAYER
   -------------------------------------------------------------------------- */
function initCinemaModal() {
  const modal = document.getElementById('cinema-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeCinemaModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCinemaModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCinemaModal();
  });
}

function openCinemaModal(title, description) {
  const modal = document.getElementById('cinema-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalVideo = document.getElementById('modal-video-player');

  if (modalTitle) modalTitle.textContent = title;
  if (modalDesc) modalDesc.textContent = description;

  if (modal) modal.classList.add('active');
  if (modalVideo) {
    modalVideo.currentTime = 0;
    modalVideo.play();
  }
}

function closeCinemaModal() {
  const modal = document.getElementById('cinema-modal');
  const modalVideo = document.getElementById('modal-video-player');

  if (modal) modal.classList.remove('active');
  if (modalVideo) modalVideo.pause();
}

/* --------------------------------------------------------------------------
   8. GLOBAL STUDIO TIMEZONES
   -------------------------------------------------------------------------- */
function initGlobalClocks() {
  function updateClocks() {
    const now = new Date();

    const van = new Date(now.toLocaleString('en-US', { timeZone: 'America/Vancouver' }));
    const la = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    const lon = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/London' }));
    const dxb = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }));
    const ruh = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Riyadh' }));
    const tyo = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));

    const format = date => date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    const vanEl = document.getElementById('clock-van');
    const laEl = document.getElementById('clock-la');
    const lonEl = document.getElementById('clock-lon');
    const dxbEl = document.getElementById('clock-dxb');
    const ruhEl = document.getElementById('clock-ruh');
    const tyoEl = document.getElementById('clock-tyo');

    if (vanEl) vanEl.textContent = format(van);
    if (laEl) laEl.textContent = format(la);
    if (lonEl) lonEl.textContent = format(lon);
    if (dxbEl) dxbEl.textContent = format(dxb);
    if (ruhEl) ruhEl.textContent = format(ruh);
    if (tyoEl) tyoEl.textContent = format(tyo);
  }

  updateClocks();
  setInterval(updateClocks, 30000);
}

/* --------------------------------------------------------------------------
   9. PROPOSAL FORM SUBMISSION
   -------------------------------------------------------------------------- */
function initProposalForm() {
  const form = document.getElementById('proposal-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.apple-btn-white-pill');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<span>Encrypting & Transmitting...</span>';
    submitBtn.style.opacity = '0.7';

    setTimeout(() => {
      submitBtn.innerHTML = '<span>Proposal Transmitted Successfully ✓</span>';
      submitBtn.style.background = '#34d399';
      submitBtn.style.color = '#000000';
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.opacity = '1';
        submitBtn.style.background = '';
        submitBtn.style.color = '';
      }, 4000);
    }, 1800);
  });
}
