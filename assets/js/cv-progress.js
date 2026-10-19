(() => {
  const sections = Array.from(document.querySelectorAll('.cv-section'));
  const links = Array.from(document.querySelectorAll('.cv-section-nav a'));
  const bar = document.querySelector('.cv-reading-progress');
  const fill = document.querySelector('.cv-progress-fill');
  const navigation = document.querySelector('.cv-navigation');
  let queued = false;
  function update() {
    queued = false;
    const offset = window.scrollY;
    const start = sections[0].getBoundingClientRect().top + offset - navigation.offsetHeight - 25;
    const last = sections[sections.length - 1];
    const end = last.getBoundingClientRect().bottom + offset - window.innerHeight;
    const progress = Math.max(0, Math.min(1, (offset - start) / Math.max(1, end - start)));
    fill.style.transform = 'scaleX(' + progress + ')';
    bar.setAttribute('aria-valuenow', Math.round(progress * 100));
    let active = null;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= navigation.offsetHeight + 80) active = section.id;
    }
    if (progress >= 1) active = last.id;
    links.forEach(link => {
      if (link.dataset.section === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function schedule() { if (!queued) { queued = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', schedule, {passive: true});
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  update();
})();
