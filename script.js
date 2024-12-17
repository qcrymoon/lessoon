document.addEventListener("DOMContentLoaded", function() {
    // Функция для инициализации слайдера
    function initializeSlider(sliderId) {
        const slider = document.getElementById(sliderId);
        const slides = slider.querySelectorAll('.slide');
        const totalSlides = slides.length;
        let currentIndex = 0;

        const prevButton = slider.querySelector('.arrow.left');
        const nextButton = slider.querySelector('.arrow.right');

        // Функция для переключения слайдов
        function showSlide(index) {
            // Скрываем все слайды
            slides.forEach(slide => {
                slide.classList.remove('active');
            });

            // Показываем текущий слайд
            slides[index].classList.add('active');

            // Отключаем кнопки на первом и последнем слайде
            prevButton.disabled = index === 0;
            nextButton.disabled = index === totalSlides - 1;
        }

        // Показываем первый слайд при загрузке
        showSlide(currentIndex);

        // Слушатели событий для кнопок "вперед" и "назад"
        nextButton.addEventListener('click', () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
                showSlide(currentIndex);
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                showSlide(currentIndex);
            }
        });
    }

    // Инициализируем слайдеры для всех блоков
    initializeSlider('slider1');
    initializeSlider('slider2');
    initializeSlider('slider3');
});
// Получаем элементы управления стилями
const textColorInput = document.getElementById("text-color");
const fontSizeInput = document.getElementById("font-size");
const bgColorInput = document.getElementById("bg-color");
const resetButton = document.getElementById("reset-button");

// Получаем элементы, которые будем изменять
const body = document.body;
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const form = document.querySelector("form");

// Функция для обновления стилей
function updateStyles() {
    // Изменение цвета текста
    const textColor = textColorInput.value;
    header.style.color = textColor;
    footer.style.color = textColor;
    form.style.color = textColor;

    // Изменение размера шрифта
    const fontSize = fontSizeInput.value + "px";
    header.style.fontSize = fontSize;
    footer.style.fontSize = fontSize;
    form.style.fontSize = fontSize;

    // Изменение цвета фона
    const bgColor = bgColorInput.value;
    body.style.backgroundColor = bgColor;
}

// Слушаем события ввода
textColorInput.addEventListener("input", updateStyles);
fontSizeInput.addEventListener("input", updateStyles);
bgColorInput.addEventListener("input", updateStyles);

// Функция для сброса стилей
resetButton.addEventListener("click", () => {
    // Восстанавливаем стандартные значения
    textColorInput.value = "#000000";
    fontSizeInput.value = 16;
    bgColorInput.value = "#f4f4f4";

    // Обновляем стили
    updateStyles();
});

// Обновляем стили при загрузке
updateStyles();
