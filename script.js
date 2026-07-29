/* ==========================================================================
   IMMERSIO SUPREMA - INTERACTIVE JAVASCRIPT ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initDesertParticles();
  initBackgroundVideo();
  renderBrandLogos();
  renderMoviePosters();
  initCarouselNav();
  initSimSandbox();
  initModals();
  initContactForm();
  initTimezones();
});

/* --------------------------------------------------------------------------
   1. NAVBAR & SCROLL EFFECTS
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy active indicator
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. DESERT SAND DUST PARTICLES CANVAS
   -------------------------------------------------------------------------- */
function initDesertParticles() {
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
  const numParticles = 70;

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.5 + 0.5;
      this.speedX = Math.random() * 0.8 + 0.2;
      this.speedY = Math.random() * -0.5 - 0.1;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.3 ? '#d4af37' : '#c85a32';
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
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

/* --------------------------------------------------------------------------
   3. BACKGROUND VIDEO CONTROLS
   -------------------------------------------------------------------------- */
function initBackgroundVideo() {
  const video = document.getElementById('hero-video');
  const soundBtn = document.getElementById('sound-toggle');
  const soundIcon = soundBtn ? soundBtn.querySelector('i') : null;

  if (video && soundBtn) {
    soundBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      if (video.muted) {
        soundIcon.className = 'fas fa-volume-mute';
        soundBtn.setAttribute('title', 'Unmute Sound');
      } else {
        soundIcon.className = 'fas fa-volume-up';
        soundBtn.setAttribute('title', 'Mute Sound');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   4. 40 BRAND LOGOS GRID (Lost Boys VFX Studios Style)
   -------------------------------------------------------------------------- */
const brandData = [
  { name: 'Google', icon: 'fab fa-google' },
  { name: 'Coca Cola', icon: 'fas fa-wine-bottle' },
  { name: 'Nike', icon: 'fas fa-running' },
  { name: 'Apple', icon: 'fab fa-apple' },
  { name: 'Tesla', icon: 'fas fa-car-battery' },
  { name: 'Rolex', icon: 'fas fa-clock' },
  { name: 'Porsche', icon: 'fas fa-car-side' },
  { name: 'Samsung', icon: 'fas fa-mobile-alt' },
  { name: 'Sony', icon: 'fas fa-gamepad' },
  { name: 'Red Bull', icon: 'fas fa-bolt' },
  { name: 'Louis Vuitton', icon: 'fas fa-gem' },
  { name: 'Mercedes-Benz', icon: 'fas fa-star' },
  { name: 'Amazon', icon: 'fab fa-amazon' },
  { name: 'Microsoft', icon: 'fab fa-microsoft' },
  { name: 'Nvidia', icon: 'fas fa-microchip' },
  { name: 'Disney', icon: 'fas fa-magic' },
  { name: 'Warner Bros', icon: 'fas fa-film' },
  { name: 'Paramount', icon: 'fas fa-mountain' },
  { name: 'Netflix', icon: 'fas fa-play-circle' },
  { name: 'Heineken', icon: 'fas fa-beer' },
  { name: 'Audi', icon: 'fas fa-circle-notch' },
  { name: 'Cartier', icon: 'fas fa-crown' },
  { name: 'Prada', icon: 'fas fa-tshirt' },
  { name: 'Intel', icon: 'fas fa-memory' },
  { name: 'SpaceX', icon: 'fas fa-rocket' },
  { name: 'Meta', icon: 'fas fa-vr-cardboard' },
  { name: 'Ubisoft', icon: 'fas fa-headset' },
  { name: 'Epic Games', icon: 'fas fa-cube' },
  { name: 'EA Sports', icon: 'fas fa-trophy' },
  { name: 'Burberry', icon: 'fas fa-user-ninja' },
  { name: 'Lexus', icon: 'fas fa-car' },
  { name: 'Qatar Airways', icon: 'fas fa-plane' },
  { name: 'Emirates', icon: 'fas fa-plane-departure' },
  { name: 'Pepsi', icon: 'fas fa-glass-whiskey' },
  { name: 'Mastercard', icon: 'fas fa-credit-card' },
  { name: 'Visa', icon: 'fab fa-cc-visa' },
  { name: 'IBM', icon: 'fas fa-server' },
  { name: 'Adobe', icon: 'fas fa-layer-group' },
  { name: 'Aston Martin', icon: 'fas fa-tachometer-alt' },
  { name: 'Gucci', icon: 'fas fa-shopping-bag' }
];

function renderBrandLogos() {
  const container = document.getElementById('brand-logos-container');
  if (!container) return;

  container.innerHTML = brandData.map(brand => `
    <div class="brand-logo-card" data-brand="${brand.name}">
      <i class="${brand.icon} brand-icon"></i>
      <span class="brand-name">${brand.name}</span>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   5. 40 MOVIE POSTERS CAROUSEL / GRID
   -------------------------------------------------------------------------- */
const moviesData = [
  { id: 1, title: 'DUNE: PART II', year: '2024', genre: 'Sci-Fi / Epic', vfx: 'Desert Simulation & Creature FX', poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 2, title: 'LONGLEGS', year: '2024', genre: 'Horror / Thriller', vfx: 'Atmospheric Color & Matte', poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 3, title: 'BEETLEJUICE 2', year: '2024', genre: 'Fantasy / Comedy', vfx: 'Practical Stop Motion VFX', poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 4, title: 'JOHN WICK 4', year: '2023', genre: 'Action / Cyber', vfx: 'Digital Stunts & Pyrotechnics', poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 5, title: 'MADAME WEB', year: '2024', genre: 'Action / Sci-Fi', vfx: 'Particle Distortion & CGI', poster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 6, title: 'IF', year: '2024', genre: 'Animation / Family', vfx: 'Photoreal Fur & CGI Creatures', poster: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 7, title: 'ALIEN: ROMULUS', year: '2024', genre: 'Sci-Fi / Horror', vfx: 'Space Simulation & Animatronics', poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 8, title: 'THE RINGS OF POWER', year: '2023', genre: 'Fantasy / Epic', vfx: 'Full Environment Compositing', poster: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 9, title: 'DUNGEONS & DRAGONS', year: '2023', genre: 'Action / Fantasy', vfx: 'Spell FX & Creature Motion', poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 10, title: 'TRANSFORMERS ONE', year: '2024', genre: 'Sci-Fi / Animation', vfx: 'Hard Surface Robot Rendering', poster: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 11, title: 'ANT-MAN: QUANTUM', year: '2023', genre: 'Sci-Fi / Action', vfx: 'Quantum Realm FX', poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 12, title: 'THOR: RAGNAROK', year: '2022', genre: 'Sci-Fi / Action', vfx: 'Gladiator Arena Simulation', poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 13, title: 'DOCTOR STRANGE 2', year: '2022', genre: 'Fantasy / Magic', vfx: 'Multiverse Portal FX', poster: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 14, title: 'AVENGERS: ENDGAME', year: '2021', genre: 'Sci-Fi / Epic', vfx: 'Massive Crowd & Debris Sim', poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 15, title: 'STAR WARS: EP IX', year: '2020', genre: 'Sci-Fi / Space', vfx: 'Lightsaber & Ocean VFX', poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 16, title: 'STAR WARS: EP VII', year: '2019', genre: 'Sci-Fi / Space', vfx: 'X-Wing Aerial Dynamics', poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 17, title: '1917', year: '2020', genre: 'War / Drama', vfx: 'Seamless Stitching & Smoke', poster: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 18, title: 'JOKER', year: '2019', genre: 'Drama / Thriller', vfx: 'Period Matte Painting', poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 19, title: 'THE IRISHMAN', year: '2020', genre: 'Crime / Drama', vfx: 'AI De-aging Neural Engine', poster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 20, title: 'GODZILLA: KING', year: '2021', genre: 'Monster / Sci-Fi', vfx: 'Kaiju Fluid & Fire Sim', poster: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 21, title: 'BLADE RUNNER 2099', year: '2025', genre: 'Cyberpunk', vfx: 'Holographic Neon Render', poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 22, title: 'AVATAR: FIRE & ASH', year: '2025', genre: 'Sci-Fi / Epic', vfx: 'Underwater Volcanic VFX', poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 23, title: 'MATRIX RESURRECT', year: '2022', genre: 'Sci-Fi / Cyber', vfx: 'Bullet Time Ray Tracing', poster: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 24, title: 'TENET', year: '2020', genre: 'Sci-Fi / Thriller', vfx: 'Time Inversion Physics', poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 25, title: 'OPPENHEIMER', year: '2023', genre: 'History / Drama', vfx: 'Practical Atomic Simulation', poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 26, title: 'KINGDOM OF APES', year: '2024', genre: 'Sci-Fi / Adventure', vfx: 'Facial Performance Mocap', poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 27, title: 'FURIOSA: MAD MAX', year: '2024', genre: 'Action / Wasteland', vfx: 'Sandstorm & Metal Destruction', poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 28, title: 'VENOM: LAST DANCE', year: '2024', genre: 'Action / Sci-Fi', vfx: 'Symbiote Fluid Simulation', poster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 29, title: 'GLADIATOR II', year: '2024', genre: 'Historical Epic', vfx: 'Colosseum Naval Battle Sim', poster: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 30, title: 'DEADPOOL & WOLVERINE', year: '2024', genre: 'Action / Comedy', vfx: 'Claw Slash & Gore CGI', poster: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 31, title: 'SPIDER-VERSE 3', year: '2025', genre: 'Animation / Sci-Fi', vfx: 'Multi-Style Shader Pipelines', poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 32, title: 'THE BATMAN PART II', year: '2025', genre: 'Noir / Crime', vfx: 'Rain & Shadow Compositing', poster: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 33, title: 'TRON: ARES', year: '2025', genre: 'Cyber / Sci-Fi', vfx: 'Volumetric Light Cycle Grid', poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 34, title: 'INCEPTION', year: '2010', genre: 'Sci-Fi / Heist', vfx: 'Folding City Architecture', poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 35, title: 'TRON: LEGACY', year: '2010', genre: 'Cyberpunk', vfx: 'Digital De-aging & Glow Lines', poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 36, title: 'PACIFIC RIM', year: '2013', genre: 'Sci-Fi / Mecha', vfx: 'Jaeger vs Kaiju Water Sim', poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 37, title: 'INTERSTELLAR', year: '2014', genre: 'Sci-Fi / Cosmic', vfx: 'Gargantua Black Hole Sim', poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 38, title: 'GRAVITY', year: '2013', genre: 'Space / Survival', vfx: 'Zero-G Reflection Rendering', poster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 39, title: 'THE MARTIAN', year: '2015', genre: 'Sci-Fi / Survival', vfx: 'Mars Red Landscape Grading', poster: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' },
  { id: 40, title: 'EX MACHINA', year: '2015', genre: 'AI / Sci-Fi', vfx: 'Transparent Android Rigging', poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreel%202.mp4' }
];

function renderMoviePosters() {
  const container = document.getElementById('movies-grid-container');
  if (!container) return;

  container.innerHTML = moviesData.map(movie => `
    <div class="movie-poster-card" data-id="${movie.id}" onclick="openVideoModal('${movie.title}', '${movie.vfx}', '${movie.video}')">
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster-img" loading="lazy" />
      <span class="vfx-badge">VFX WORK</span>
      <span class="movie-year-badge">${movie.year}</span>
      <div class="movie-poster-overlay">
        <h4 class="movie-title">${movie.title}</h4>
        <div class="movie-genre">${movie.genre}</div>
        <div class="movie-action">
          <i class="fas fa-play-circle"></i> WATCH VFX REEL
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   6. CAROUSEL NAVIGATION (Advertising)
   -------------------------------------------------------------------------- */
function initCarouselNav() {
  const track = document.getElementById('adv-carousel-track');
  const prevBtn = document.getElementById('adv-prev');
  const nextBtn = document.getElementById('adv-next');
  if (!track || !prevBtn || !nextBtn) return;

  let position = 0;
  const cardWidth = 340; // Card width + gap

  prevBtn.addEventListener('click', () => {
    position = Math.min(position + cardWidth * 2, 0);
    track.style.transform = `translateX(${position}px)`;
  });

  nextBtn.addEventListener('click', () => {
    const maxScroll = -(track.children.length * cardWidth - track.parentElement.clientWidth);
    position = Math.max(position - cardWidth * 2, maxScroll);
    track.style.transform = `translateX(${position}px)`;
  });
}

/* --------------------------------------------------------------------------
   7. INTERACTIVE SIMULATION SANDBOX WIDGET
   -------------------------------------------------------------------------- */
function initSimSandbox() {
  const viewport = document.getElementById('sim-viewport');
  const focalSlider = document.getElementById('slider-focal');
  const lightingSlider = document.getElementById('slider-lighting');
  const sandstormSlider = document.getElementById('slider-sandstorm');
  
  const hudFocal = document.getElementById('hud-focal');
  const hudLighting = document.getElementById('hud-lighting');
  const hudSandstorm = document.getElementById('hud-sandstorm');

  if (!viewport || !focalSlider) return;

  function updateSim() {
    const focalVal = focalSlider.value;
    const lightVal = lightingSlider.value;
    const sandVal = sandstormSlider.value;

    hudFocal.innerText = `${focalVal}mm`;
    hudLighting.innerText = `${lightVal}%`;
    hudSandstorm.innerText = `${sandVal}%`;

    // Apply visual CSS filter adjustments simulating render viewport
    const brightness = 0.5 + (lightVal / 100) * 0.7;
    const sepia = (sandVal / 100) * 0.8;
    const blur = (sandVal / 100) * 1.5;
    const scale = 1 + (100 - focalVal) * 0.002;

    viewport.style.filter = `brightness(${brightness}) sepia(${sepia}) blur(${blur}px) contrast(1.1)`;
    viewport.style.transform = `scale(${scale})`;
  }

  focalSlider.addEventListener('input', updateSim);
  lightingSlider.addEventListener('input', updateSim);
  sandstormSlider.addEventListener('input', updateSim);

  updateSim();
}

/* --------------------------------------------------------------------------
   8. MODAL PLAYER SYSTEM
   -------------------------------------------------------------------------- */
function initModals() {
  const backdrop = document.getElementById('video-modal');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', closeVideoModal);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeVideoModal();
    });
  }
}

function openVideoModal(title, subtitle, videoSrc) {
  const backdrop = document.getElementById('video-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const videoPlayer = document.getElementById('modal-video-element');

  if (!backdrop) return;

  modalTitle.innerText = title;
  modalSubtitle.innerText = subtitle;
  videoPlayer.src = videoSrc;
  
  backdrop.classList.add('active');
  videoPlayer.play().catch(e => console.log('Autoplay handled:', e));
}

function closeVideoModal() {
  const backdrop = document.getElementById('video-modal');
  const videoPlayer = document.getElementById('modal-video-element');
  if (backdrop) backdrop.classList.remove('active');
  if (videoPlayer) {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
}

/* --------------------------------------------------------------------------
   9. CONTACT FORM SUBMISSION TOAST
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('immersio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> TRANSMITTING INQUIRY...';
    btn.disabled = true;

    setTimeout(() => {
      alert('Thank you for contacting Immersio Suprema. Our executive team will review your proposal and get in touch within 24 hours.');
      form.reset();
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 1500);
  });
}

/* --------------------------------------------------------------------------
   10. GLOBAL STUDIO TIMEZONES
   -------------------------------------------------------------------------- */
function initTimezones() {
  const timeElements = {
    vancouver: 'America/Vancouver',
    la: 'America/Los_Angeles',
    london: 'Europe/London',
    dubai: 'Asia/Dubai',
    riyadh: 'Asia/Riyadh',
    tokyo: 'Asia/Tokyo'
  };

  function updateClocks() {
    Object.keys(timeElements).forEach(id => {
      const el = document.getElementById(`time-${id}`);
      if (el) {
        const timeStr = new Date().toLocaleTimeString('en-US', {
          timeZone: timeElements[id],
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
        el.innerText = timeStr;
      }
    });
  }

  updateClocks();
  setInterval(updateClocks, 30000);
}
