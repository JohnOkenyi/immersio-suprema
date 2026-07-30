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
  initCyberHouseEngine();
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

  if (sandboxVideo) {
    sandboxVideo.play().catch(() => {});
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
    const targetCard = e.target.closest('.apple-pro-card, .apple-strip-card, .training-card, .apple-work-card, .apple-filter-btn, .house-wall, .house-nav-tab');
    if (targetCard && !targetCard.dataset.soundBound) {
      targetCard.dataset.soundBound = 'true';
      targetCard.addEventListener('mouseenter', () => playUICardHoverSound());
      targetCard.addEventListener('click', () => playUICardClickSound());
    }
  });
}

/* --------------------------------------------------------------------------
   8.1 INLINE LOCAL CARD VIDEO PLAYER (Plays showreelone.mp4 inside card box)
   -------------------------------------------------------------------------- */
function playCardLocalVideo(cardElement, videoSrc) {
  if (!cardElement) return;

  const imgContainer = cardElement.querySelector('.work-img-container');
  if (!imgContainer) return;

  if (typeof playUICardClickSound === 'function') playUICardClickSound();

  // If video is already playing inside this card, return
  if (imgContainer.querySelector('.inline-card-video')) return;

  // Create HTML5 video element (Cloud CDN stream)
  const video = document.createElement('video');
  video.className = 'inline-card-video';
  video.src = videoSrc || 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreelone.mp4';
  video.autoplay = true;
  video.controls = true;
  video.playsInline = true;
  video.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 20px; z-index: 10;';

  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-inline-video-btn';
  closeBtn.innerHTML = '<i class="fas fa-times"></i> Close Video';
  closeBtn.onclick = function(e) {
    e.stopPropagation();
    video.pause();
    video.remove();
    closeBtn.remove();
  };

  imgContainer.style.position = 'relative';
  imgContainer.appendChild(video);
  imgContainer.appendChild(closeBtn);
}

/* --------------------------------------------------------------------------
   9. PHOTOREALISTIC WEBGL THREE.JS 3D CLAPPERBOARD ARCHITECTURAL HOUSE ENGINE
   -------------------------------------------------------------------------- */
let threeScene, threeCamera, threeRenderer, houseGroup;
let targetHouseRotationY = -0.4;
let currentHouseRotationY = -0.4;
let houseAutoRotate = true;
let isDraggingHouse = false;
let startX = 0;
let previousRotationY = 0;

function rotateHouseToAngle(targetAngleRad) {
  targetHouseRotationY = (targetAngleRad * Math.PI) / 180;
  updateHouseNavTabs((targetAngleRad % 360 + 360) % 360);
}

function toggleHouseAutoRotate() {
  houseAutoRotate = !houseAutoRotate;
  const toggleBtn = document.getElementById('house-autorotate-toggle');
  if (toggleBtn) {
    if (houseAutoRotate) {
      toggleBtn.classList.add('active');
      toggleBtn.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Auto-Rotate: ON';
    } else {
      toggleBtn.classList.remove('active');
      toggleBtn.innerHTML = '<i class="fas fa-play"></i> Auto-Rotate: OFF';
    }
  }
}

function updateHouseNavTabs(angleDeg) {
  const tabs = document.querySelectorAll('.house-nav-tab:not(.auto-rotate-btn)');
  tabs.forEach(tab => tab.classList.remove('active'));

  const normalized = ((angleDeg % 360) + 360) % 360;
  if (normalized >= 315 || normalized < 45) {
    if (tabs[0]) tabs[0].classList.add('active');
  } else if (normalized >= 45 && normalized < 135) {
    if (tabs[2]) tabs[2].classList.add('active');
  } else if (normalized >= 135 && normalized < 225) {
    if (tabs[3]) tabs[3].classList.add('active');
  } else if (normalized >= 225 && normalized < 315) {
    if (tabs[1]) tabs[1].classList.add('active');
  }
}

function initCyberHouseEngine() {
  const container = document.getElementById('cyber-house-viewport');
  if (!container || typeof THREE === 'undefined') return;

  const width = container.clientWidth || 1050;
  const height = 560;

  // 1. Scene & Camera Setup (Calibrated for tight, high-impact UI/UX centering)
  threeScene = new THREE.Scene();
  threeScene.background = null;

  threeCamera = new THREE.PerspectiveCamera(36, width / height, 0.1, 1000);
  threeCamera.position.set(0, 0.8, 22.5);
  threeCamera.lookAt(0, 0.3, 0);

  // 2. WebGL Renderer with Logarithmic Depth Buffer to Eliminate Z-Fighting Flicker
  threeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: true, powerPreference: 'high-performance' });
  threeRenderer.setSize(width, height);
  threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  threeRenderer.shadowMap.enabled = true;
  threeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

  container.innerHTML = '';
  container.appendChild(threeRenderer.domElement);

  // 3. Studio Lighting Rig
  const ambientLight = new THREE.AmbientLight(0x404054, 1.4);
  threeScene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
  keyLight.position.set(14, 20, 16);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 2048;
  keyLight.shadow.mapSize.height = 2048;
  threeScene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffd60a, 1.2);
  fillLight.position.set(-14, 10, -12);
  threeScene.add(fillLight);

  const entranceLight = new THREE.PointLight(0xffedd5, 3.2, 10);
  entranceLight.position.set(-2.0, -0.8, 4.4);
  threeScene.add(entranceLight);

  const garageLight = new THREE.PointLight(0xf97316, 2.6, 10);
  garageLight.position.set(3.2, -0.8, 4.4);
  threeScene.add(garageLight);

  // 4. Master 3D House Group
  houseGroup = new THREE.Group();
  houseGroup.position.set(0, -0.6, 0);
  threeScene.add(houseGroup);

  // 5. PBR Materials
  const matteConcreteMat = new THREE.MeshStandardMaterial({ color: 0x0d0c12, roughness: 0.82, metalness: 0.15 });
  const aluminumMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.35, metalness: 0.85 });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x0f172a,
    transparent: true,
    opacity: 0.45,
    roughness: 0.1,
    metalness: 0.9,
    clearcoat: 1.0
  });
  const goldGlowMat = new THREE.MeshStandardMaterial({ color: 0xffd60a, roughness: 0.2, metalness: 0.9, emissive: 0xffd60a, emissiveIntensity: 0.35 });

  // 6. Clean Slate Canvas Texture Generator (Removed SCENE/TAKE/ROLL top header & PROD.CO/DIRECTOR footer per user request)
  function createSlateMaterial(titleText, descText) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');

    // Matte Black Slate Facade Background
    ctx.fillStyle = '#0a090e';
    ctx.fillRect(0, 0, 1024, 768);

    // Outer Slate Border Accent
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 6;
    ctx.strokeRect(20, 20, 984, 728);

    // Target Industry Service Badge
    ctx.fillStyle = '#ffd60a';
    ctx.font = 'bold 36px Montserrat, sans-serif';
    ctx.fillText('PROGRAM & SERVICE OFFERED:', 60, 110);

    // Divider Line under Badge
    ctx.strokeStyle = '#ffd60a';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(60, 135); ctx.lineTo(964, 135);
    ctx.stroke();

    // Main Industry Title (Big, Bold, White)
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 52px Montserrat, sans-serif';
    ctx.fillText(titleText, 60, 215);

    // Secondary White Divider Line
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(60, 250); ctx.lineTo(964, 250);
    ctx.stroke();

    // Detailed Service Description Text (Large, Legible 36px Font)
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '36px Inter, sans-serif';
    
    const words = descText.split(' ');
    let line = '';
    let y = 330;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > 880 && n > 0) {
        ctx.fillText(line, 60, y);
        line = words[n] + ' ';
        y += 52;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 60, y);

    const texture = new THREE.CanvasTexture(canvas);
    return new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5, metalness: 0.1 });
  }

  // Generate 4 Facade Materials for Each Surface Face (Cleaned & Focused)
  const frontMat = createSlateMaterial(
    'FILM & TELEVISION STUDIOS',
    'Industry-accredited training & specialized masterclasses delivered on-site & online: ICVFX LED Wall Virtual Production, Houdini Fluid Physics, Unreal Engine 5.4, and Motion Capture.'
  );

  const rightMat = createSlateMaterial(
    'ANIMATION & GAME DEV STUDIOS',
    'Industry-accredited training & specialized masterclasses delivered on-site & online: AAA Game Pipelines, Real-Time Shaders, Procedural Art, MetaHuman Rigging, and C++ Unreal Engine.'
  );

  const backMat = createSlateMaterial(
    'UNIVERSITIES & FILM SCHOOLS',
    'Industry-accredited training & specialized masterclasses delivered on-site & online: Turnkey Degree Curricula, Faculty Certification Programs, Virtual Production Campus Setup, and Student Capstone Mentorship.'
  );

  const leftMat = createSlateMaterial(
    'DEFENSE & GOVERNMENT AGENCIES',
    'Industry-accredited training & specialized masterclasses delivered on-site & online: Tactical VR Combat Flight Simulation, Aerospace Machinery Digital Twins, Biometric Telemetry, and Mission Rehearsal.'
  );

  // 7. Solid Watertight House Geometry (Single Solid Flush Box Architecture)
  const houseMainBox = new THREE.Mesh(new THREE.BoxGeometry(11, 7.2, 7), matteConcreteMat);
  houseMainBox.castShadow = true;
  houseMainBox.receiveShadow = true;
  houseGroup.add(houseMainBox);

  // Front Slate Surface Facade (0°)
  const frontSlateMesh = new THREE.Mesh(new THREE.PlaneGeometry(10.8, 7.0), frontMat);
  frontSlateMesh.position.set(0, 0, 3.52);
  houseGroup.add(frontSlateMesh);

  // Right Slate Surface Facade (90°)
  const rightSlateMesh = new THREE.Mesh(new THREE.PlaneGeometry(6.8, 7.0), rightMat);
  rightSlateMesh.rotation.y = Math.PI / 2;
  rightSlateMesh.position.set(5.52, 0, 0);
  houseGroup.add(rightSlateMesh);

  // Back Slate Surface Facade (180°)
  const backSlateMesh = new THREE.Mesh(new THREE.PlaneGeometry(10.8, 7.0), backMat);
  backSlateMesh.rotation.y = Math.PI;
  backSlateMesh.position.set(0, 0, -3.52);
  houseGroup.add(backSlateMesh);

  // Left Slate Surface Facade (-90°)
  const leftSlateMesh = new THREE.Mesh(new THREE.PlaneGeometry(6.8, 7.0), leftMat);
  leftSlateMesh.rotation.y = -Math.PI / 2;
  leftSlateMesh.position.set(-5.52, 0, 0);
  houseGroup.add(leftSlateMesh);

  // 8. Hinged Top Clapstick Roof Structure (Attached with Metal Bracket & Bolts)
  const clapstickCanvas = document.createElement('canvas');
  clapstickCanvas.width = 512;
  clapstickCanvas.height = 64;
  const cctx = clapstickCanvas.getContext('2d');
  cctx.fillStyle = '#09090b';
  cctx.fillRect(0, 0, 512, 64);
  cctx.fillStyle = '#f8fafc';
  for (let i = 0; i < 8; i++) {
    cctx.beginPath();
    cctx.moveTo(i * 70 + 20, 0);
    cctx.lineTo(i * 70 + 60, 0);
    cctx.lineTo(i * 70 + 30, 64);
    cctx.lineTo(i * 70 - 10, 64);
    cctx.fill();
  }
  const clapstickTex = new THREE.CanvasTexture(clapstickCanvas);
  clapstickTex.wrapS = THREE.RepeatWrapping;
  clapstickTex.repeat.set(2, 1);
  const clapstickMat = new THREE.MeshStandardMaterial({
    map: clapstickTex,
    roughness: 0.4,
    metalness: 0.3,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1
  });

  // Fixed Base Eave Stick (Positioned at Z = 3.18)
  const fixedStick = new THREE.Mesh(new THREE.BoxGeometry(11.2, 1.2, 1.2), clapstickMat);
  fixedStick.position.set(0, 4.0, 3.18);
  houseGroup.add(fixedStick);

  // Angled Top Open Clapstick (Positioned at Z = 3.42 to prevent depth overlap flicker)
  const topStick = new THREE.Mesh(new THREE.BoxGeometry(11.2, 1.2, 1.2), clapstickMat);
  topStick.position.set(0.6, 5.2, 3.42);
  topStick.rotation.z = -0.26;
  houseGroup.add(topStick);

  // Metal Corner Hinge Bracket & 3 Stainless Bolts
  const hingePlate = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.2, 1.4), aluminumMat);
  hingePlate.position.set(-5.2, 4.5, 3.2);
  houseGroup.add(hingePlate);

  const boltGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.5, 16);
  const boltMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.2, metalness: 0.9 });

  const b1 = new THREE.Mesh(boltGeo, boltMat); b1.rotation.x = Math.PI / 2; b1.position.set(-5.4, 5.0, 3.2); houseGroup.add(b1);
  const b2 = new THREE.Mesh(boltGeo, boltMat); b2.rotation.x = Math.PI / 2; b2.position.set(-5.0, 5.0, 3.2); houseGroup.add(b2);
  const b3 = new THREE.Mesh(boltGeo, boltMat); b3.rotation.x = Math.PI / 2; b3.position.set(-5.2, 4.0, 3.2); houseGroup.add(b3);

  // 9. Pedestal Turntable Base
  const pedestalBase = new THREE.Mesh(new THREE.CylinderGeometry(8.5, 9.0, 0.6, 64), aluminumMat);
  pedestalBase.position.set(0, -4.0, 0);
  houseGroup.add(pedestalBase);

  const glowRing = new THREE.Mesh(new THREE.TorusGeometry(8.2, 0.08, 16, 100), goldGlowMat);
  glowRing.rotation.x = Math.PI / 2;
  glowRing.position.set(0, -3.6, 0);
  houseGroup.add(glowRing);

  // 12. Render & Mouse Drag Event Loop
  function animateThree() {
    requestAnimationFrame(animateThree);

    if (houseAutoRotate && !isDraggingHouse) {
      targetHouseRotationY += 0.005;
    }

    currentHouseRotationY += (targetHouseRotationY - currentHouseRotationY) * 0.1;
    houseGroup.rotation.y = currentHouseRotationY;

    const angleDeg = ((currentHouseRotationY * 180 / Math.PI) % 360 + 360) % 360;
    updateHouseNavTabs(angleDeg);

    threeRenderer.render(threeScene, threeCamera);
  }

  animateThree();

  // Pointer Drag 3D Rotation Controls
  function onPointerDown(e) {
    isDraggingHouse = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX);
    previousRotationY = targetHouseRotationY;
  }

  function onPointerMove(e) {
    if (!isDraggingHouse) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX);
    const deltaX = currentX - startX;
    targetHouseRotationY = previousRotationY + deltaX * 0.008;
  }

  function onPointerUp() {
    isDraggingHouse = false;
  }

  container.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  container.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);

  window.addEventListener('resize', () => {
    if (!container) return;
    const w = container.clientWidth || 1050;
    const h = 560;
    threeCamera.aspect = w / h;
    threeCamera.updateProjectionMatrix();
    threeRenderer.setSize(w, h);
  });
}
