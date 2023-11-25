"use strict"

document.addEventListener('DOMContentLoaded', function() {

    const content = [``];

    function documentClick(event){
        // смена языка
        if (event.target.closest('.switch__field')){
            // свитч на который нажали
            let switchLang = event.target.closest('.switch');
            // назначение _active свитчу
            switchLang.classList.toggle('_active');

            // написать функцию для переключения языка
        }
        if (event.target.closest('.letter')){
            // буква на который клик был
            let letterActive = event.target.closest('.letter');
            // все буквы
            let letterItems = document.querySelectorAll('.letter');

            // перебор всех букв и удаление класса _active
            letterItems.forEach(item => {
                item.classList.remove('_active');
            });

            // назначение _active букве
            letterActive.classList.add('_active');

            console.log(letterActive.hasAttribute('data-index'));
            if (letterActive.hasAttribute('data-index')) {
                let letterIndex = +letterActive.dataset.index ?? 'fale';


            }
        }
        if (event.target.closest('.content__voice')){
            let voiceData = event.target.closest('.content__voice');
            
            if (voiceData.hasAttribute('data-id')){
                const audio = new Audio(`/static/voice/${voiceData.dataset.id}.mp3`);

                audio.play();
            }
        }
    }

    // обработчик событий клика на странице
    document.addEventListener('click', documentClick);
    
});
