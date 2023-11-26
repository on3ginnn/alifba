"use strict"

document.addEventListener('DOMContentLoaded', function() {
    // содержимое контента
    const content = [
        {'img': 'l1.png', 'letter': 'А а', 'type': 'гласная', 'description': 'Является более заднеязычным, чем русский, и более огубленным, особенно в корне слова, а в последующих словах эта огуб­ленность теряется.'},
        {'img': 'l2.png', 'letter': 'Ә ә', 'type': 'гласная', 'description': 'Мягкая пара звука а произно­сится более открыто, чем русский звук э. При его произно­шении рот открывается шире, нижняя челюсть опускается, язык прижимается к нижней челюсти.'},
        {'img': 'l3.png', 'letter': 'Б б', 'type': 'согласная', 'description': ''},
        {'img': 'l4.png', 'letter': 'В в', 'type': 'согласная', 'description': ''},
        {'img': 'l5.png', 'letter': 'Г г', 'type': 'согласная', 'description': ''},
        {'img': 'l6.png', 'letter': 'Д д', 'type': 'согласная', 'description': ''},
        {'img': 'l7.png', 'letter': 'Е е', 'type': 'гласная', 'description': ''},
        {'img': 'l8.png', 'letter': 'Ж ж', 'type': 'согласная', 'description': ''},
        {'img': 'l9.png', 'letter': 'Җ җ', 'type': 'согласная', 'description': ''},
        {'img': 'l10.png', 'letter': 'З з', 'type': 'согласная', 'description': ''},
        {'img': 'l11.png', 'letter': 'И и', 'type': 'гласная', 'description': ''},
        {'img': 'l12.png', 'letter': 'Й й', 'type': 'согласная', 'description': ''},
        {'img': 'l13.png', 'letter': 'К к', 'type': 'согласная', 'description': ''},
        {'img': 'l14.png', 'letter': 'Л л', 'type': 'согласная', 'description': ''},
        {'img': 'l15.png', 'letter': 'М м', 'type': 'согласная', 'description': ''},
        {'img': 'l16.png', 'letter': 'Н н', 'type': 'согласная', 'description': ''},
        {'img': 'l17.png', 'letter': 'Ң ң', 'type': 'согласная', 'description': ''},
        {'img': 'l18.png', 'letter': 'О о', 'type': 'гласная', 'description': ''},
        {'img': 'l19.png', 'letter': 'Ө ө', 'type': 'гласная', 'description': ''},
        {'img': 'l20.png', 'letter': 'П п', 'type': 'согласная', 'description': ''},
        {'img': 'l21.png', 'letter': 'Р р', 'type': 'согласная', 'description': ''},
        {'img': 'l22.png', 'letter': 'С с', 'type': 'согласная', 'description': ''},
        {'img': 'l23.png', 'letter': 'Т т', 'type': 'согласная', 'description': ''},
        {'img': 'l24.png', 'letter': 'У у', 'type': 'гласная', 'description': ''},
        {'img': 'l25.png', 'letter': 'Ү ү', 'type': 'гласная', 'description': ''},
        {'img': 'l26.png', 'letter': 'Ф ф', 'type': 'согласная', 'description': ''},
        {'img': 'l27.png', 'letter': 'Х х', 'type': 'согласная', 'description': ''},
        {'img': 'l28.png', 'letter': 'Һ һ', 'type': 'согласная', 'description': ''},
        {'img': 'l29.png', 'letter': 'Ц ц', 'type': 'согласная', 'description': ''},
        {'img': 'l30.png', 'letter': 'Ч ч', 'type': 'согласная', 'description': ''},
        {'img': 'l31.png', 'letter': 'Ш ш', 'type': 'согласная', 'description': ''},
        {'img': 'l32.png', 'letter': 'Щ щ', 'type': 'согласная', 'description': ''},
        {'img': 'l33.png', 'letter': 'Ъ ъ', 'type': 'мягкая', 'description': ''},
        {'img': 'l34.png', 'letter': 'Ы ы', 'type': 'гласная', 'description': ''},
        {'img': 'l35.png', 'letter': 'Ь ь', 'type': 'мягкая', 'description': ''},
        {'img': 'l36.png', 'letter': 'Э э', 'type': 'гласная', 'description': ''},
        {'img': 'l37.png', 'letter': 'Ю ю', 'type': 'гласная', 'description': ''},
        {'img': 'l38.png', 'letter': 'Я я', 'type': 'гласная', 'description': ''},
        {'img': '', 'letter': '', 'type': '', 'description': ''},
    ];
    // активная буква
    let activeLetter = document.querySelector('.letter._active');
    // проверка на наличие data-index(индекс буквы в content)
    if (activeLetter.hasAttribute('data-index')) {
        setContent(activeLetter);
    }

    // функция замены контента
    function setContent(activeLetter){
        let letterIndex = +activeLetter.dataset.index;
        let letterType = '';

        // тип буквы
        if (content[letterIndex]['type'] === 'мягкая'){
            letterType = 'soft';
        } else if (content[letterIndex]['type'] === 'согласная'){
            letterType = 'consonant';
        } else if (content[letterIndex]['type'] === 'гласная'){
            letterType = 'vowel';
        }

        const contentHTML = `
        <article class="information__content content">
            <div class="content__spell">
                <div class="content__letter">
                    <img src="./static/img/${content[letterIndex]['img']}" alt="${content[letterIndex]['img']}">
                </div>
                <div class="content__grammar letter-info">
                    <article class="content__letter-info">
                        <div data-id="${activeLetter.id}" class="content__voice">
                            <img src="./static/img/speaker.svg" alt="speaker.svg">
                        </div>
                        
                        <div class="content__letter-text">
                            <div class="content__letter-symbhol">
                                ${content[letterIndex]['letter']}
                            </div>
                            <span class="content__letter-type ${letterType}">
                                ${content[letterIndex]['type']}
                            </span>
                        </div>
                    </article>
                    <div class="letter-info__description">

                    <div class="letter-info__text">
                        <div class="letter-info__img">
                            <img src="./static/img/apple.png" alt="apple.png">
                        </div>
                        <div class="letter-info__word">
                            Алма
                        </div>
                    </div>

                        ${content[letterIndex]['description']}
                    </div>

                </div>
            </div>
        </article>
        `
        
        let contentBody = document.querySelector('.content-body');
        contentBody.innerHTML = contentHTML;
    }

    // обработка клика по документу
    function documentClick(event){
        // смена языка
        if (event.target.closest('.switch__field')){
            // свитч на который нажали
            let switchLang = event.target.closest('.switch');
            // назначение _active свитчу
            switchLang.classList.toggle('_active');

            // написать функцию для переключения языка
        }
        // клик на букву
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

            if (letterActive.hasAttribute('data-index')) {
                setContent(letterActive);
            }
        }
        // голосовая озвучка буквы
        if (event.target.closest('.content__voice')){
            let voiceData = event.target.closest('.content__voice');

            if (voiceData.hasAttribute('data-id')){
                const audio = new Audio(`/static/voice/${voiceData.dataset.id}.mp3`);

                audio.play();
            }
        }
        // навигатор
        if (event.target.closest('[data-goto]')) {
            const gotoItem = event.target.closest('[data-goto]');
            if (gotoItem.dataset.goto) {
                const gotoBlock = document.querySelector(gotoItem.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                // // при мобильном меню его надо сворачивать
                // let headerContent = event.target.closest('.header-content');

                // document.body.classList.remove('_lock')
                // headerContent.classList.remove('_active');

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
            }
        }
    }

    // обработчик событий клика на странице
    document.addEventListener('click', documentClick);
    
});