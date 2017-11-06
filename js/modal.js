const $yesButton = document.getElementById('yesButton');
const $overlay = document.getElementById('overlay');
const $modal = document.getElementById('modal');

$yesButton.addEventListener('click', (event) => {
	//Con esto logramos que nuestra ventana modal desaparezca de nuestra ventana principal
	$modal.style.animation = 'animationOut 1s forwards';
	$overlay.classList.remove('active');
})