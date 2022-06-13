(() => {
	let notify = document.querySelectorAll('.notification'),
		notifyClose = document.querySelectorAll('.notification_close'),
		notifyIndex = 0;

	if (notify) {
		let f;
		for (let i = 0; i < notify.length; i++) {
			notifyClose[i].addEventListener('click', f = () => notify[i].classList.remove('active'))
		}
	}

	setInterval(notifyShow, 5000)

	function notifyShow() {
		if (notifyIndex < notify.length) {
			notify[notifyIndex].classList.add('active')
			notifyIndex++
		} else {
			clearInterval(notifyShow)
		}
	}
})()