// Nav

window.onscroll = function () {
	scrollFunction();
};

let scrollHeight = 90;
let th = 0.6

function scrollFunction() {
	if (window.innerWidth < 600) {
    th = 0.7
		if (document.documentElement.scrollTop > scrollHeight) {
			document.getElementById("navbar").classList.add("box");
		} else {
			document.getElementById("navbar").classList.remove("box");
		}
	} else {
    th = 0.6
		if (
			document.body.scrollTop > scrollHeight ||
			document.documentElement.scrollTop > scrollHeight
		) {
			document.getElementById("navbar").classList.add("box");
		} else {
			document.getElementById("navbar").classList.remove("box");
		}
	}
}

// Anims

const fadeobserver = new IntersectionObserver((entries) => {
  
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("fadeupanim");
		}
	});
}, { threshold : th });

const fadeElements = document.querySelectorAll(".fadeup");

fadeElements.forEach((el) => fadeobserver.observe(el));
