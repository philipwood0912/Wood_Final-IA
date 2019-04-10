(function() {
    console.log("hook up");
    
    var next = document.querySelector('.heroNext'),
        back = document.querySelector('.heroBack'),
        image = document.querySelector('#imgTwo');
    
    var counter = 1;
    
    function swapImg() {
        if (counter > 3) {
            counter = 1;
        }
        if (counter < 1) {
            counter = 3;
        }
        image.src = `images/hero${counter}.jpg`;
    }
    
    next.addEventListener("click", function(e) {
        counter += 1;
        swapImg();
        
    });
    back.addEventListener("click", function(e) {
        counter -= 1;
        swapImg();
    });
    
    
    
})();
