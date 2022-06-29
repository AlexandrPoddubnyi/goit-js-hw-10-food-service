import data from '../db/menu.json'
import menuTemplate from '../templates/menuTemplate.hbs'

const menuList = document.querySelector('.js-menu');
const cardMurcup = menuTemplate(data);

menuList.insertAdjacentHTML("afterbegin", cardMurcup);

// function createMenuCardSet(data) {
//   return data.map(menuTemplate).join('');
// }