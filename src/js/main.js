// Импорт стилей Swiper
import 'swiper/css';

// Функция для анимации появления элементов при скролле
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.hero__title, .hero__description, .mission__title, .mission__text')
        .forEach(el => observer.observe(el));
};

// Интерактивная карта
class InteractiveMap {
    constructor() {
        this.mapContainer = document.querySelector('.map__container');
        this.controls = document.querySelectorAll('.map__control');
        this.activeRegion = 'all';
        this.cities = {
            all: [
                { name: 'Москва', x: 57, y: 45 },
                { name: 'Санкт-Петербург', x: 51, y: 35 },
                { name: 'Новосибирск', x: 76, y: 52 },
                { name: 'Екатеринбург', x: 71, y: 47 },
                { name: 'Самара', x: 65, y: 48 },
                { name: 'Казань', x: 62, y: 45 }
            ],
            moscow: [
                { name: 'Москва', x: 57, y: 45 }
            ],
            center: [
                { name: 'Воронеж', x: 58, y: 49 },
                { name: 'Ярославль', x: 57, y: 42 },
                { name: 'Белгород', x: 56, y: 51 }
            ],
            northwest: [
                { name: 'Санкт-Петербург', x: 51, y: 35 },
                { name: 'Калининград', x: 45, y: 38 }
            ]
        };

        this.init();
    }

    init() {
        this.createMap();
        this.addEventListeners();
        this.updateCities();
    }

    createMap() {
        this.mapContainer.innerHTML = `
            <div class="map__image-container">
                <img src="./assets/img/map.svg" alt="Карта России" class="map__image">
            </div>
        `;
    }

    addEventListeners() {
        this.controls.forEach(control => {
            control.addEventListener('click', () => {
                const region = control.dataset.region;
                this.setActiveRegion(region);
            });
        });
    }

    setActiveRegion(region) {
        this.controls.forEach(control => {
            control.classList.toggle('active', control.dataset.region === region);
        });

        this.activeRegion = region;
        this.updateCities();
    }

    updateCities() {
        // Удаляем существующие маркеры
        const existingCities = this.mapContainer.querySelectorAll('.map__city');
        existingCities.forEach(city => city.remove());

        // Добавляем новые маркеры
        const cities = this.cities[this.activeRegion];
        cities.forEach(city => {
            const cityElement = document.createElement('div');
            cityElement.className = 'map__city';
            cityElement.style.left = `${city.x}%`;
            cityElement.style.top = `${city.y}%`;

            const label = document.createElement('div');
            label.className = 'map__city-label';
            label.textContent = city.name;

            cityElement.appendChild(label);
            this.mapContainer.appendChild(cityElement);

            // Добавляем анимацию появления
            setTimeout(() => {
                cityElement.style.opacity = '1';
                cityElement.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 10);
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    observeElements();
    new InteractiveMap();
}); 