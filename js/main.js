(function() {
    
    //scroll to top reference from codepen
    //works edge / chrome / safari / firefox
    //https://codepen.io/Qbrid/pen/EgAYNg
    
	console.log("Javascript is linked up");
    
	var button = document.querySelector("#menuBut"),
        burgerCon = document.querySelector("#burgerCon"),
        backTop = document.querySelector("#backTop"),
        scrollEnd = document.querySelector("#mainHeader");
    
    let intervalScroll = 0;

	function hamburgerMenu() {
		console.log("button clicked");
		// add class or toggle to button and burgerCon
		burgerCon.classList.toggle("slideToggle");
        button.classList.toggle("expanded");
	}
    
    function scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(intervalScroll);
        }
        window.scroll(0, window.pageYOffset - 60);
    }
    
    function topScroll() {
        intervalScroll = setInterval(scrollStep, 15);
    }
    
    backTop.addEventListener("click", topScroll);

	button.addEventListener("click", hamburgerMenu);

})();
