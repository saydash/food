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
        item.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });

    });

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
}); 