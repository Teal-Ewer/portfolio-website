const hRange = [0, 360];
const sRange = [70, 90];
const lRange = [20, 40];

const getHashOfinput = str => {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	hash = Math.abs(hash);
	return hash;
};

const normalizeHash = (hash, min, max) => {
	return Math.floor((hash % (max - min)) + min);
};

const generateHSL = name => {
	const hash = getHashOfinput(name);
	const h = normalizeHash(hash, hRange[0], hRange[1]);
	let s = normalizeHash(hash, sRange[0], sRange[1]); // const s = 40;
	let l = normalizeHash(hash, lRange[0], lRange[1]); // const l = 80;
	return [h, s, l];
};

const HSLtoHex = hsl => {
	let [h, s, l] = hsl;
	l /= 100;
	const a = (s * Math.min(l, 1 - l)) / 100;
	const f = n => {
		const k = (n + h / 30) % 12;
		const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return Math.round(255 * color)
			.toString(16)
			.padStart(2, "0"); // convert to Hex and prefix "0" if needed
	};
	return `#${f(0)}${f(8)}${f(4)}`;
};

const generateColorFromSeed = seed => {
	const HSL = generateHSL(seed);
	return HSLtoHex(HSL);
};

const button = document.querySelector("button");
const input = document.querySelector("input");
const user = document.querySelectorAll(".computed-color");
const HexDisplay = document.querySelector(".Hex-display");
const HSLDisplay = document.querySelector(".HSL-display");
input.value = "Thomas Anderson";

button.addEventListener("click", handleClick);

function handleClick() {
	console.log("yooooo");
	const HSL = generateHSL(input.value);
	console.log(HSL);
	const [H, S, L] = HSL;
	const color = HSLtoHex(HSL);
	user.forEach(u => (u.style.backgroundColor = color));
	HexDisplay.innerText = `hex: ${color}`;
	HSLDisplay.innerText = `HSL: hsl(${H} ${S}% ${L}%)`;
}
