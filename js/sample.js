document.addEventListener('DOMContentLoaded', function() {
	let isSample = document.querySelector('.sample');
	if (!isSample) return false
	let tattooHover = document.querySelectorAll('.tattoo-icon');
	let imgHover = document.querySelector('.sample__shoes-img > img');
	let btnsBuy = document.querySelectorAll('.tattoo-item__btn');

	tattooHover.forEach(box =>
		box.addEventListener("mouseenter", () => {
			box.classList.add('is-active');
			imgHover.src = box.dataset.path
			tattooHover.forEach(innerBox => {
				innerBox.classList.add('is-all');
			})
		})
	)
	tattooHover.forEach(box =>
		box.addEventListener("mouseleave", () => {
			box.classList.remove('is-active');
			imgHover.src = './img/sample/default.jpg'
			tattooHover.forEach(innerBox => {
				innerBox.classList.remove('is-all');
			})
		})

	)
	btnsBuy.forEach(btn =>
		btn.addEventListener("click", () => {
			btn.textContent = 'В корзине'
		})
	)
});