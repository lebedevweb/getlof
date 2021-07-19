let burger = document.querySelector('.header_button_menu');

setListener(burger, 'click', () => {
  burger.classList.contains('active') ? removeClass(burger,'active') : addClass(burger,'active')
})
