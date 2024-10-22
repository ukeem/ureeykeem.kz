import willChange from "../_willChange";

export default function fadeOutPreloader() {

    const preloader = document.querySelector('.preloader'),
          htmlElement = document.querySelector('html');

    
    willChange(preloader, 'add', ['opacity']);
    preloader.classList.add('load');
    htmlElement.classList.add('show');
    setTimeout(() => {
        preloader.addEventListener("animationEnd", willChange(preloader, 'remove', ['opacity']));
        preloader.style.visibility = 'hidden';
    }, 1000);


}