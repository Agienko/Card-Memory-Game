export const cards ={
    arr : [],
    rand(){
     return this.arr.sort(i => Math.random() - 0.5)
    }
}
for(let i = 1; i <= 41; i++) {
    cards.arr.push(i)
}




