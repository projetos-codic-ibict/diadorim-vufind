document.addEventListener('DOMContentLoaded', function () {
  watchNavbarLinks()
})

window.onload = function () {
  verifyCurrentNavbarLinkActive()
}

const navbarIds = [
  'initialPage',
  'navigate',
  'about',
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
    console.log(id)
    const item = document.getElementById(id)
    console.log(item)
    item.classList.remove('active-link')
  })
  
  currentId.classList.add('active-link')
}

function verifyCurrentNavbarLinkActive() {
  switch (window.location.pathname) {
    case '/diadorim/Search/Results':
      document.getElementById('navigate').classList.add('active-link')
      break
  
    case '/diadorim/':
      document.getElementById('initialPage').classList.add('active-link')
      break
  }
}