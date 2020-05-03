import { content } from "./dashboard";
import { asideView } from "../views/carrousel/asideView";
import { carrouselContainerView } from "../views/carrousel/carrouselContainerView";
import { db } from "../db/database";
let infoCarrousel
let counter = -1
const next = () => {
    counter += 1
    if (counter == 4) counter = 0
    infoCarrousel = db[counter]
    console.log(infoCarrousel)
    content.innerHTML = ''
    content.insertAdjacentHTML('beforeend',carrouselContainerView(infoCarrousel))
    content.insertAdjacentHTML('beforeend',asideView(infoCarrousel))
}

let nextSlide = setInterval(next,10000)

console.log(nextSlide)




