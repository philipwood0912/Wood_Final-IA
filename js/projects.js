(function() {
    console.log("projects up");
    
    var proOver = document.querySelectorAll(".proOverlay"),
        proCon = document.querySelectorAll(".proOverlayCon");
    
    function overlayPro(nameSrc) {
        proOver.forEach(over => {
            if (nameSrc === over.dataset.prooverlay) {
                over.style.opacity = "1";
            } 
        });
    }
    function overlayProDone(nameSrc) {
        proOver.forEach(over => {
            if (nameSrc === over.dataset.prooverlay) {
                over.style.opacity = "0";
            } 
        });
    }
    proCon.forEach(con => {
        con.addEventListener("mouseover", function(e) {
            let nameSrc = this.className.split(" ")[1];
            overlayPro(nameSrc);
            con.addEventListener("mouseleave", function(e) {
                overlayProDone(nameSrc);
            });
        });
    });
})();
