/*
	Partially works around a Safari bug. Other browsers don’t need this ugly hack.
	Possibly this one https://bugs.webkit.org/show_bug.cgi?id=262729?
*/
const fixIt = () => {
	solarSystem.style.display = "none";
	requestAnimationFrame(() => {
		solarSystem.style.display = "";
	});
}

const ro = new ResizeObserver(entries => {
	const sunHeight = solarSystem.querySelector(".sun").getBoundingClientRect().height;
	const solarSystemHeight = solarSystem.getBoundingClientRect().height;
	if(solarSystemHeight > 10 * sunHeight) {
		fixIt();
	}
});
