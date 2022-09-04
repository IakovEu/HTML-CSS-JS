// touchstart
// touchmove
// touchend
// touchenter                           ~события на мобильном устройстве~
// touchleave
// touchcancel                      

window.addEventListener("DOMContentLoaded", () => {
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
        // console.log(e.touches);          // ~Формирует тачлист (Пальцы соприкосающиеся сейчас с экраном)~
        // console.log(e.targetTouches);    // ~Формирует тачлист (Пальцы соприкосающиеся сейчас с конкретным объектом)~
        // console.log(e.changedTouches);   // ~Формирует тачлист (Убрал один из пальцев соприкосающихся с конкретным объектом)~
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('move');
        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('end');
    });

});