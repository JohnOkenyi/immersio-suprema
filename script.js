/* ==========================================================================
   IMMERSIO SUPREMA - LOST BOYS VFX CAMPUS INTERACTIVE ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initVFXNavbar();
  initBackgroundVideo();
  initInteractiveSandbox();
  initPortfolioFilters();
  initCinemaModal();
  initProposalForm();
  initHero3DCard();
  initCardHoverSoundEffects();
});

/* --------------------------------------------------------------------------
   1. NAVBAR & SCROLL EFFECTS
   -------------------------------------------------------------------------- */
function initVFXNavbar() {
  const navbar = document.getElementById('main-navbar');
  const navLinks = document.querySelectorAll('.vfx-nav-link');
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
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
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
   2. HERO VIDEO & MEDIA CONTROLS (OPTIMIZED 60FPS SMOOTH PLAYBACK)
   -------------------------------------------------------------------------- */
function initBackgroundVideo() {
  const heroVideo = document.getElementById('hero-video');
  const soundToggleBtn = document.getElementById('sound-toggle');
  const soundToggleHero = document.getElementById('sound-toggle-hero');
  const soundIcon = document.getElementById('sound-icon');
  const soundIconHero = document.getElementById('sound-icon-hero');

  const playToggleBtn = document.getElementById('video-play-toggle');
  const playIcon = document.getElementById('play-icon');

  if (heroVideo) {
    heroVideo.play().catch(() => {
      document.addEventListener('click', () => { heroVideo.play(); }, { once: true });
    });
  }

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
   3. INTERACTIVE REAL-TIME SANDBOX WIDGET
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
   4. PORTFOLIO SHOWCASE FILTERS
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
   5. CINEMA LIGHTBOX MODAL PLAYER
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
   6. PROPOSAL / APPLICATION FORM SUBMISSION
   -------------------------------------------------------------------------- */
function initProposalForm() {
  const form = document.getElementById('proposal-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.vfx-btn-submit-red');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<span>TRANSMITTING APPLICATION...</span>';
    submitBtn.style.opacity = '0.7';

    setTimeout(() => {
      submitBtn.innerHTML = '<span>APPLICATION TRANSMITTED SUCCESSFULLY ✓</span>';
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

/* --------------------------------------------------------------------------
   7. DYNAMIC INTERACTIVE 3D TILT FOR HERO EXTRUDED CARD
   -------------------------------------------------------------------------- */
function initHero3DCard() {
  const heroSection = document.getElementById('home');
  const heroCard = document.querySelector('.apple-hero-content');

  if (!heroSection || !heroCard) return;

  heroCard.addEventListener('click', (e) => {
    if (e.target.closest('.apple-btn-white-pill') || e.target.closest('.apple-btn-glass-pill')) {
      return;
    }
    heroCard.classList.toggle('card-extruded-active');
  });

  heroSection.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 900 || heroCard.classList.contains('card-extruded-active')) return;
    const rect = heroSection.getBoundingClientRect();
    const distFromCenter = Math.abs(e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);

    const zOffset = 65 + (1 - Math.min(distFromCenter, 1)) * 30;

    heroCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(${zOffset}px)`;
  });

  heroSection.addEventListener('mouseleave', () => {
    if (window.innerWidth <= 900 || heroCard.classList.contains('card-extruded-active')) return;
    heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(65px)';
  });
}

/* --------------------------------------------------------------------------
   8. SCI-FI GAME UI HOVER & SELECTION SOUND SYNTHESIZER (WEB AUDIO API)
   -------------------------------------------------------------------------- */
let uiAudioCtx = null;

function getUIAudioContext() {
  if (!uiAudioCtx) {
    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
    if (AudioCtxClass) {
      uiAudioCtx = new AudioCtxClass();
    }
  }
  if (uiAudioCtx && uiAudioCtx.state === 'suspended') {
    uiAudioCtx.resume();
  }
  return uiAudioCtx;
}

// Crisp Sci-Fi Game UI Menu Hover Selection Sound (Pitch Sweep 750Hz -> 1350Hz)
function playUICardHoverSound() {
  try {
    const ctx = getUIAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(750, now);
    osc.frequency.exponentialRampToValueAtTime(1350, now + 0.05);

    gain.gain.setValueAtTime(0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  } catch (e) {
    // Non-blocking Web Audio error handler
  }
}

// Crisp Sci-Fi Game Selection Click Sound (Pitch Sweep 1300Hz -> 650Hz)
function playUICardClickSound() {
  try {
    const ctx = getUIAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1300, now);
    osc.frequency.exponentialRampToValueAtTime(650, now + 0.08);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch (e) {}
}

function initCardHoverSoundEffects() {
  // Target all interactive cards and elements across the website
  const cardSelectors = [
    '.apple-pro-card',
    '.apple-strip-card',
    '.training-card',
    '.apple-work-card',
    '.apple-hero-3d-card',
    '.apple-form-card',
    '.apple-btn-white-pill',
    '.apple-btn-glass-pill',
    '.apple-btn-secondary-sm',
    '.vfx-btn-submit-red',
    '.apple-filter-btn',
    '.vfx-nav-link'
  ].join(', ');

  const cards = document.querySelectorAll(cardSelectors);

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      playUICardHoverSound();
    });

    card.addEventListener('click', () => {
      playUICardClickSound();
    });
  });

  // Dynamic delegation for dynamic elements
  document.addEventListener('mouseover', (e) => {
    const targetCard = e.target.closest('.apple-pro-card, .apple-strip-card, .training-card, .apple-work-card, .apple-filter-btn');
    if (targetCard && !targetCard.dataset.soundBound) {
      targetCard.dataset.soundBound = 'true';
      targetCard.addEventListener('mouseenter', () => playUICardHoverSound());
      targetCard.addEventListener('click', () => playUICardClickSound());
    }
  });
}
