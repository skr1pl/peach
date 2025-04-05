import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export function initSlider() {
    const lifeSwiper = new Swiper('.life__swiper', {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<div class="${className}"></div>`;
            }
        },
        effect: 'slide',
    });

    return lifeSwiper;
}

document.addEventListener('DOMContentLoaded', initSlider); 