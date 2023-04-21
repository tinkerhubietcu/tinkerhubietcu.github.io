
/* Animate On Scroll */
AOS.init();

menu = document.querySelector(".menu-btn");
nav = document.querySelector("nav");
header = document.querySelector("header");
menu_btn_bar_1 = document.querySelector(".menu-btn-bar-1");
menu_btn_bar_2 = document.querySelector(".menu-btn-bar-2");

menu.addEventListener("click",function(){
    nav.classList.toggle("nav-active");
    menu_btn_bar_1.classList.toggle("menu-btn-bar-1_active");
    menu_btn_bar_2.classList.toggle("menu-btn-bar-2_active");
    header.classList.toggle("header-bg-change");
});

var headerOnScroll = function () {
    var y = window.scrollY;
    if (y >= 70) {
        header.classList.add("header-on-scroll");
    }  else {
        header.classList.remove("header-on-scroll");
    }
};
window.addEventListener("scroll", headerOnScroll);


//scroll on click
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0){
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

    function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				scrollY -
				document.querySelector('header').offsetHeight;

			if (menu_btn_bar_1.classList.contains('menu-btn-bar-1_active')) {
                nav.classList.toggle("nav-active");
                menu_btn_bar_1.classList.toggle("menu-btn-bar-1_active");
                menu_btn_bar_2.classList.toggle("menu-btn-bar-2_active");
                header.classList.toggle("header-bg-change");
            }

            window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
        }
    }
}