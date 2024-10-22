import willChange from "../_willChange";

export default function portfolioPopup() {

    const portfolioPopup = document.querySelector('.portfolio__popup'),
          portfolioPopupPreloader = document.querySelector('.portfolio__popup-preloader'),
          portfolioPopupIframe = document.querySelector('.portfolio__popup-iframe'),
          portfolioBtns = document.querySelectorAll('.portfolio__btn'),
          portfolioPopupClose = document.querySelector('.portfolio__popup-close'),
          portfolioPopupWrapper = document.querySelector('.portfolio__popup-wrapper'),
          body = document.querySelector('body');

    let isPopupOpen = false; // Флаг, указывающий, открыт ли попап

    // Открытие попапа
    portfolioBtns.forEach((portfolioBtn) => {
        portfolioBtn.addEventListener('click', () => {
            const src = portfolioBtn.getAttribute('data-src');

            isPopupOpen = true; // Устанавливаем флаг в true при открытии попапа
            body.classList.add('no-scroll');
            portfolioPopupIframe.src = `https://${src}`;
            portfolioPopup.style.display = 'flex';

            setTimeout(() => {
                willChange(portfolioPopup, 'add', ['opacity']);
                portfolioPopup.classList.add('open');

                portfolioPopupIframe.onload = function() {
                    if (!isPopupOpen) return; // Если попап закрыт, прекращаем выполнение onload

                    willChange(portfolioPopup, 'remove', ['opacity']);
                    portfolioPopupIframe.style.display = 'block';
                    setTimeout(() => {
                        portfolioPopupIframe.classList.add('load');
                        portfolioPopupPreloader.classList.add('load');
                        setTimeout(() => {
                            portfolioPopupPreloader.style.display = 'none';
                        }, 300);
                    }, 10);
                };
            }, 10);
        });
    });

    // Закрытие попапа
    portfolioPopupClose.addEventListener('click', closePopup);
    portfolioPopup.addEventListener('click', (event) => {
        if (event.target !== portfolioPopupWrapper) {
            closePopup()
        }
    });

    function closePopup() {
        isPopupOpen = false; // Устанавливаем флаг в false при закрытии попапа
        body.classList.remove('no-scroll');
        portfolioPopup.classList.remove('open');
        setTimeout(() => {
            portfolioPopup.style.display = 'none';

            // Удаляем классы после завершения анимации
            portfolioPopupPreloader.classList.remove('load');
            portfolioPopupIframe.classList.remove('load');
            
            // Сбрасываем видимость preloader и iframe
            portfolioPopupPreloader.style.display = 'flex';
            portfolioPopupIframe.style.display = 'none';

            // Сбрасываем src iframe для безопасности
            portfolioPopupIframe.src = '';
        }, 300);
    }
}
