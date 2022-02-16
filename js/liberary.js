import { select , newGame, date, score} from "./start.js";
import{win} from './audio.js'
import { getTime } from "./gameTime.js";

export function fractions(select){
        let l = select.options[select.options.selectedIndex].innerText.slice(0,1);
        let text = '';
        for (let i = 1; i <= l; i++) {
            text += '1fr '
        }
        return text;
        }
export function insertCards(arr, parent){
    for(let num of arr) {
        let img = document.createElement('img');
        img.src = 'img/cards/none.jpg'
        img.setAttribute('index', num)
        parent.append(img)
    }
}
export function closeImgs(parent){
    for (let child of parent.children){
       if (child.style.transform === 'rotateY(180deg)') child.style.transform = '';
       setTimeout (()=>{  
        child.src = 'img/cards/none.jpg'
        }, 200 );  
    }
}
export function removeImgs(parent) {
    for (let child of parent.children){
        if (child.src.split('.')[3].slice(-4) === 'none') {
           continue;
        } else {
            child.style.opacity = '0'
        }
    }
}
export function checkWins(parent) {
    let count = 0
    for (let child of parent.children){
        if (child.style.opacity !== '0') {
            ++count;
        } else {
           continue;
        }
    }
    if (count === 0) {
        let date2 = new Date()
        let end = document.querySelector('.end')
        let div = document.createElement('div')
        let btn = document.createElement('button');
        (select.options.selectedIndex < 8) ? btn.textContent = 'Следующий уровень' :  btn.textContent = 'Финальный уровень';
        div.innerHTML =`<p> Победа!</p><p> ${getTime(date2, date)}.</p> <p>Очки: ${score.textContent}</p>`
        win.play()
        end.append(div)
        end.append(btn)
        if (select.options.selectedIndex < 9 ){
            select.options[select.options.selectedIndex +1].removeAttribute('disabled')
            select.selectedIndex++;
       }
        btn.addEventListener('click', function x(){
            div.remove()
            newGame()
            btn.removeEventListener('click', x)
            btn.remove()
        })
    }
}
export function rotateImg(targ, num) {
    targ.style.transform = ('rotateY(180deg)')
    setTimeout (()=>{  
        targ.src = `img/cards/${num}.jpg`
    }, 200 );
}
export function scoreAnimate(score, l, t, isPositive){
    let bubble = document.createElement('h1')
    bubble.textContent = score.textContent;
    bubble.style.left = `${l}px`
    bubble.style.top = `${t}px`
    document.body.append(bubble);
    (isPositive) ? bubble.style.color = 'rgb(23, 201, 0)' 
    : bubble.style.color = 'rgb(163, 53, 53)';
    setTimeout(() => bubble.className = 'bubble', 0)
    setTimeout(() => bubble.remove(), 600)
}