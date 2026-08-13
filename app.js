/**
 * Monali Nawghare - Portfolio Application Engine
 * Typewriter, Navigation Scroll-Spy, Interactive Modals, Real Form Submission, and Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initTypewriter();
  initNavScroll();
  initMobileMenu();
  initProjectModal();
  initContactForm();
});

/* ==========================================================================
   1. TYPEWRITER EFFECT (Realistic Professional Roles Only)
   ========================================================================== */
function initTypewriter() {
  const words = [
    'Full Stack Developer',
    'Python Django Developer',
    'Backend Developer',
    'REST API Developer',
    'React Developer'
  ];
  
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      el.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      el.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 1800; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400; // Pause before next word
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ==========================================================================
   2. STICKY NAV & SCROLL SPY
   ========================================================================== */
function initNavScroll() {
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    let activeId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        activeId = sec.getAttribute('id');
      }
    });

    if (activeId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeId}`) {
          link.classList.add('active');
        }
      });
    }
  }, { passive: true });
}

/* ==========================================================================
   3. MOBILE DRAWER MENU
   ========================================================================== */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');

  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        nav.classList.remove('mobile-open');
      });
    });
  }
}

/* ==========================================================================
   4. REAL PROJECT DETAILS MODAL
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('project-modal-close-btn');

  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Global helper for opening modal by Project ID
  window.showProjectDetails = function(projectId) {
    if (!modal) return;
    
    const projects = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.projects) ? PORTFOLIO_DATA.projects : [];
    const project = projects.find(p => p.id === projectId || p.title.toLowerCase().includes(projectId.toLowerCase()));

    if (!project) {
      showToast('Project details unavailable.', 'error');
      return;
    }

    const titleEl = document.getElementById('pm-title');
    const badgeEl = document.getElementById('pm-category');
    const descEl = document.getElementById('pm-desc');
    const techListEl = document.getElementById('pm-tech-list');
    const featuresListEl = document.getElementById('pm-features-list');
    const roleEl = document.getElementById('pm-role');
    const highlightsListEl = document.getElementById('pm-highlights-list');
    const githubLinkEl = document.getElementById('pm-github-link');
    const liveLinkEl = document.getElementById('pm-live-link');

    if (titleEl) titleEl.textContent = project.title;
    if (badgeEl) badgeEl.textContent = project.category;
    if (descEl) descEl.textContent = project.fullDesc || project.shortDesc;
    if (roleEl) roleEl.textContent = project.role || 'Full Stack Developer';

    if (techListEl) {
      techListEl.innerHTML = (project.techStack || [])
        .map(t => `<span class="tech-pill-badge">${t}</span>`)
        .join('');
    }

    if (featuresListEl) {
      featuresListEl.innerHTML = (project.keyFeatures || [])
        .map(f => `<li>${f}</li>`)
        .join('');
    }

    if (highlightsListEl) {
      highlightsListEl.innerHTML = (project.highlights || [])
        .map(h => `<li>${h}</li>`)
        .join('');
    }

    if (githubLinkEl) {
      githubLinkEl.href = project.github || 'https://github.com/monalinawghare';
    }

    if (liveLinkEl) {
      if (project.liveDemo) {
        liveLinkEl.href = project.liveDemo;
        liveLinkEl.style.display = 'inline-flex';
      } else {
        liveLinkEl.style.display = 'none';
      }
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
}

/* ==========================================================================
   6. CONTACT FORM REAL SUBMISSION (With Real Delivery & Truthful Feedback)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const statusBanner = document.getElementById('form-status-banner');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="spin-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span>Sending Message...</span>
      `;
    }

    try {
      // Real AJAX submission via FormSubmit service
      const response = await fetch('https://formsubmit.co/ajax/monalinawghare04@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
          _subject: `New Portfolio Inquiry from ${name}: ${subject}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        showToast('Message sent successfully! Thank you for reaching out.', 'success');
        if (statusBanner) {
          statusBanner.className = 'form-status-banner success';
          statusBanner.innerHTML = '<strong>Message sent successfully!</strong> Monali will review your note and respond promptly.';
          statusBanner.style.display = 'block';
        }
        form.reset();
      } else {
        throw new Error('Server returned error response');
      }
    } catch (err) {
      // Truthful error handling with fallback
      showToast('Unable to send message directly. Opening email client...', 'error');
      if (statusBanner) {
        statusBanner.className = 'form-status-banner error';
        statusBanner.innerHTML = `<strong>Unable to send directly.</strong> Please <a href="mailto:monalinawghare04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}" style="text-decoration: underline; color: #f43f5e;">click here to email monalinawghare04@gmail.com directly</a>.`;
        statusBanner.style.display = 'block';
      }
      // Trigger native email client as fallback
      window.location.href = `mailto:monalinawghare04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          <span>Send Message</span>
        `;
      }
    }
  });
}

/* ==========================================================================
   7. TOAST NOTIFICATION ENGINE
   ========================================================================== */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const iconSvg = type === 'success'
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(16px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 4500);
}

/* ==========================================================================
   8. SCROLL ENTRANCE ANIMATION CONTROLLER (Repeatable on Every Scroll)
   ========================================================================== */
function initScrollAnimations() {
  document.documentElement.classList.add('js-scroll-animate');

  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale-up');
  if (!revealElements.length) return;

  // Fallback if IntersectionObserver is unsupported
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('reveal-visible'));
    return;
  }

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -70px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible'); // Trigger entrance animation
      } else {
        entry.target.classList.remove('reveal-visible'); // Reset to re-animate on next scroll
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}
