document.addEventListener('DOMContentLoaded', function () {
  watchNavbarLinks()
  verifyNavbarLinks(currentId)
})

const navbarIds = [
  'inicialPage',
  'navegate',
  'about',
  'register',
  'contact',
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

function verifyNavbarLinks(currentLink) {
 // const navegate = document.getElementById('navegate')
  //if (window.location.pathname.includes('/diadorim/Search/Results')) navegate.classList.add('navegate')

  /* navbarIds.forEach(id => {
    console.log('currentId', currentLink.id === id)
    //if (currentLink.id !== id) currentLink.classList.remove('active-link')
    if (currentLink.id === id) currentLink.classList.add('active-link')
  }) */
}