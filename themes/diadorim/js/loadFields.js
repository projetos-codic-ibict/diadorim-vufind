/* 
const axios = require("axios");

const api = axios.create({
  baseURL: URL,
}) */
const URL = 'http://localhost/diadorim/api/v1'

async function getFields() {
  /* console.log('getFields')
  try {
    const response = await api.get(`${URL}/search`)
    console.log('response', response)

  } catch (errors) {
    console.error(errors)
  } */

  let response
  try {
    /* ?type=AllFields&&sort=relevance&page=1&limit=0 */
    
    /* response = await api.get('http://localhost/diadorim/api/v1') */
    
    response = await fetch(`${URL}/search?type=AllFields`)
    response = await response.json()
    return response.records

    /* console.log('response', response.records) */
  } catch(errors) {
    console.error(errors)

  } finally {
  }
}

function addCardsList(records) {
  const fieldsCards = document.querySelector('.home_fields-cards')
  let cards = ''

  records.forEach(record => {
    if (record) {
      cards += `<div id="${record.id}" class="col col-md-4">
        <div class="field-card">
          <div class="svg-circle blue-seal ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.00006C21.5523 6.00006 22 6.44778 22 7.00006V13.0001C22 13.5523 21.5523 14.0001 21 14.0001H15C14.4477 14.0001 14 13.5523 14 13.0001C14 12.4478 14.4477 12.0001 15 12.0001H20V7.00006C20 6.44778 20.4477 6.00006 21 6.00006Z" fill="#E8FBFF"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 9.00006C9.87795 9.00019 7.84332 9.84303 6.34315 11.3432C4.84285 12.8435 4 14.8783 4 17.0001C4 17.5523 3.55228 18.0001 3 18.0001C2.44772 18.0001 2 17.5523 2 17.0001C2 14.3479 3.05357 11.8044 4.92893 9.92899C6.8043 8.05363 9.34784 7.00006 12 7.00006H12.001C14.462 7.00257 16.8356 7.91246 18.6677 9.55562L18.669 9.55677L21.669 12.2568C22.0795 12.6262 22.1128 13.2585 21.7433 13.669C21.3738 14.0795 20.7415 14.1128 20.331 13.7434L17.3323 11.0445C17.3321 11.0443 17.3319 11.0441 17.3316 11.0439C15.8662 9.72987 13.9678 9.00219 11.9995 9.00006Z" fill="#E8FBFF"/>
            </svg>
          </div>

          <div class="card-body">
            <span>Situção: Vigente</span>
            <span>${record.title}</span>
          </div>

          <div class="card-footer">
            <span>ISSN: ${record.id}</span>
            <span>Editora: Universidade de brasília (UNB)</span>
          </div>
        </div>
      </div>`
    }
  })

  fieldsCards.innerHTML = cards
}

async function generateCard () {
  let records
  try {
    records = await getFields()

    addCardsList(records)
  } catch (errors) {
    console.error(errors)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  generateCard()
})

