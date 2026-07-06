/* ═══ PIU BELLA SPA — Scripts ═══ */
document.addEventListener('DOMContentLoaded', () => {

  // Scroll Reveal
  const rvs = document.querySelectorAll('.rv,.rv-left,.rv-right');
  const ro = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  rvs.forEach(el => ro.observe(el));

  // Mobile Nav — hamburger toggle
  const mt = document.getElementById('mt');
  const nl = document.getElementById('nl');
  if (mt && nl) {
    mt.addEventListener('click', (e) => {
      e.stopPropagation();
      nl.classList.toggle('open');
      mt.classList.toggle('active');
      document.body.style.overflow = nl.classList.contains('open') ? 'hidden' : '';
    });
    nl.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        nl.classList.remove('open');
        mt.classList.remove('active');
        document.body.style.overflow = '';
      })
    );
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (nl.classList.contains('open') && !nl.contains(e.target) && !mt.contains(e.target)) {
        nl.classList.remove('open');
        mt.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Nav scroll + Progress bar
  const nav = document.getElementById('mainNav');
  const sp = document.getElementById('sp');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', scrollY > 60);
    if (sp) {
      const h = document.documentElement.scrollHeight - innerHeight;
      sp.style.width = (scrollY / h * 100) + '%';
    }
  }, { passive: true });

  // Animated Counters
  const counters = document.querySelectorAll('.counter');
  let countersStarted = false;
  if (counters.length) {
    const co = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting && !countersStarted) {
          countersStarted = true;
          counters.forEach(c => {
            const target = +c.dataset.target;
            const start = performance.now();
            (function update(now) {
              const p = Math.min((now - start) / 2000, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              c.textContent = Math.floor(eased * target);
              if (p < 1) requestAnimationFrame(update);
              else c.textContent = target;
            })(start);
          });
        }
      });
    }, { threshold: 0.3 });
    const target = counters[0].closest('.stats-grid') || counters[0].parentElement;
    co.observe(target);
  }

  // Parallax Hero (index only)
  const heroWrap = document.querySelector('.hero-wrap');
  if (heroWrap) {
    window.addEventListener('scroll', () => {
      const r = heroWrap.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) {
        const img = heroWrap.querySelector('.hero-bg img');
        if (img) {
          const s = -r.top / (r.height + innerHeight);
          img.style.transform = 'scale(' + (1 + s * 0.08) + ') translateY(' + (s * 35) + 'px)';
        }
      }
    }, { passive: true });
  }

});

// Testimonial cards — staggered slide-up on scroll
const testCards = document.querySelectorAll('.test-card');
if (testCards.length) {
  const tObs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const delay = card.dataset.delay || 0;
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, delay * 150);
        tObs.unobserve(card);
      }
    });
  }, { threshold: 0.15 });
  
  testCards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all .7s cubic-bezier(.16,1,.3,1)';
    card.dataset.delay = i;
    tObs.observe(card);
  });
}

// Smooth parallax for trip promo section
const tripFull = document.querySelector('.trip-full');
if (tripFull) {
  window.addEventListener('scroll', () => {
    const r = tripFull.getBoundingClientRect();
    if (r.bottom > 0 && r.top < innerHeight) {
      const bg = tripFull.querySelector('.trip-full-bg img');
      if (bg) {
        const progress = (innerHeight - r.top) / (innerHeight + r.height);
        bg.style.transform = 'scale(' + (1 + progress * 0.06) + ') translateY(' + (progress * -20) + 'px)';
      }
    }
  }, { passive: true });
}

// Slide-in Punta Cana promo — appears after 6 seconds
const slidein = document.getElementById('slideinPromo');
const slideinClose = document.getElementById('slideinClose');
if (slidein) {
  // Show after 6 seconds
  setTimeout(() => {
    slidein.classList.add('show');
  }, 4000);

  // Close button
  if (slideinClose) {
    slideinClose.addEventListener('click', () => {
      slidein.classList.remove('show');
      // Don't show again this session
      sessionStorage.setItem('promoHidden', '1');
    });
  }

  // Re-show on each page load (user can dismiss with X)

  // Auto-hide after 20 seconds if not interacted
  setTimeout(() => {
    if (slidein.classList.contains('show') && !slidein.matches(':hover')) {
      slidein.classList.remove('show');
    }
  }, 26000);
}
