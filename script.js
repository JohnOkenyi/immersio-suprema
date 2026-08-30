/**
 * QUEEN BIRTH SERVICES - SIX SENSES LUXURY INTERACTION SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  initFormListeners();
});

/* --------------------------------------------------------------------------
   1. HEADER SCROLL STATE
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}

/* --------------------------------------------------------------------------
   2. MOBILE NAV DRAWER TOGGLE
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const burgerBtn = document.getElementById('burger-btn');
  const drawerCloseBtn = document.getElementById('drawer-close');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (burgerBtn && mobileDrawer) {
    burgerBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });
  }

  if (drawerCloseBtn && mobileDrawer) {
    drawerCloseBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }
}

function closeMobileDrawer() {
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileDrawer) {
    mobileDrawer.classList.remove('open');
  }
}

/* --------------------------------------------------------------------------
   3. DESTINATION TAB FILTERING
   -------------------------------------------------------------------------- */
function filterDestinations(category) {
  const tabBtns = document.querySelectorAll('.dest-tab-btn');
  const destCards = document.querySelectorAll('.dest-card');

  // Update active button state
  tabBtns.forEach(btn => {
    if (btn.getAttribute('onclick').includes(`'${category}'`)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Filter destination cards
  destCards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'grid';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(15px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

/* --------------------------------------------------------------------------
   4. FLOATING QUICK SEARCH WIDGET ACTION
   -------------------------------------------------------------------------- */
function triggerQuickQuery() {
  const destination = document.getElementById('qs-destination')?.value || 'USA';
  const dueDate = document.getElementById('qs-duedate')?.value || '';
  const careNeeded = document.getElementById('qs-care')?.value || '';

  // Open consultation modal and prefill inputs
  openConsultationModal(destination);

  // Prefill due date notes if present
  const notesField = document.getElementById('c-notes');
  if (notesField) {
    notesField.value = `Quick Search Inquiry: Due Date (${dueDate}), Care Preference (${careNeeded}).`;
  }
}

/* --------------------------------------------------------------------------
   5. MODAL CONTROLLERS (CONSULTATION & BIRTHOPTION QUERY)
   -------------------------------------------------------------------------- */
function openConsultationModal(presetDestination = null) {
  const modal = document.getElementById('consultation-modal');
  const form = document.getElementById('consultation-form');
  const successMsg = document.getElementById('c-success-msg');

  if (modal) {
    // Reset view
    if (form) form.style.display = 'block';
    if (successMsg) successMsg.classList.remove('active');

    // Preset destination if provided
    if (presetDestination) {
      const destSelect = document.getElementById('c-destination');
      if (destSelect) {
        for (let option of destSelect.options) {
          if (option.value.toLowerCase().includes(presetDestination.toLowerCase())) {
            destSelect.value = option.value;
            break;
          }
        }
      }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeConsultationModal() {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openQueryDrawer(presetDestination = null) {
  const modal = document.getElementById('query-drawer');
  const form = document.getElementById('query-form');
  const successMsg = document.getElementById('q-success-msg');

  if (modal) {
    if (form) form.style.display = 'block';
    if (successMsg) successMsg.classList.remove('active');

    if (presetDestination) {
      const destSelect = document.getElementById('q-destination');
      if (destSelect) destSelect.value = presetDestination;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeQueryDrawer() {
  const modal = document.getElementById('query-drawer');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modals when clicking overlay background or ESC key
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeConsultationModal();
    closeQueryDrawer();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeConsultationModal();
    closeQueryDrawer();
    closeMobileDrawer();
  }
});

/* --------------------------------------------------------------------------
   6. FORM SUBMISSION HANDLERS
   -------------------------------------------------------------------------- */
function initFormListeners() {
  // Handlers attached via inline onsubmit in HTML
}

function handleConsultationSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('consultation-form');
  const successMsg = document.getElementById('c-success-msg');
  const submitBtn = form.querySelector('button[type="submit"]');

  if (submitBtn) {
    submitBtn.innerHTML = '<span>Processing Request...</span> <i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
  }

  setTimeout(() => {
    if (form) form.style.display = 'none';
    if (successMsg) successMsg.classList.add('active');
    if (submitBtn) {
      submitBtn.innerHTML = '<span>Submit Consultation Request</span> <i class="fas fa-paper-plane"></i>';
      submitBtn.disabled = false;
    }
    form.reset();
  }, 900);
}

function handleQuerySubmit(e) {
  e.preventDefault();
  const form = document.getElementById('query-form');
  const successMsg = document.getElementById('q-success-msg');
  const submitBtn = form.querySelector('button[type="submit"]');

  if (submitBtn) {
    submitBtn.innerHTML = '<span>Generating Breakdown...</span> <i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
  }

  setTimeout(() => {
    if (form) form.style.display = 'none';
    if (successMsg) successMsg.classList.add('active');
    if (submitBtn) {
      submitBtn.innerHTML = '<span>Request Customized Birth Breakdown</span> <i class="fas fa-arrow-right"></i>';
      submitBtn.disabled = false;
    }
    form.reset();
  }, 900);
}
