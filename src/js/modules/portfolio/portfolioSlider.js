import swiperSlider from "../_slider.js";

export default function portfolioSlider () {
    swiperSlider('.portfolio__slider', {
        slidesPerView: 1.2,
        spaceBetween: 16,
        grabCursor: true,
        mousewheel: true,
        breakpoints: {
            1200: {
              slidesPerView: 2.2,
              spaceBetween: 24,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            },
        },
        scrollbar: {
          el: ".portfolio__progressbar",
          hide: false,
          draggable: true,
        },
    });
};

