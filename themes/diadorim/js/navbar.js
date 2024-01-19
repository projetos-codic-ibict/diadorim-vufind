document.addEventListener('DOMContentLoaded', function () {
  watchNavbarLinks()
  //verifyCurrentNavbarLinkActive()
})

window.onload = function () {
  //verifyCurrentNavbarLinkActive()
}

const navbarIds = [
  'inicialPage',
  'navigate',
  'about',
  'register',
  'contact',
]

function watchNavbarLinks() {
  navbarIds.forEach(id => {
    const currentId = document.getElementById(id)
    
    if (currentId) {
      currentId.addEventListener('click', () => {
        verify(currentId)
        /* if (currentId.id !== id) currentId.classList.remove('active-link')
        if (currentId.id === id) console.log('c', id)
        if (currentId.id === id) currentId.classList.add('active-link') */

        //if (window.location.pathname.includes('/diadorim/Search/Results')) currentId.classList.add('currentId')
      })
    }
  })
}

function verify(currentId) {
  console.log('verify', currentId)
  navbarIds.forEach(id => {
    const item = document.getElementById(id)

    item.classList.remove('active')
    console.log('verify2', item)
  })

  currentId.classList.add('active')
}

function verifyCurrentNavbarLinkActive() {
  switch (window.location.pathname) {
    case '/diadorim/Search/Results':
      document.getElementById('navigate').classList.add('active-link')
      console.log('c', document.getElementById('navigate'))
      
      navbarIds.forEach(id => {
        let link = document.getElementById(id)
        if (link.id !== navigate) link.classList.remove('active-link')
      })
      break
  
    case '/diadorim/':
      
      break
  }
}

function activateNavItem(element) {
  // Remover a classe 'active' de todos os itens da navegação
  var navItems = document.querySelectorAll('.nav.navbar-nav > li')
  navItems.forEach(function(item) {
    item.classList.remove('active')
  })

  // Adicionar a classe 'active' ao item de navegação clicado
  element.parentNode.classList.add('active')
}