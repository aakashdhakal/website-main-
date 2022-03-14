

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
