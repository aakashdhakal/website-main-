const navSlide = () => {
	const burger = document.querySelector('.hamburger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
				
			} else {
		link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		
		
		
		});
		
		
		burger.classList.toggle('toggle');
		
		
		});

};

navSlide();

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
	loader.style.display = "none";
	loader.style.overflow = "hidden";
});

    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

function lockScroll(){
	document.body.classList.toggle('lock-scroll');
}