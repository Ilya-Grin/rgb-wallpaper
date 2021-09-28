const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const getRandom = () => {
	return Math.floor(Math.random() * ((windowWidth - windowHeight) + windowHeight) / 2);
}

const wrapper = document.querySelector('.wrapper');

const colorContainer = document.querySelectorAll('.color-container');
let counter = 0;

function generate() {

	var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

	function populate(a) {
		for (var i = 0; i < 6; i++) {
			var x = Math.round(Math.random() * 14);
			var y = hexValues[x];
			a += y;
		}
		return a;
	}

	var angle = Math.round(Math.random() * 360);
	function gradient() {
		return "linear-gradient(" + angle + "deg, " + populate('#') + ", " + populate('#') + ")";
	}
	wrapper.style.background = gradient();
	wrapper.style.opacity = '1';
	colorContainer.forEach(e => {
		e.style.background = gradient();
	});
	setTimeout(function () {
		wrapper.style.opacity = '0.4';
	}, 3800)
}

document.onload = generate();

setInterval(function () {
	console.log(Math.floor(Math.random() * 10));
	colorContainer.forEach(e => {
		generate();
		if (Math.floor(Math.random() * 10) >= 5) {
			e.style.bottom = getRandom() + 'px';
		} else {
			e.style.top = getRandom() + 'px';
		}
		if (Math.floor(Math.random() * 10) >= 5) {
			e.style.right = getRandom() + 'px';
		} else {
			e.style.left = getRandom() + 'px';;
		}
	});

}, 4500);
