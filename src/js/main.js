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
    };
    
    function showBanners(i = 0) {
        banners[i].classList.remove('hide');
        banners[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    };

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
});