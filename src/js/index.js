import fadeOutPreloader from "./modules/preloader/preloader";
import fadeInContent from "./modules/hero/fadeInContent";
import headerNavBtn from "./modules/header/headerNavBtn";
import showFooter from "./modules/footer/footer";
import portfolioSlider from "./modules/portfolio/portfolioSlider";
import portfolioPopup from "./modules/portfolio/portfolioPopup";
import reviewsSlider from "./modules/reviews/reviewsSlider";
import setLinkWhatsapp from "./modules/whatsapp/whatsapp";
import animation from "./modules/_animations";

window.addEventListener('load', function() {

    fadeOutPreloader();
    fadeInContent();
    headerNavBtn();
    showFooter();
    portfolioSlider();
    portfolioPopup();
    reviewsSlider();
    setLinkWhatsapp();
    animation();
})

