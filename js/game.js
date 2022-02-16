import cardsIn from "./start.js";
import {closeImgs, removeImgs, checkWins} from './liberary.js'
import { score, select } from "./start.js"
import{click, back, del} from './audio.js'
import {rotateImg} from './liberary.js'

let isOpened = 0;
let checkIndex;
let targ = 0;



cardsIn.addEventListener('click', function(){
   if(event.target.tagName === 'IMG') {
       click.play()
    if (isOpened === 0 && event.target.style.opacity !== '0') {
        targ = event.target
        isOpened++
        let num = targ.getAttribute('index')
        checkIndex = num;
        rotateImg(targ, num)
    } else if (isOpened === 1 && targ !== event.target && event.target.style.opacity !== '0') {
        isOpened++;
        targ = event.target
        let num = event.target.getAttribute('index')
        rotateImg(targ, num)
        if ( checkIndex === num ) {
            setTimeout(() => {
                targ = 0;
                checkIndex = undefined; 
                isOpened = 0;
                score.textContent = +score.textContent + 10*select.value;
                del.pause()
                del.currentTime = '0'
                del.play()
                removeImgs(cardsIn)
                checkWins(cardsIn)
            }, 1200);
        } else {
            setTimeout(() => {
                back.pause()
                back.currentTime = '0'
                back.play()
                targ = 0;
                checkIndex = undefined; 
                isOpened = 0;
                score.textContent -= 5*select.value/2;
                closeImgs(cardsIn)
            }, 1200);
        }
    }
   }
})

