const list = document.querySelector(".menu")
const menu = document.querySelector(".icon_menu")
const equis = document.querySelector(".icon_equis")

menu.addEventListener("click", ()=>{
   list.classList.toggle("menu_barr")
})
equis.addEventListener("click", ()=>{
   list.classList.toggle("menu_barr")
})

const elemntsList = document.querySelectorAll(".menu li")
const elemntsListA = document.querySelectorAll(".menu li a")
console.log(elemntsList)
elemntsListA.forEach((item, psi) => {
   item.addEventListener("click", () => {
      setTimeout(()=>{
         list.classList.toggle("menu_barr")
      }, 500)
      elemntsListA.forEach((item2, psi2) => {
         elemntsList[psi2].classList.remove("active")
      })
      elemntsList[psi].classList.add("active")
   })
})

const nav = document.querySelector(".header nav")
document.addEventListener("scroll", () => {
   nav.classList.toggle("style", window.scrollY > 120)
})