document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const productsSection = document.querySelector('.products');

    // Анимация "появления" секции с товарами
    setTimeout(() => {
        heroSection.style.opacity = 1;
    }, 100);

    // Добавляем анимацию для секции товаров
    setTimeout(() => {
        productsSection.style.opacity = 1;
    }, 500);
});
