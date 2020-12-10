const container = document.querySelector(".container");
const card = document.querySelector('.card');
// Item:
const img = document.querySelector('.logo_dark img')
const title = document.querySelector('.info h1')
const info = document.querySelector('.info h3')
const description = document.querySelector('.desciption')
const purchase = document.querySelector('.purchase button')
// Movinf animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// Animate In.
container.addEventListener("mouseenter",(e)=>{
    card.style.transition = "none";

    title.style.transform = "translateZ(150px)"
    img.style.transform = "translateZ(180px)"
    info.style.transform = "translateZ(125px)"
    description.style.transform = "translateZ(100px)"
    purchase.style.transform = "translateZ(75px)"

})

container.addEventListener("mouseleave", (e)=>{
    card.style.transition = "all 0.5s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)"
    img.style.transform = "translateZ(0px)"
    info.style.transform = "translateZ(0px)"
    description.style.transform = "translateZ(0px)"
    purchase.style.transform = "translateZ(0px)"

})
