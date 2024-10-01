document.addEventListener('DOMContentLoaded', () => {
  watchNavbarLinks();
  setupDropdown();
});

window.onload = () => {
  verifyCurrentNavbarLinkActive();
}

const navbarIds = [
  'initialPage',
  'navigate',
  'aboutDropdown',
  'aboutDiadorim',
  'criterios',
  'logosSection',
  'register',
  'feedbackLink',
]

function watchNavbarLinks() {
  navbarIds.forEach(id => {
    const currentId = document.getElementById(id)

    if (currentId) {
      currentId.addEventListener('click', () => {
        verifyNavbarLinks(currentId)
      })
    }
  })
}

function verifyNavbarLinks(currentId) {
  navbarIds.forEach(id => {
    const item = document.getElementById(id)

    if (item) {
      item.classList.remove('active-link')
    }
  })

  if (currentId) {
    currentId.classList.add('active-link')
  }
}

function verifyCurrentNavbarLinkActive() {
  const path = window.location.pathname.split('/')[2]

  switch (path) {
  case 'Search':
    document.getElementById('navigate').classList.add('active-link')
    break
  case 'Record':
    document.getElementById('navigate').classList.add('active-link')
    break
  case 'Sobre':
    document.getElementById('aboutDropdown').classList.add('active-link')
    break
  case 'Logomarcas':
    document.getElementById('logosSection').classList.add('active-link')
    break
  case 'Criterios':
    document.getElementById('aboutDropdown').classList.add('active-link')
    break
  default:
    document.getElementById('initialPage').classList.add('active-link')
  }
}

function setupDropdown() {
  const dropdownToggle = document.getElementById('aboutDropdown');
  const dropdownMenu = document.getElementById('dropdownMenu');

  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';

      // Alterna o dropdown
      dropdownToggle.setAttribute('aria-expanded', !isExpanded);
      dropdownMenu.style.display = isExpanded ? 'none' : 'block';
    });
  }

  // Fechar dropdown ao clicar fora
  document.addEventListener('click', (e) => {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
