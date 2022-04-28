/* СКРИПТ ПЛАВНОЙ ПРОКРУТКИ К ЯКОРЯМ И ОТМЕТКИ ТЕКУЩИЙ СЕКЦИИ */

// Импортируем библиотеки "ScrollToSmooth"
import { ScrollToSmooth } from './scrolltosmooth';

// Находим все якоря
let anchors = document.querySelectorAll('[href^="#"]');

// Объявляем массив секции, на которые ссылаются якоря
let anchorsSections = [];

// Заполняем массив секций, на которые ссылаются якоря
for(let key of anchors){
    let anchorsToElementID = key.href.split('#')[1];
    let anchorsToElement = document.querySelector('#' + anchorsToElementID );
    anchorsSections.push(anchorsToElement)
}


// Настриваем бибилиотеку
let smoothScroll = new ScrollToSmooth('a', {
    // options here
    duration: 400,
    onScrollStart: (data) => { },
    onScrollUpdate: (data) => {  },
    onScrollEnd: (data) => { },

});

// Инициализируем библиотеку
smoothScroll.init();


// Используем Intersection Observer API для определения текущей секции при скролле
let observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            let anchorElement = document.querySelector(`[href^="#${entry.target.id}"]`)
            // Добавляем класс якорю, который ссылается на секцию в зоне видимости
            anchorElement.classList.add('anchors-navigation__itemActive');
            
        }else{
            let anchorElement = document.querySelector(`[href^="#${entry.target.id}"]`)

            // Удаляем класс якорю, при выходе из зоны видимости секции
            anchorElement.classList.remove('anchors-navigation__itemActive')
        }
    })
}, {threshold: .5});

// Проходимся по всем секциям и ставим observer слекдить за всеми секциями
anchorsSections.forEach(item =>{
    observer.observe(item)
})

