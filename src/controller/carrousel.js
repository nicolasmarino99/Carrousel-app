import { content } from "./dashboard";
import { asideView } from "../views/carrousel/asideView";
import { carrouselContainerView } from "../views/carrousel/carrouselContainerView";
import { db } from "../db/database";

let infoCarrousel
let infoCarrousel1
let infoCarrousel2
let infoCarrousel3
let counter = 3
let counter1 = 4
let counter2 = 1
let counter3 = 2

const mod = (n, m) => {
    const remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
};
const setCarrouselState = (sign) => {
   if (sign === 'forwads') {
        counter += 1
        counter = mod(counter,4)
        counter1 += 1 
        counter1 = mod(counter1,4)
        counter2 += 1 
        counter2 = mod(counter2,4)
        counter3 += 1 
        counter3 = mod(counter3,4)
    } else if (sign === 'backwards') {
        counter -= 1
        counter = mod(counter,4)
        counter1 -= 1 
        counter1 = mod(counter1,4)
        counter2 -= 1 
        counter2 = mod(counter2,4)
        counter3 -= 1 
        counter3 = mod(counter3,4)
    }
}
const insertDataToCarrousel = () => {
    infoCarrousel = db[counter]
    infoCarrousel1 = db[counter1]
    infoCarrousel2 = db[counter2]
    infoCarrousel3 = db[counter3]
    content.innerHTML = ''
    content.insertAdjacentHTML('beforeend',carrouselContainerView(infoCarrousel))
    content.insertAdjacentHTML('beforeend',asideView(infoCarrousel,infoCarrousel1,infoCarrousel2,infoCarrousel3))
    const prevBtn = content.querySelector('#previous')
    const nextBtn = content.querySelector('#next')
    prevBtn.addEventListener('click',()=>{prev()})
    nextBtn.addEventListener('click',()=>{next()})
}

const next = () => {
    setCarrouselState('forwads')
    insertDataToCarrousel()
}
const prev = () => {
    setCarrouselState('backwards')
    insertDataToCarrousel()
}



next()
let nextSlide = setInterval(next,7000)





