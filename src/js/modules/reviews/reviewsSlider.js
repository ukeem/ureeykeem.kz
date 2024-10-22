import swiperSlider from "../_slider.js";

export default function reviewsSlider () {
    swiperSlider('.reviews__slider', {
        slidesPerView: 1.3,
        spaceBetween: 16,
        grabCursor: true,
        mousewheel: true,
        breakpoints: {
            768: {
                slidesPerView: 2.6,
                spaceBetween: 24,
                navigation: {
                  nextEl: ".reviews__next",
                  prevEl: ".reviews__prev",
                },
              },
            1200: {
              slidesPerView: 4.2,
              spaceBetween: 24,
              navigation: {
                nextEl: ".reviews__next",
                prevEl: ".reviews__prev",
              },
            },
        },
        scrollbar: {
          el: ".reviews__progressbar",
          hide: false,
          draggable: true,
        },
    });
};

