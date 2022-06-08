'use strict'


let projectsItems = document.querySelectorAll('.projects-item');
let button = document.querySelector('.bottom-header__btn');
let item = projectsItems[0];
let itemRect = item.getBoundingClientRect();
let scrollVar = itemRect.top;


// Скролл до первого блока с проектом
document.addEventListener('DOMContentLoaded', ()=>{
    button.addEventListener('click', (event)=>{
        event.preventDefault()
        
        window.scroll({
            left: 0,
            top: itemRect.top,
            behavior: 'smooth'
        })
    })
})




