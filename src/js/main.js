document.addEventListener('DOMContentLoaded', () => {
    const banners = document.querySelectorAll('.tabcontent'),
          header = document.querySelector('.tabheader__items'),
          tabs = document.querySelectorAll('.tabheader__item');
    
          
    function hideBanners() {
        banners.forEach(i => {
            i.classList.remove('show');
            i.classList.add('hide');
            
        });
        tabs.forEach(i => {
            i.classList.remove('tabheader__item_active');
        });
    }
    
    function showBanners(i = 0) {
        banners[i].classList.remove('hide');
        banners[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideBanners();
    showBanners();


    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item,i) => {
                if (item == target) {
                    hideBanners();
                    showBanners(i);
                }
            });
        }
    });

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCLoseBtn = document.querySelector('[data-close]');
    


    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);

    });

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow= '';
    }

    modalCLoseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        const target = e.target;
        if (target == modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.code === "KeyA" && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    const modalTimerId = setTimeout(openModal, 4000);

    function openModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', openModalByScroll);
        }
    }

    window.addEventListener('scroll', openModalByScroll);

    // Class 

    class MenuCard {
        constructor (src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 27;
            this.parent = document.querySelector(parentSelector);
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            
            this.parent.append(element);

        }

    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        10,
        '.menu .container'

    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        8,
        '.menu .container'

    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        12,
        '.menu .container'

    ).render();
    
    // Timer

    const deadline = '2020-12-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) %60),
              seconds = Math.floor((t / 1000) %60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            const t = getTimeRemaining(endtime);
            
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
}); 