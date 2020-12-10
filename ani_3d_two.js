const container = document.querySelector('.container')
const card = document.querySelector('.card')

const img = document.querySelector('.logo img')
const title = document.querySelector('.title')
const description = document.querySelector('.description h3')
const buttons = document.querySelector('.sizes')
const purchase = document.querySelector('.purchase')

container.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth/2-e.pageX)/18;
    let yAxis = (window.innerHeight/2-e.pageY)/18;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
container.addEventListener('mouseenter',(e)=>{
    img.style.transform =`translateZ(150px)rotateZ(-35deg)`
    title.style.transform =`translateZ(150px)`
    description.style.transform =`translateZ(140px)`
    buttons.style.transform =`translateZ(100px)`
    purchase.style.transform =`translateZ(110px)`
    card.style.transition="none"  


})

container.addEventListener('mouseleave',(e)=>{
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    card.style.transition="all 0.5s ease"

    img.style.transform =`translateZ(0) rotateZ(0deg)`
    title.style.transform =`translateZ(0)`
    description.style.transform =`translateZ(0)`
    buttons.style.transform =`translateZ(0)`
    purchase.style.transform =`translateZ(0)`
})