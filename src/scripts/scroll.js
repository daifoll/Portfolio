'use strict'

const projectsItems = document.querySelectorAll('.projects-item');
const projectsButton = document.querySelector('.bottom-header__text');

window.onload = function(){
    const item = projectsItems[0];
    projectsButton.addEventListener('click', scrollTo(item))
}


function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}