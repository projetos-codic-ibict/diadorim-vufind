document.addEventListener('DOMContentLoaded', () => {
  watchNavbarLinks()
})

window.onload = () => {
  verifyCurrentNavbarLinkActive()
}

const navbarIds = [
  'initialPage',
  'navigate',
  'about',
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
    item.classList.remove('active-link')
  })

  currentId.classList.add('active-link')
}

function verifyCurrentNavbarLinkActive() {
  switch (window.location.pathname.split('/')[2]) {
  case 'Search':
    document.getElementById('navigate').classList.add('active-link')
    break
  case 'Record':
    document.getElementById('navigate').classList.add('active-link')
    break
  case 'Sobre':
    document.getElementById('about').classList.add('active-link') 
    break
  case 'Logomarcas':
    document.getElementById('logosSection').classList.add('active-link')
    break
  default:
    document.getElementById('initialPage').classList.add('active-link')
  }
}

