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
		datestart.textContent = "/month";
		dateadvance.textContent = "/month";
		datepremium.textContent = "/month";
	}
});

// burger.addEventListener("click", () => {
// 	document.querySelector(".popup").classList.toggle("hidden");
// });

const openMenu = document.querySelector(".header__burger-btn");

openMenu.addEventListener("click", (e) => {
	e.preventDefault();
	openMenu.nextElementSibling.classList.toggle("hidden");
});

// $(".button").click(function () {
// 	$(".hidden").toggle();
// });
// $(document).on("click", function (e) {
// 	if (!$(e.target).closest("header__burger-btn").length) {
// 		$(".popup").hide();
// 	}
// 	e.stopPropagation();
// });

// document.addEventListener("click", function (e) {
// 	let actMenu = document.querySelector(".popup.hidden");
// 	if (actMenu && e.target !== actMenu && !actMenu.contains(e.target)) {
// 		document.querySelector(".popup").classList.remove("hidden");
// 	}
// });

//прокрутка страницы

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const blockID = anchor.getAttribute("href").substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
}
