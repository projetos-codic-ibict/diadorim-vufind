const host = 'http://172.16.16.112'
//const host = 'http://localhost'

const URL = `${host}/diadorim/api/v1`

/* ------------------------------------------------------------------------ */

let sealsInfo = [
  { color: 'Branca', quantity: 0, href: '' },
  { color: 'Azul', quantity: 0, href: '' },
  { color: 'Amarelo', quantity: 0, href: '' },
  { color: 'Verde', quantity: 0, href: '' },
]
let currentPage = 1
let currentRecords
let viewMode = 'grade'

async function getFields(pageToView) {
  let response
  let searchURL = `search?type=AllFields&sort=relevance&page=${pageToView}&limit=9&prettyPrint=false&lng=en`

  try {
    response = await fetch(`${URL}/${searchURL}`)
    response = await response.json()

    currentRecords = response.records

    return response.records
  } catch (errors) {
    console.error(errors)

  } finally {
  }
}

async function getQttSealsByColor() {
  const facetsURL = 'search?facet[]=sealcolor_keyword&sort=relevance&limit=0'
  let response

  try {
    response = await fetch(`${URL}/${facetsURL}`)
    response = await response.json()
    const sealColor = response.facets.sealcolor_keyword
    
    sealsInfo[0].quantity = sealColor[3].count
    sealsInfo[0].href = sealColor[3].href

    sealsInfo[1].quantity = sealColor[0].count
    sealsInfo[1].href = sealColor[0].href

    sealsInfo[2].quantity = sealColor[2].count + sealColor[4].count
    sealsInfo[2].href = sealColor[2].href + sealColor[4].href

    sealsInfo[3].quantity = sealColor[1].count
    sealsInfo[3].href = sealColor[1].href

  } catch (errors) {
    console.error(errors)

  } finally {
  }
}

async function sealsCountCard() {
  addSealsLoader()
  
  await getQttSealsByColor()

  let fieldsCards = document.querySelector('.home_cards')
  let institutionsCards = ''
  
  let cardSeal = ''

  sealsInfo.forEach(seal => {
    cardSeal = getSealCard(seal.color, false)

    institutionsCards += `<a id="${seal.color}"
      href="${host}/diadorim/Search/Results${seal.href}">
      <div class="home_card">
        <div class="home-card_svg ${seal.color}">${cardSeal}</div>

        <div class="home_card-text">
          <span class="text-center">${seal.color}</span>
          <span class="text-center ${seal.color}">${seal.quantity}</span>
        </div>
      </div>
    </a>`
  })

  fieldsCards.innerHTML = institutionsCards
}

function addCards(viewType, records) {
  const fieldsCards = document.querySelector('.home_fields-cards')
  let cards = ''

  records.forEach(record => {
    if (record) {
      let seal = ''
      let issns = ''
      const sealSplited = record?.sealColor.split(':')

      seal += getSealCard(sealSplited[0].trim(), true)

      record?.issns.forEach(issn => issns += `${issn},`)

      cards += buildCurrentCard(viewType, record, seal, issns)
    }
  })

  fieldsCards.innerHTML = cards
  removeLoader()
}

function buildCurrentCard(viewType, record, seal, issns) {
  let currentCard = ''

  switch (viewType) {
    case 'list':
      currentCard += `<div id="${record.id}" onclick="itemList(record.id)" class="list col col-sm-12">
        <a href="${host}/diadorim/Record/${record.id}?sid=14">
          <div class="field-card">
            ${seal}
          
            <div class="card-body">
              <div>
                <span>Situção: ${record?.situation}</span>
                <span>${record.title}</span>
              </div>
            
              <div>
                <span>ISSN: ${issns}</span>
                <span>Editora: ${record.publisher}</span>
              </div>
            </div>
          </div>
        </a>
      </div>`

      break
  
    case 'grade':
      currentCard += `<div id="${record.id}" onclick="itemList(record.id)" class="grade col col-md-6 col-lg-4">
        <a href="${host}/diadorim/Record/${record.id}?sid=14">
          <div class="field-card">
            ${seal}
    
            <div class="card-body">
              <span>Situção: ${record?.situation}</span>
              <span>${record.title}</span>
            </div>
    
            <div class="card-footer">
              <span>ISSN: ${issns}</span>
              <span>Editora: ${record.publisher}</span>
            </div>
          </div>
        </a>
      </div>`

      break
  }

  return currentCard
}

async function generateCard() {
  let records
  try {
    records = await getFields(currentPage)
    addCards(viewMode, records)
  } catch (errors) {
    console.error(errors)
  }
}

function getSealCard(sealColor) {
  let currentSeal = ''

  switch (sealColor) {
    case 'Branca':
      currentSeal = `<div class="svg-circle white-seal">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3C15 2.44772 15.4477 2 16 2H21C21.5523 2 22 2.44772 22 3V8C22 8.55228 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V4H16C15.4477 4 15 3.55228 15 3Z" fill="#363636"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L4.70711 20.7071C4.31658 21.0976 3.68342 21.0976 3.29289 20.7071C2.90237 20.3166 2.90237 19.6834 3.29289 19.2929L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289Z" fill="#363636"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21 15C21.5523 15 22 15.4477 22 16V21C22 21.5523 21.5523 22 21 22H16C15.4477 22 15 21.5523 15 21C15 20.4477 15.4477 20 16 20H20V16C20 15.4477 20.4477 15 21 15Z" fill="#363636"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.2929 15.7071C13.9024 15.3166 13.9024 14.6834 14.2929 14.2929Z" fill="#363636"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z" fill="#363636"/>
        </svg>
      </div>`

      break

    case 'Azul':
      currentSeal = `<div class="svg-circle blue-seal">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.00006C21.5523 6.00006 22 6.44778 22 7.00006V13.0001C22 13.5523 21.5523 14.0001 21 14.0001H15C14.4477 14.0001 14 13.5523 14 13.0001C14 12.4478 14.4477 12.0001 15 12.0001H20V7.00006C20 6.44778 20.4477 6.00006 21 6.00006Z" fill="#E8FBFF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 9.00006C9.87795 9.00019 7.84332 9.84303 6.34315 11.3432C4.84285 12.8435 4 14.8783 4 17.0001C4 17.5523 3.55228 18.0001 3 18.0001C2.44772 18.0001 2 17.5523 2 17.0001C2 14.3479 3.05357 11.8044 4.92893 9.92899C6.8043 8.05363 9.34784 7.00006 12 7.00006H12.001C14.462 7.00257 16.8356 7.91246 18.6677 9.55562L18.669 9.55677L21.669 12.2568C22.0795 12.6262 22.1128 13.2585 21.7433 13.669C21.3738 14.0795 20.7415 14.1128 20.331 13.7434L17.3323 11.0445C17.3321 11.0443 17.3319 11.0441 17.3316 11.0439C15.8662 9.72987 13.9678 9.00219 11.9995 9.00006Z" fill="#E8FBFF"/>
        </svg>
      </div>`

      break

    case 'Amarelo':
      currentSeal = `<div class="svg-circle yellow-seal">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3.55228 6 4 6.44772 4 7V12H9C9.55228 12 10 12.4477 10 13C10 13.5523 9.55228 14 9 14H3C2.44772 14 2 13.5523 2 13V7C2 6.44772 2.44772 6 3 6Z" fill="#463A01"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.999 7L12 7C14.6522 7 17.1957 8.05357 19.0711 9.92893C20.9464 11.8043 22 14.3478 22 17C22 17.5523 21.5523 18 21 18C20.4477 18 20 17.5523 20 17C20 14.8783 19.1571 12.8434 17.6569 11.3431C16.1567 9.84297 14.122 9.00013 12.0005 9C10.0322 9.00213 8.13374 9.72983 6.6683 11.0439C6.6681 11.0441 6.66851 11.0437 6.6683 11.0439L3.66897 13.7433C3.25846 14.1128 2.62617 14.0795 2.25671 13.669C1.88725 13.2585 1.92053 12.6262 2.33104 12.2567L5.33232 9.55556C7.16437 7.9124 9.53801 7.00251 11.999 7Z" fill="#463A01"/>
        </svg>
      </div>`

      break

    case 'Verde':
      currentSeal = `<div class="svg-circle green-seal">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 1.29289C16.6834 0.902369 17.3166 0.902369 17.7071 1.29289L21.7071 5.29289C22.0976 5.68342 22.0976 6.31658 21.7071 6.70711L17.7071 10.7071C17.3166 11.0976 16.6834 11.0976 16.2929 10.7071C15.9024 10.3166 15.9024 9.68342 16.2929 9.29289L19.5858 6L16.2929 2.70711C15.9024 2.31658 15.9024 1.68342 16.2929 1.29289Z" fill="#00552B"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7C6.20435 7 5.44129 7.31607 4.87868 7.87868C4.31607 8.44129 4 9.20435 4 10V11C4 11.5523 3.55228 12 3 12C2.44772 12 2 11.5523 2 11V10C2 8.67392 2.52678 7.40215 3.46447 6.46447C4.40215 5.52678 5.67392 5 7 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H7Z" fill="#00552B"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 13.2929C8.09763 13.6834 8.09763 14.3166 7.70711 14.7071L4.41421 18L7.70711 21.2929C8.09763 21.6834 8.09763 22.3166 7.70711 22.7071C7.31658 23.0976 6.68342 23.0976 6.29289 22.7071L2.29289 18.7071C1.90237 18.3166 1.90237 17.6834 2.29289 17.2929L6.29289 13.2929C6.68342 12.9024 7.31658 12.9024 7.70711 13.2929Z" fill="#00552B"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C21.5523 12 22 12.4477 22 13V14C22 15.3261 21.4732 16.5979 20.5355 17.5355C19.5979 18.4732 18.3261 19 17 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H17C17.7956 17 18.5587 16.6839 19.1213 16.1213C19.6839 15.5587 20 14.7956 20 14V13C20 12.4477 20.4477 12 21 12Z" fill="#00552B"/>
        </svg>
      </div>`

      break
  }

  return currentSeal
}

function watchPageChangeBtns() {
  let previousPage = document.getElementById('previousPage')
  let nextPage = document.getElementById('nextPage')

  disablePaginationBtns()

  previousPage.addEventListener('click', () => {
    changePagination()
  })

  nextPage.addEventListener('click', () => {
    changePagination(true)
  })
}

async function changePagination(nextPage) {
  nextPage ? currentPage += 1 : currentPage -= 1

  addLoader('.home_fields-cards')
  disablePaginationBtns()
  await generateCard()
}

function disablePaginationBtns() {
  previousPage.disabled = currentPage === 1

  currentPage === 1 ?
    previousPage.classList.add('btn-disabled') :
    previousPage.classList.remove('btn-disabled')

}

function addLoader(selector) {
  const divToAdd = document.querySelector(`${selector}`)

  divToAdd.innerHTML = `<div class="load">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>`
}

function addSealsLoader() {
  const divToAdd = document.querySelector('.home_cards')

  divToAdd.innerHTML = `<div class="seals-loader">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>`
}

function removeLoader() {
  const loader = document.querySelector('.load')
  if (loader) loader.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', function () {
  addLoader('.home_fields-cards')
  generateCard()
  sealsCountCard()
  watchPageChangeBtns()
})


/* ------------------------------------ */

function toggleVisualization(addClass, removeClass) {
  let selectorToAddClass = document.querySelector(addClass)
  let selectorToRemoveClass = document.querySelector(removeClass)

  selectorToAddClass.classList.add('active')
  selectorToRemoveClass.classList.remove('active')

  let classSplited = addClass.split('-')
  classSplited = classSplited[0].replace('.', '')
  
  viewMode = classSplited
  addCards(viewMode, currentRecords)
}