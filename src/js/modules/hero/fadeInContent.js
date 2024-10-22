import willChange from "../_willChange";

export default function fadeInContent() {

    const heroContent = document.querySelector('.hero__content'),
          header = document.querySelector('.header');
    
    willChange(heroContent, 'add', ['filter','margin-bottom','opacity']);
    setTimeout(() => {
        heroContent.classList.add('fadeIn');
        setTimeout(() => {
            heroContent.addEventListener("animationEnd", willChange(heroContent, 'remove', ['filter','margin-bottom','opacity']));
            header.classList.add('fadeIn');
        }, 1100);
    }, 1500);

}