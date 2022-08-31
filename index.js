let tumbler = document.querySelector("#switch");
let start = document.querySelector("#cost-start");
let advance = document.querySelector("#cost-advance");
let premium = document.querySelector("#cost-premium");
let datestart = document.querySelector("#date-start");
let dateadvance = document.querySelector("#date-advance");
let datepremium = document.querySelector("#date-premium");

let burger = document.querySelector(".header__burger-btn");

tumbler.addEventListener("click", () => {
	if (tumbler.checked) {
		start.textContent = "275$";
		advance.textContent = "500$";
		premium.textContent = "800$";
		datestart.textContent = "/year";
		dateadvance.textContent = "/year";
		datepremium.textContent = "/year";
	} else {
		start.textContent = "50$";
		advance.textContent = "75$";
		premium.textContent = "100$";
	}
});

burger.addEventListener("click", () => {
	document.querySelector(".popup").classList.toggle("hidden");
});

function showModal(burger) {
	$("popup" + burger).fadeIn("slow");
}
function hideModal(burger) {
	$("hidden" + burger).fadeOut("slow");
}
