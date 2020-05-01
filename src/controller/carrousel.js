import { content } from "./dashboard";
import { asideView } from "../views/carrousel/asideView";
import { carrouselContainerView } from "../views/carrousel/carrouselContainerView";

content.insertAdjacentHTML('beforeend',carrouselContainerView())
content.insertAdjacentHTML('beforeend',asideView())

