(function() {
    console.log("about ready");
    
    var aboutBut = document.querySelectorAll(".aboutBut"),
        aboutP = document.querySelector("#aboutUs p"),
        statImg = document.querySelector(".statImg"),
        back = document.querySelector(".statBack"),
        next = document.querySelector(".statNext");
    
    var counter = 0;
    
    const aboutAr = [
        ["Protect, enhance and regenerate a viable, multi-species, year-round fishery."],
        ["Participate in environmental clean-up, pollution control and rehabilitation."],
        ["Breed, relocate and stock to re-establish or augment appropriate species of fish."],
        ["Promote environmentally sound sport fishing practices."],
        ["Form partnerships with community businesses, government agencies, special interest groups, landowners, and other stakeholders in the Thames River watershed."],
        ["Increase public awareness of the unique diversity of the Thames River Watershed, its challenges, its recreational opportunities and its vital importance to our community."]
    ];
    
    function animateStat() {
        const offSet = 375;
        
        if (counter > 3) {
            counter = 0;
        }
        if (counter < 0) {
            counter = 3;
        }
        
        totalOffSet = counter * offSet + "px";
        
        statImg.style.bottom = totalOffSet;
    }
    
    back.addEventListener("click", function(e) {
        counter -= 1;
        animateStat();
    });
    
    next.addEventListener("click", function(e) {
        counter += 1;
        animateStat();
    });
    
    aboutBut.forEach(but => {
        but.addEventListener("click", function(e) {
            console.log("aboutbut click");
            aboutP.textContent = aboutAr[this.dataset.aboutref][0];
        });
    }); 
    
})();
