(() => {
  //Инициализация первого слайда
  let slides = document.querySelectorAll('.slider_item'),
  slideIndex = 0,
  slideBack = document.querySelector('.slider_back'),
  slideNext = document.querySelector('.slider_next');

  if(slides) {
    /* Индекс слайда по умолчанию */
    showSlides(slideIndex);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide() {
      showSlides(slideIndex += 1)
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide() {
      showSlides(slideIndex -= 1)
    }

    /* Основная функция слайдера */
    function showSlides(value) {
      // let slides = document.querySelectorAll('.slider_item');

      if (value >= slides.length) {
        slideIndex = 0
      }
      if (value < 0) {
        slideIndex = slides.length - 1
      }
      for (const slide of slides) {
        removeClass(slide, 'active')
      }
      // console.log(slides)
      addClass(slides[slideIndex], 'active')
    }

    setListener(slideBack, 'click', minusSlide)
    setListener(slideNext, 'click', plusSlide)

    setInterval(plusSlide, 10000);
  }
})()
