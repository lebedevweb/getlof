function burgerToggle() {
  let burger = document.querySelector('.header_button_menu');
  if (burger.classList.contains('active')){
    burger.classList.remove('active')
    console.log('Remove')
  } else {
    burger.classList.add('active')
    console.log('Add')
  }
}

