import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

console.log('I am JavaScript running in your page!')

let mainArea = document.querySelector('main')

films.forEach(function(film) {
   let filmDiv = document.createElement('div')
   let filmTitle = document.createElement('h1')
   let filmCrawl = document.createElement('p')

   filmTitle.textContent = film.title
   filmCrawl.textContent = film.opening_crawl

filmDiv.appendChild(filmTitle)
filmDiv.appendChild(filmCrawl)

   mainArea.appendChild(filmDiv);
}); 
mainArea.appendChild


people.forEach((person) => {
    let personDiv = document.createElement('div', 'charDiv')
    let name = document.createElement('h3')
    let gender = document.createElement('p')
    let pic = document.createElement('img', 'picDiv')

    let charNum = getCharNumber(person.url)
 
    name.textContent = person.name
    gender.textContent = `Gender: ${person.gender}`
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
 
 personDiv.appendChild(name)
 personDiv.appendChild(gender)
 personDiv.appendChild(pic)
 
    mainArea.appendChild(personDiv)

    personDiv.setAttribute('class', 'charDiv')
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ){
        return (charID.slice(1,2))
    } else {
        return charID
    }
}

const allDivs = Array.from(document.querySelectorAll('div'))
console.log(allDivs)
const mainHeader = document.querySelector('header')
let maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'


maleButton.addEventListener('click', () => {
    let matchedDiv = allDivs.findIndex((oneDiv) => {
        femaleCharacters.forEach(character => {
        return oneDiv.firstChild.textContent === character.name
        })
       /* if(matchedDiv.getAttribute('style') === "display: none;") {
            matchedDiv[0].setAttribute("style", "display: revert;")
} */
    matchedDiv[0].setAttribute("style", "display: none;")
    })
})



let femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
femaleButton.addEventListener('click', () => {
    let matchedDiv = allDivs.findIndex((oneDiv) => {
        maleCharacters.forEach(character => {
        return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: revert;")
    })
})
mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)


const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')

/* command + f brings up a search thing, check boxes to limit items to search words. ex: "male" to find if the gender is male*/
console.log(maleCharacters)
console.log(femaleCharacters)









