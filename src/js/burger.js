(() => {
const burger = document.querySelector('.header_button_menu'),
  menuShadow = document.querySelector('.sidemenu_shadow'),
  menu = document.querySelector('.sidemenu')

setListener(burger, 'click', () => {
  burger.classList.contains('active') ? removeClass(burger,'active') : addClass(burger,'active')
  menuShadow.classList.contains('active') ? removeClass(menuShadow,'active') : addClass(menuShadow,'active')
  menu.classList.contains('active') ? removeClass(menu,'active') : addClass(menu,'active')

})
})()
