//Инициализация первого слайда
setTimeout(slideInit,500)

function slideInit() {
  /* Индекс слайда по умолчанию */
  let slideIndex = 0,
      slideBack = document.querySelector('.slider_back'),
      sliderNext = document.querySelector('.slider_next');
      showSlides(slideIndex);

  /* Функция увеличивает индекс на 1, показывает следующй слайд*/
  function plusSlide() {
    showSlides(slideIndex += 1);
  }

  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
  function minusSlide() {
    showSlides(slideIndex -= 1);
  }

  /* Основная функция слайдера */
  function showSlides(n) {
    let slides = document.querySelectorAll('.slider_item');
    if (n >= slides.length) {
      slideIndex = 0
    }
    if (n < 0) {
      slideIndex = slides.length - 1
    }
    for (const slide of slides) {
      slide.classList.remove('active');
    }
    // console.log(slides)
    slides[slideIndex].classList.add("active");
  }

  slideBack.addEventListener('click',() => {
    minusSlide();
  },false);

  sliderNext.addEventListener('click',() => {
    plusSlide();
  },false);

  setInterval(plusSlide, 10000);
}
