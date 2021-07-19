const mesButton = document.querySelector('.messenger_btn'),
      mesClose = document.querySelector('.messenger_close'),
      messenger = document.querySelector('.messenger');

  setListener(mesButton,'click', messOpen)
  setListener(mesClose,'click', () => {
    removeClass(messenger,'active')
  })

function messOpen() {
  if (messenger.classList.contains('active')) {
    return
  } else {
    addClass(messenger, 'active')
  }
}

