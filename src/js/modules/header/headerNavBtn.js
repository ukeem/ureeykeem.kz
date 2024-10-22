import willChange from "../_willChange";

export default function headerNavBtn() {
    const btn = document.querySelector('.header__nav-btn'),
          icon = btn.querySelector('svg'),
          nav = document.querySelector('.header__nav'),
          menu = document.querySelector('.menu'),
          body = document.querySelector('body'),
          widthWithoutScrollbar = document.documentElement.clientWidth,
          htmlElement = document.querySelector('html');

    btn.addEventListener('click', function() {
        if (!btn.classList.contains('active')) {

            body.classList.add('no-scroll');
            body.style.width = `${widthWithoutScrollbar}px`;
            htmlElement.style.width = `${widthWithoutScrollbar}px`;

            willChange(icon, 'add', ['transform']);
            this.classList.add('active');
            
            menu.classList.add('.active');
            menu.style.opacity = '0';
            setTimeout(() => {
                menu.textContent = 'Закрыть';
                menu.style.opacity = '1';
            }, 300);

            nav.classList.add('flex');
            nav.style.width = `${widthWithoutScrollbar}px`;
            setTimeout(() => {
                willChange(nav, 'add', ['transform', 'opacity']);
                nav.classList.add('open');
            }, 10);
        } else {

            hideNav();
        }
    })

    nav.addEventListener('click', function(event) {

        const target = event.target,
              links = this.querySelectorAll('a');

        // Проверяем, что клик был по ссылке (элементу 'a')
        if (target.tagName === 'A') {
            // Удаляем класс 'active' у всех ссылок
            links.forEach(link => link.classList.remove('active'));

            // Добавляем класс 'active' к кликнутой ссылке
            target.classList.add('active');

            // Допустим, что hideNav() скрывает меню навигации
            hideNav();
        }

    })

    function hideNav() {

        body.classList.remove('no-scroll');
        body.style.width = `100%`;
        htmlElement.style.width = `100%`;

        willChange(icon, 'remove', ['transform']);
        btn.classList.remove('active');
            
        menu.classList.remove('.active');
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.textContent = 'Меню';
            menu.style.opacity = '1';
        }, 300);

        willChange(nav, 'remove', ['transform', 'opacity']);
        nav.classList.remove('open');
        nav.style.width = `100%`;
        setTimeout(() => {
            nav.classList.remove('flex');
        }, 300);

    }
}