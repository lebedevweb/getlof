(() => {
	const mesButton = document.querySelector('.messenger_btn')
	const	mesClose = document.querySelector('.messenger_close')
	const	messenger = document.querySelector('.messenger')

	setListener(mesButton, 'click', () => messOpen);
	setListener(mesClose, 'click', () => {
		removeClass(messenger, 'active');
	});
});

function messOpen() {
	if (messenger.classList.contains('active')) {
		return
	} else {
		addClass(messenger, 'active')
	}
}

