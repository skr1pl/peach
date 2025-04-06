import allMap from '../assets/img/all_map.png';
import moscowMap from '../assets/img/moscow_map.png';
import middleMap from '../assets/img/middle_map.png';
import northwestMap from '../assets/img/northwest_map.png';
import southMap from '../assets/img/south_map.png';
import volgaMap from '../assets/img/volga_map.png';
import uralMap from '../assets/img/ural_map.png';
import siberiaMap from '../assets/img/siberia_map.png';
import farEastMap from '../assets/img/far_east_map.png';

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("#toggleCities");
    const panel = document.querySelector("#mapPanel");

    button.addEventListener("click", function () {
        panel.classList.toggle("active");
        button.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "./assets/img/slide1.png",
        "./assets/img/slide2.png",
        "./assets/img/slide3.png",
        "./assets/img/slide4.png",
        "./assets/img/slide5.png"
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById("lifeImage");
    const dots = document.querySelectorAll(".life__slide");

    const updateSlide = (index, direction = "right") => {
        imageElement.classList.remove("slide-left", "slide-right");

        setTimeout(() => {
            imageElement.src = images[index];
            imageElement.classList.add(direction === "right" ? "slide-right" : "slide-left");
        }, 50);

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide(currentIndex, "right");
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlide(currentIndex, "left");
    };

    document.getElementById("nextSlide").addEventListener("click", nextSlide);
    document.getElementById("prevSlide").addEventListener("click", prevSlide);

    setInterval(() => {
        nextSlide();
    }, 3000);
});

const lifeSwiper = new Swiper('.life__swiper', {
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


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.map__header__navbar a');
    const mapImage = document.getElementById('mapImage');

    const regionToImage = {
        'Все': allMap,
        'Москва': moscowMap,
        'Центр': middleMap,
        'Северо-Запад': northwestMap,
        'Юг': southMap,
        'Волга': volgaMap,
        'Урал': uralMap,
        'Сибирь': siberiaMap,
        'Дальний восток': farEastMap
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Активный таб
            tabs.forEach(t => t.classList.remove('active_city'));
            tab.classList.add('active_city');

            // Меняем картинку
            const region = tab.textContent.trim();
            if (regionToImage[region]) {
                mapImage.src = regionToImage[region];
            }
        });
    });
    const toggleBtn = document.getElementById('toggleCities');
    const panel = document.getElementById('mapPanel');

    toggleBtn.addEventListener('click', () => {
        panel.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleCities');
    const mapPanel = document.getElementById('mapPanel');

    toggleBtn.addEventListener('click', () => {
        mapPanel.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const moscowBtn = document.getElementById('moscowBtn');
    const centerBtn = document.getElementById('centerBtn');
    const southBtn = document.getElementById('southBtn');
    const volgaBtn = document.getElementById('volgaBtn');
    const uralBtn = document.getElementById('uralBtn');
    const siberiaBtn = document.getElementById('siberiaBtn');
    const eastBtn = document.getElementById('eastBtn');
    const northwestBtn = document.getElementById('northwestBtn');

    const moscow = document.getElementById('moscow');
    const center = document.getElementById('center');
    const south = document.getElementById('south');
    const volga = document.getElementById('volga');
    const ural = document.getElementById('ural');
    const siberia = document.getElementById('siberia');
    const east = document.getElementById('east');
    const northwest = document.getElementById('northwest');

    const btns = [moscowBtn, centerBtn, southBtn, volgaBtn, uralBtn, siberiaBtn, eastBtn, northwestBtn];
    const regions = [moscow, center, south, volga, ural, siberia, east, northwest];

    let lastIndex = null;

    btns.map((btn, index) => {
        btn.addEventListener('click', () => {
            if (lastIndex && lastIndex !== index) {
                regions[lastIndex].classList.toggle('actived');
            }
            regions[index].classList.toggle('actived');
            lastIndex = (lastIndex === index) ? null : index;
        })
    })

});