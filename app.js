// Matrix-style animated code background
const canvas = document.getElementById('bg-canvas');
if (canvas) {
	const ctx = canvas.getContext('2d');
	let width = window.innerWidth;
	let height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;

	// Characters for the matrix effect
	const codeChars = '01<>[]{}();=+-*/&|!%$#@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const fontSize = 22;
	const columns = Math.floor(width / fontSize);
	const drops = Array(columns).fill(1);

	function drawMatrix() {
		// Fade the canvas slightly for trailing effect
		ctx.fillStyle = 'rgba(24,24,24,0.18)';
		ctx.fillRect(0, 0, width, height);
		ctx.font = fontSize + "px 'Fira Mono', 'Consolas', monospace";
		ctx.fillStyle = '#00e6e6';
		for (let i = 0; i < drops.length; i++) {
			const text = codeChars[Math.floor(Math.random() * codeChars.length)];
			ctx.fillText(text, i * fontSize, drops[i] * fontSize);
			if (drops[i] * fontSize > height && Math.random() > 0.975) {
				drops[i] = 0;
			}
			drops[i]++;
		}
		requestAnimationFrame(drawMatrix);
	}
	drawMatrix();

	window.addEventListener('resize', () => {
		width = window.innerWidth;
		height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;
	});
}
// Typing animation for hero section
const typedText = document.querySelector('.typed-text');
const phrases = [
	'Web Developer',
	'UI/UX Enthusiast',
	'JavaScript Lover',
	'React Specialist',
	'Open Source Contributor'
];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
	if (!typedText) return;
	const currentPhrase = phrases[phraseIndex];
	if (isDeleting) {
		typedText.textContent = currentPhrase.substring(0, letterIndex - 1);
		letterIndex--;
		if (letterIndex === 0) {
			isDeleting = false;
			phraseIndex = (phraseIndex + 1) % phrases.length;
			setTimeout(type, 500);
		} else {
			setTimeout(type, 50);
		}
	} else {
		typedText.textContent = currentPhrase.substring(0, letterIndex + 1);
		letterIndex++;
		if (letterIndex === currentPhrase.length) {
			isDeleting = true;
			setTimeout(type, 1200);
		} else {
			setTimeout(type, 100);
		}
	}
}
type();

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
	link.addEventListener('click', function(e) {
		const targetId = this.getAttribute('href').slice(1);
		const target = document.getElementById(targetId);
		if (target) {
			e.preventDefault();
			window.scrollTo({
				top: target.offsetTop - 60,
				behavior: 'smooth'
			});
		}
	});
});

// Contact form submit (demo only)
const form = document.querySelector('.contact-form');
if (form) {
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		alert('This service is currently unavailable. Please reach out via email , LinkedIn or whatsapp.');
		form.reset();
	});
}
