"use strict"

document.addEventListener('DOMContentLoaded', function() {
    // содержимое контента
    const content = [
        {'img': 'l1.png', 'word': 'Алма', 'letter': 'А а', 'type': 'гласная', 'description': 'Аяз күрде бая гына:<br>Менеп түбә кыегына,<br>Күрше малае Әдип<br>Күгәрчен ояласын, дип,<br>Кагып куйды бер такта -<br>Хәреф булды шул чакта.'},
        {'img': 'l2.png', 'word': 'Әтәч', 'letter': 'Ә ә', 'type': 'гласная', 'description': 'Бу хәреф бит - ачык йозак,<br>Торма син уйлап озак!<br>Сорау борчый Солтанны:<br>Кем ачты икән аны?'},
        {'img': 'l3.png', 'word': 'Бака', 'letter': 'Б б', 'type': 'согласная', 'description': 'Менә хәреф-капкорсак.<br>Ни булыр төртеп ексак?<br>Ашаган ул биш бөккән,<br>Аннары бәлеш беткән,<br>Бер табак бавырсак.<br>Син булыш, белми торсак!'},
        {'img': 'l4.png', 'word': 'Вертолет', 'letter': 'В в', 'type': 'согласная', 'description': 'Вәсим әбисе белән<br>Күмәч пешерде бер мич.<br>Күмәчләре, мин беләм,<br>Нәкъ бер хәреф кебек ич!'},
        {'img': 'l5.png', 'word': 'Гөмбә', 'letter': 'Г г', 'type': 'согласная', 'description': 'Хәреф, дип, карап торам -<br>Төзелештә бик зур кран.<br>Озын муен шуңа ярый -<br>Югарыдан безгә карый.'},
        {'img': 'l6.png', 'word': 'Дөя', 'letter': 'Д д', 'type': 'согласная', 'description': 'Карап тордык без бергә -<br>Охшаган әзрәк Д гә.<br>Түргә менеп утырды,<br>Чынаяклар тутырды.<br>Уф-уф!- дия самавыр,-<br>Ардым, хәлләрем авыр!'},
        {'img': 'l7.png', 'word': 'Елан', 'letter': 'Е е', 'type': 'гласная', 'description': 'Иске инде тарагым,<br>Өч кенә теше калган.<br>Күрегезче, дусларым,<br>Нәкъ Е хәрефе булган!'},
        {'img': 'l8.png', 'word': 'Жираф', 'letter': 'Ж ж', 'type': 'согласная', 'description': 'Кар бөртеге дип торам,-<br>Диде кечкенә Кирам.-<br>Бик матур хәреф икән!<br>Исеңдә калдыр, иркәм!'},
        {'img': 'l9.png', 'word': 'Җиләк', 'letter': 'Җ җ', 'type': 'согласная', 'description': 'Ж хәрефе койрык тапкан,<br>Алган да аны таккан.<br>Кара әле, Гөлгенә,<br>Койрык кечкенә генә.'},
        {'img': 'l10.png', 'word': 'Зебра', 'letter': 'З з', 'type': 'согласная', 'description': 'Тиз чаба кызыл үгез,<br>З хәрефе башында.<br>Хәреф түгел бу - мөгез,<br>Торма аның каршында.'},
        {'img': 'l11.png', 'word': 'Ишәк', 'letter': 'И и', 'type': 'гласная', 'description': 'Алабыз өч киң такта<br>Һәм ясыйбыз җил-капка.<br>Тар такталар да кирәк.<br>Нинди хәреф? Кем зирәк?'},
        {'img': 'l12.png', 'word': 'Йозак', 'letter': 'Й й', 'type': 'согласная', 'description': 'Кош кунган ич җил-капкага,<br>Очып китәргә тора.<br>Хәзер миннән,- дим апага,-<br>Хәреф исемен сора.'},
        {'img': 'l13.png', 'word': 'Кыяр', 'letter': 'К к', 'type': 'согласная', 'description': 'Менә каен ботагын<br>Кемдер сындырып киткән.<br>Бу нинди хәреф тагын,<br>Миңа кем әйтер икән?'},
        {'img': 'l14.png', 'word': 'Лимон', 'letter': 'Л л', 'type': 'согласная', 'description': 'Алдында да шул хәреф,<br>Артында да шул хәреф.<br>Әйтәсең син уйласаң<br>Һәм түбәгә карасаң.'},
        {'img': 'l15.png', 'word': 'Миләш', 'letter': 'М м', 'type': 'согласная', 'description': 'Без икәү дуслаштык,<br>Кулга кул да тотыштык.<br>Әйтергә дә бит әзер,<br>Нинди хәреф без хәзер.'},
        {'img': 'l16.png', 'word': 'Нарат', 'letter': 'Н н', 'type': 'согласная', 'description': 'Өй артында сөялеп,<br>Җыелма баскыч тора.<br>Нинди хәреф, әйт әле?<br>Баскычны сүтеп кара.'},
        {'img': 'l17.png', 'word': 'Яңгыр', 'letter': 'Ң ң', 'type': 'согласная', 'description': 'Табышмак син тапкырга:<br>Сүз башында күрмисең,<br>Ул уртада, ахырда.<br>Әллә инде белмисең?'},
        {'img': 'l18.png', 'word': 'Он', 'letter': 'О о', 'type': 'гласная', 'description': 'Охшаган күп әйбергә<br>Бу хәреф, уйлыйк бергә:<br>Клиндергә, тәгәрмәчкә,<br>Коймакка, пәрәмәчкә,<br>Тәлинкәгә, карбызга...<br>Бик зур ачык авызга.'},
        {'img': 'l19.png', 'word': 'Өстәл', 'letter': 'Ө ө', 'type': 'гласная', 'description': 'О хәрефе билбау буган,<br>Шуннан яңа хәреф булган.<br>Хәтта бозау белә аны,<br>Шулай булгач, син дә таны.'},
        {'img': 'l20.png', 'word': 'Поши', 'letter': 'П п', 'type': 'согласная', 'description': 'Озын ике аяклы,<br>Өсте тимер таяклы.<br>Буем җитми моңа-дип,<br>Аптырап тора Нәҗип.<br>Менәргә теләп туйды,<br>Хәреф ич-диеп куйды.'},
        {'img': 'l21.png', 'word': 'Рәссам', 'letter': 'Р р', 'type': 'согласная', 'description': 'Бу җилкәнне җилләр екмый,<br>Давыллардан курыкмый,<br>Ертылмый да, тишелми дә,<br>Ватылмый, ишелми дә.'},
        {'img': 'l22.png', 'word': 'Суган', 'letter': 'С с', 'type': 'согласная', 'description': 'Серле бугай ул үзе,<br>Төнлә генә күп сүзе.<br>Бу хәрефме, әйт Сара?<br>Чагыштыр, күккә кара!'},
        {'img': 'l23.png', 'word': 'Ташбака', 'letter': 'Т т', 'type': 'согласная', 'description': 'Тылсымчылар килерләр<br>Бүген безгә, Тәслимә,<br>Зур тәлинкә эләрләр<br>Тәрәзәбез өстенә.<br>Зур тәлинкә нигә аңа?<br>Тәрәзә бит ашамый.<br>Телевизор шунсыз, аңла,<br>Сөйли, җырлый башламый.'},
        {'img': 'l24.png', 'word': 'Урындык', 'letter': 'У у', 'type': 'гласная', 'description': 'Карыйм-карыйм, нәрсә бу?<br>Әкәм-төкәм? Әллә У?<br>У хәрефе - таныш бул,<br>Сиңа очрар бик еш ул!'},
        {'img': 'l25.png', 'word': 'Үрдәк', 'letter': 'Ү ү', 'type': 'гласная', 'description': 'Охшатса да рогаткага<br>Юньсез малайлар мине,<br>Аталмаслар бернәрсәгә -<br>Мин хәреф булам инде.'},
        {'img': 'l26.png', 'word': 'Фил', 'letter': 'Ф ф', 'type': 'согласная', 'description': 'Бу мактанчыкка кара,<br>Масаеп басып тора,<br>Ә куллары билендә -<br>Ф хәрефе бит инде!'},
        {'img': 'l27.png', 'word': 'Хат', 'letter': 'Х х', 'type': 'согласная', 'description': 'Флюгер ясады Хәмит,<br>Бүген капкага элде.<br>Хәрефкә охшаган бит -<br>Ул аны күптән белде.'},
        {'img': 'l28.png', 'word': 'Һәйкәл', 'letter': 'Һ һ', 'type': 'согласная', 'description': 'Урындык кебек икән,<br>Тик утыра алмыйсың,<br>Зиһенле булсаң, иркәм,<br>Бу хәрефне таныйсың.'},
        {'img': 'l29.png', 'word': 'Цирк', 'letter': 'Ц ц', 'type': 'согласная', 'description': 'Бу хәрефкә юк, Мәликә,<br>Татарча ике сүз дә.<br>Ул нинди хәреф икән?<br>Кызык, тизрәк әйт безгә!'},
        {'img': 'l30.png', 'word': 'Чана', 'letter': 'Ч ч', 'type': 'согласная', 'description': 'Бик охшаганнар алар,<br>Бертөрле язылалар.<br>Сан да икән, хәреф тә -<br>Танышырсың дәрестә.'},
        {'img': 'l31.png', 'word': 'Шикәр', 'letter': 'Ш ш', 'type': 'согласная', 'description': 'Әгәр сапсыз булса сәнәк,<br>Шул хәрефкә менә әзрәк<br>Охшаган бит, Шамил, әйме?<br>Дөрес әйтәсең, Фәймә.'},
        {'img': 'l32.png', 'word': 'Щетка', 'letter': 'Щ щ', 'type': 'согласная', 'description': 'Әзрәк сынды тоткасы,<br>Щ кебек теш щёткасы.<br>Әни, миңа,-ди, Зирәк<br>Яңа щётка бир тизрәк!'},
        {'img': 'l33.png', 'word': 'Калынлык билгесе', 'letter': 'Ъ ъ', 'type': 'мягкая', 'description': 'Ачкычка охшап тора,<br>Буратинодан сора -<br>Ишекне ачты микән?<br>Беләсе килә, иркәм.'},
        {'img': 'l34.png', 'word': 'Ылыс', 'letter': 'Ы ы', 'type': 'гласная', 'description': 'Балта һәм нечкә бүкән<br>Рәттән басканнар икән.<br>Нинди хәреф, әйт, Иркә?<br>Берни сорамыйм бүтән.'},
        {'img': 'l35.png', 'word': 'Нечкәлек билгесе', 'letter': 'Ь ь', 'type': 'мягкая', 'description': 'Китеп тора һушларым,<br>Бу нәрсә соң, дусларым?<br>Яки аш чүмечеме,<br>Бабайның трубкасымы,<br>Әнинең алкасымы?'},
        {'img': 'l36.png', 'word': 'Энә', 'letter': 'Э э', 'type': 'гласная', 'description': 'Бик үткен күзле булгач,<br>Мин, әлбәттә, төз атам.<br>Җәягә укны куйгач,<br>Бер хәрефкә охшатам.'},
        {'img': 'l37.png', 'word': 'Юлбарыс', 'letter': 'Ю ю', 'type': 'гласная', 'description': 'Кар ишеп ява юлга.<br>Юныс шар тәгәрәтә.<br>Икесе торып рәттән,<br>Бераз охшыйлар Ю га.'},
        {'img': 'l38.png', 'word': 'Ябалак', 'letter': 'Я я', 'type': 'гласная', 'description': 'Бу тәкәббер әфәнде<br>Хәрефкә охшап тора.<br>Аны беләсең инде -<br>Игътибар белән кара.'},
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
                            <img src="./static/img/2-${content[letterIndex]['img']}" alt="2-${content[letterIndex]['img']}">
                        </div>
                        <div class="letter-info__word">
                            ${content[letterIndex]['word']}
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