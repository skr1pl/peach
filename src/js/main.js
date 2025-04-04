document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("#toggleCities");
    const panel = document.querySelector("#mapPanel");

    button.addEventListener("click", function () {
        panel.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "assets/img/slide1.png",
        "assets/img/slide2.png",
        "assets/img/slide3.png",
        "assets/img/slide4.png",
        "assets/img/slide5.png"
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
        'Все': './assets/img/all_map.png',
        'Москва': './assets/img/moscow_map.png',
        'Центр': './assets/img/middle_map.png',
        'Северо-Запад': './assets/img/northwest_map.png',
        'Юг': './assets/img/south_map.png',
        'Волга': './assets/img/volga_map.png',
        'Урал': './assets/img/ural_map.png',
        'Сибирь': './assets/img/siberia_map.png',
        'Дальний восток': './assets/img/far_east_map.png'
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

    // Панель по кнопке
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