(function() {
    console.log("hook up");
    
    var next = document.querySelector('.heroNext'),
        back = document.querySelector('.heroBack'),
        image = document.querySelector('#imgTwo'),
        overlayCon = document.querySelectorAll('.homeOverlayCon'),
        overlays = document.querySelectorAll('.homeOverlay'),
        actImg = document.querySelector(".bui img");
    
    var counter = 1;
    
    let imgHeight = actImg.height;
    var imgPer = imgHeight / 158 * 100,
        padPer = 50 / 158 * 100;
    
    function swapImg() {
        if (counter > 3) {
            counter = 1;
        }
        if (counter < 1) {
            counter = 3;
        }
        image.src = `images/hero${counter}.jpg`;
    }
    
    function overlayHome(nameSrc) {
        overlays.forEach(overlay => {
            if (nameSrc === overlay.dataset.homeoverlay) {
                overlay.style.opacity = "1";
                //overlay.style.bottom = "0px";
                overlay.style.height = imgPer - padPer + "%";
            }
        });
    }
    
    function overlayHomeDone(nameSrc) {
        overlays.forEach(overlay => {
            if (nameSrc === overlay.dataset.homeoverlay) {
                overlay.style.opacity = "0";
                //overlay.style.bottom = "-135px";
                //overlay.style.height = "0px";
            }
        });
    }
    
    next.addEventListener("click", function(e) {
        counter += 1;
        swapImg();
        
    });
    back.addEventListener("click", function(e) {
        counter -= 1;
        swapImg();
    });
    
    overlayCon.forEach(con => {
        con.addEventListener("mouseover", function(e) {
            let nameSrc = this.className.split(" ")[1];
            overlayHome(nameSrc);
            con.addEventListener("mouseleave", function(e) {
                overlayHomeDone(nameSrc);
            });
        });
    });
    
    
    
    
    //overlayCon.addEventListener("mouseover", function(e) {
        //overlayHome();
        //overlayCon.addEventListener("mouseleave", function(e) {
            //overlay.style.bottom = "-110px";
        //});
    //});
    
    
})();
