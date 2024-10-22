import willChange from './../_willChange'

export default function showFooter() {
    const footer = document.querySelector('.footer'),
          footerBtn = footer.querySelector('.footer__btn');

    setTimeout(() => {
        willChange(footerBtn, 'add', ['opacity', 'margin-left']);
        footer.classList.add('show');
        footerBtn.addEventListener("animationEnd", willChange(footerBtn, 'remove', ['opacity', 'margin-left']));
    }, 10000);
}
