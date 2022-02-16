import { fractions, insertCards } from "./liberary.js"
import { cards } from "./index.js"

export let date;
export let score = document.querySelector('.score');
const btnStart = document.querySelector('#start')
export const select = document.querySelector('select')
const cardsIn = document.querySelector('.cardsIn')
let end = document.querySelector('.end');

btnStart.addEventListener('click', function(){
   newGame()
})
export function newGame(){
    end.innerHTML = ''
    date = new Date()
    cardsIn.innerHTML = ''
    let arr = cards.rand().slice(0, select.value/2)
    let gameArr =[...arr, ...arr].sort(i => Math.random() - 0.5)
    cardsIn.style.gridTemplateColumns = fractions(select);
    insertCards(gameArr, cardsIn)
}
const exit = document.querySelector('#exit')
exit.addEventListener('click', function(){
    cardsIn.innerHTML = ''
    score.textContent = '0'
    for(let option of select.options){
        option.setAttribute('disabled','')
    }
    select.options[0].removeAttribute('disabled')
    select.selectedIndex = 0
})

export default cardsIn;