(function() {
	console.log("Javascript is linked up");
    
	var button = document.querySelector("#menuBut"),
        burgerCon = document.querySelector("#burgerCon");

	function hamburgerMenu() {
		console.log("button clicked");
		// add class or toggle to button and burgerCon
		burgerCon.classList.toggle("slideToggle");
	}

	button.addEventListener("click", hamburgerMenu);

})();
