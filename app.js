// AquaPulse proposal - light interactions
(function () {
  // mobile nav
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () { links.classList.toggle('open'); });
    links.addEventListener('click', function (e) { if (e.target.tagName === 'A') links.classList.remove('open'); });
  }

  // reveal on scroll
  var faders = document.querySelectorAll('.fade');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    faders.forEach(function (f) { io.observe(f); });
  } else {
    faders.forEach(function (f) { f.classList.add('in'); });
  }

  // scroll to top
  var top = document.querySelector('.scrolltop');
  if (top) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 700) top.classList.add('show'); else top.classList.remove('show');
    });
    top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }
})();
