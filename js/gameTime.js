export function getTime(end, start){
    let dateRes = new Date(end - start)
    let hours = (dateRes.getHours() - 3 < 9) ? `0${dateRes.getHours() - 3}` : dateRes.getHours() - 3;
    let min = (dateRes.getMinutes()  < 9) ?  `0${dateRes.getMinutes()}` : dateRes.getMinutes();
    let sec = (dateRes.getSeconds()  < 9) ?  `0${dateRes.getSeconds()}` : dateRes.getSeconds();
    if(+hours === 0 && +min === 0) {
        return `Время ${sec} сек.`
    } else if( +hours === 0 && +min !== 0) {
        return `Время ${min} мин. ${sec} сек.`
    } else {
        return `Время ${hours} ч. ${min} мин. ${sec} сек.`
    }
}
