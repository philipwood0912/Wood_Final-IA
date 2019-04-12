(function() {
    console.log("about ready");
    
    var aboutBut = document.querySelectorAll(".aboutBut"),
        aboutP = document.querySelector("#aboutUs p"),
        statImg = document.querySelector(".statImg"),
        back = document.querySelector(".statBack"),
        next = document.querySelector(".statNext"),
        gearOver = document.querySelectorAll(".gearOverlay"),
        gearCon = document.querySelectorAll(".gearImg"),
        statText = document.querySelector("#statText");
    
    var counter = 0;
    
    const aboutAr = [
        ["Protect, enhance and regenerate a viable, multi-species, year-round fishery."],
        ["Participate in environmental clean-up, pollution control and rehabilitation."],
        ["Breed, relocate and stock to re-establish or augment appropriate species of fish."],
        ["Promote environmentally sound sport fishing practices."],
        ["Form partnerships with community businesses, government agencies, special interest groups, landowners, and other stakeholders in the Thames River watershed."],
        ["Increase public awareness of the unique diversity of the Thames River Watershed, its challenges, its recreational opportunities and its vital importance to our community."]
    ];
    
    const statArr = [
        ["A graph showing the amount of Rainbow Trout caught in Dingman, Komoka, and Oxbow over three years."],
        ["A graph showing the amount of Rainbow Trout eggs received vs the amount actually hatched."],
        ["A graph showing the amount of Brown Trout eggs received vs the amount actually hatched."],
        ["A graph showing the amount of memebers in the TRAA over 16 years."]
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
        statText.textContent = statArr[counter][0];
    }
    
    function overlayGear(nameSrc) {
        gearOver.forEach(over => {
            if (nameSrc === over.dataset.gearoverlay) {
                over.style.opacity = "1";
            } 
        });
    }
    
    function overlayGearDone(nameSrc) {
        gearOver.forEach(over => {
            if (nameSrc === over.dataset.gearoverlay) {
                over.style.opacity = "0";
            } 
        });
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
    
    gearCon.forEach(con => {
        con.addEventListener("mouseover", function(e) {
            let nameSrc = this.className.split(" ")[1];
            overlayGear(nameSrc);
            con.addEventListener("mouseleave", function(e) {
                overlayGearDone(nameSrc);
            });
        });
    });
    
})();
