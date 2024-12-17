// Привітальне повідомлення при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to the Warsaw Guide! Enjoy exploring the city.');

    // Додаємо динамічний текст у блок з id="infoSection"
    const infoSection = document.getElementById('infoSection');
    if (infoSection) {
        infoSection.innerHTML = '<p>Check out Warsaw\'s Old Town and Lazienki Park – you will love them!</p>';
    }

    // Обробник кліку для кнопки з id="exploreButton"
    const button = document.getElementById('exploreButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Here are the best places to visit in Warsaw!');
        });
    }

    // Плавна прокрутка до розділів при натисканні на посилання
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
