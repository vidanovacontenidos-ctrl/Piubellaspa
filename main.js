/* ═══ PIU BELLA SPA — Scripts ═══ */

document.addEventListener('DOMContentLoaded', () => {

  // Scroll Reveal
  const rvs = document.querySelectorAll('.rv,.rv-left,.rv-right');
  const ro = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  rvs.forEach(el => ro.observe(el));

  // Mobile Nav
  const mt = document.getElementById('mt');
  const nl = document.getElementById('nl');
  if (mt && nl) {
    mt.addEventListener('click', () => nl.classList.toggle('open'));
    nl.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => nl.classList.remove('open'))
    );
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
  window.addEventListener('scroll', () => {
    const w = document.querySelector('.hero-wrap');
    if (!w) return;
    const r = w.getBoundingClientRect();
    if (r.bottom > 0 && r.top < innerHeight) {
      const img = w.querySelector('.hero-bg img');
      if (img) {
        const s = -r.top / (r.height + innerHeight);
        img.style.transform = `scale(${1 + s * 0.08}) translateY(${s * 35}px)`;
      }
    }
  }, { passive: true });

});
