const infoBtn = document.querySelector('.author')
const info = document.querySelector('.info')
const closeModal = document.querySelector('.close')

infoBtn.addEventListener('click', function(){
        info.style.display = 'block'
})
closeModal.addEventListener('click', function (){
        info.style.display = 'none'
})
