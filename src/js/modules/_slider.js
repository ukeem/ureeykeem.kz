import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperSlider = (classSlider, options) => {
    
    new Swiper(classSlider, options);
};

export default swiperSlider;