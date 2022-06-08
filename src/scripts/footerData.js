// Скрипт для выгрузки актуальных проектов и даты в footer

'use strict'

/* ПОЛУЧАЕМ И ВЫВОДИМ ВСЕ ПРОЕКТЫ В FOOTER */
const FOOTER_PROJECTS = document.querySelector('.footer-projects__wrapper')
const PROJECTS = document.querySelectorAll('.projects-item');

for(let i = 0; i < PROJECTS.length; i++){

    let project_a = document.createElement('a');
    project_a.classList.add('footer-projects__item');
    project_a.innerText = PROJECTS[i].querySelector('.projects-header__item').innerText.slice(1, -1);
    project_a.href = PROJECTS[i].querySelector('.projects-button__watchBtn').href;
    project_a.target = '_blank';
    FOOTER_PROJECTS.append(project_a);
}


/* ВЫВОДИМ АКТУАЛЬНУЮ ДАТУ */
const FOOTER_DATE = document.querySelector('.footer-date__item');

FOOTER_DATE.innerText = new Date().getFullYear() + ' г.'



