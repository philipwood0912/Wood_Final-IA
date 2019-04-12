(function() {
    console.log("about ready");
    
    var aboutBut = document.querySelectorAll(".aboutBut"),
        aboutP = document.querySelector("#aboutUs p");
    
    const aboutAr = [
        ["Protect, enhance and regenerate a viable, multi-species, year-round fishery."],
        ["Participate in environmental clean-up, pollution control and rehabilitation."],
        ["Breed, relocate and stock to re-establish or augment appropriate species of fish."],
        ["Promote environmentally sound sport fishing practices."],
        ["Form partnerships with community businesses, government agencies, special interest groups, landowners, and other stakeholders in the Thames River watershed."],
        ["Increase public awareness of the unique diversity of the Thames River Watershed, its challenges, its recreational opportunities and its vital importance to our community."]
    ];
    
   aboutBut.forEach(but => {
       but.addEventListener("click", function(e) {
           console.log("aboutbut click");
           aboutP.textContent = aboutAr[this.dataset.aboutref][0];
       });
   }); 
    
})();
