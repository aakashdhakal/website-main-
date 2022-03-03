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
});

    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Blogger", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", "Blogger", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

function lockScroll(){
	document.body.classList.toggle('lock-scroll');
}
var Tawk_API = Tawk_API || {},
	Tawk_LoadStart = new Date();
(function () {
	var s1 = document.createElement("script"),
		s0 = document.getElementsByTagName("script")[0];
	s1.async = true;
	s1.src = 'https://embed.tawk.to/61f2c971b9e4e21181bc3c1b/1fqe65pnm';
	s1.charset = 'UTF-8';
	s1.setAttribute('crossorigin', '*');
	s0.parentNode.insertBefore(s1, s0);
})();