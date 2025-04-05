export function initMap() {
    const tabs = document.querySelectorAll('.map__header__navbar a');
    const mapImage = document.getElementById('mapImage');
    const toggleBtn = document.getElementById('toggleCities');
    const mapPanel = document.getElementById('mapPanel');

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

    // Обработка табов
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active_city'));
            tab.classList.add('active_city');

            const region = tab.textContent.trim();
            if (regionToImage[region]) {
                mapImage.src = regionToImage[region];
            }
        });
    });

    // Обработка панели городов
    toggleBtn.addEventListener('click', () => {
        mapPanel.classList.toggle('active');
        toggleBtn.classList.toggle('active');
    });

    // Закрытие панели при клике вне
    document.addEventListener('click', (e) => {
        if (!mapPanel.contains(e.target) && !toggleBtn.contains(e.target)) {
            mapPanel.classList.remove('active');
            toggleBtn.classList.remove('active');
        }
    });

    // Обработка кнопок регионов
    const btns = document.querySelectorAll('.map__panel__column__btn');
    const regions = document.querySelectorAll('.map__panel__column');
    let lastActiveRegion = null;

    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (lastActiveRegion !== null && lastActiveRegion !== index) {
                regions[lastActiveRegion].classList.remove('actived');
            }
            regions[index].classList.toggle('actived');
            lastActiveRegion = regions[index].classList.contains('actived') ? index : null;
        });
    });
}

document.addEventListener('DOMContentLoaded', initMap); 