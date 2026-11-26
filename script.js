const sectionLinks = document.querySelectorAll('.site-header nav a');

function updateCurrentLocation() {
  sectionLinks.forEach((link) => {
    if (link.hash === window.location.hash) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

window.addEventListener('hashchange', updateCurrentLocation);
updateCurrentLocation();
