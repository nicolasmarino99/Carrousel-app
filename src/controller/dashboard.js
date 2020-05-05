import '../assets/styles/global.scss';
import { navView } from "../views/dashboard/navView";


const root = document.querySelector('.root')
root.insertAdjacentHTML('afterbegin',navView())
root.insertAdjacentHTML('beforeend','<div class="content"><div>')
export const content = root.querySelector('.content')

