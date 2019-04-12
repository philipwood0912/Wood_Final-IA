(function() {
    console.log('archives up');
    
    var back = document.querySelector(".eventBack"),
        next = document.querySelector(".eventNext"),
        eventImage = document.querySelector(".eventImg img"),
        eventOne = document.querySelector("#eventTitleOne"),
        eventTwo = document.querySelector("#eventTitleTwo"),
        eventThree = document.querySelector("#eventTextOne"),
        eventFour = document.querySelector("#eventTextTwo");
    
    var counter = 0;
    
    const eventArr = [
        ["Stream Habitat Work Party", "October 18, 2018", "A few TRAA members cleared a number of fallen trees and other blockages on October 13th. Dan Shinkelshoek made a video of the proceedings and it's worth a look so click on the picture to view.", "If you have further questions about TRAA stream habitat projects and events, please come out to the next TRAA General Meeting."],
        ["Annual TRAA Paddle & Fish", "July 14, 2018", "This year we be mixed it up a bit by having the Annual TRAA Paddle & Fish on Sharon Creek Reservoir. A thunderstorm threatened but only gave us a few minutes of rain to cool us off. Fish targeted were largemouth bass, crappie and other panfish as well as some bruiser carp.", "Many bass were caught with some crappies mixed in to make it interesting. Paul Holmes ended up with the largest fish, a nice smallmouth bass."],
        ["Stream Habitat Work Party", "July 12, 2018", "We were very excited to have a group from the MNRF's Stewardship Youth Rangers Program to do some work on Komoka Creek. This program gives groups of 16 or 17 year-olds an opportunity to spend 8 weeks working outdoors on natural resource management projects in their own community.", "They worked on clearing a section of Komoka Creek upstream of the TRAA trout hatchery. A major tree had fallen and a lot of the bank went with it. This created a blockage and was diverting the stream, increasing the likelihood of further bank side damage and erosion."],
        ["Work Party - Roof Repair", "June 30, 2018", "As most members already know, a large tree was blown down during high winds on May 2nd. Ironically, barely a week before this happened, we had already removed a couple of dead trees that had been identified as potential hazards to the hatchery.", "At the time, we thought this tree wasn't a threat as it was well up the hill and well off to one side.It unfortunately glanced off of a couple of other trees as it fell, steering it directly on to the hatchery roof! It was an incredibly hot morning but the job was finished in record time."],
        ["Rainbow Trout Release", "June 23, 2018", "The rainbow trout fingerlings that we raised from eggs over this past winter were released into Dingman Creek.", "This year the TRAA welcomed the ECO Club from Louise Arbour French Immersion Public School, to come out and assist successfully releasing in excess of 40,000 rainbow trout."],
        ["Brook Trout Release", "June 16, 2017", "The brook trout fingerlings went on the annual road trip throughout rural areas northeast of London to be released into several different cold water tributaries. These were brook trout eggs that we harvested with folks from the Upper Thames Conservation Authority (UTRCA) to be raised in the TRAA trout hatchery.", "Thanks to everyone that has put in their time and effort to collect the brook trout eggs, monitor them in the hatchery and participate in the release."],
        ["TRAA - Show Time!", "February 23 - 25, 2017", "The TRAA again had a presence at the London Boat, Fishing and Outdoor Show.", "A huge 'Thank You' goes out to Pat, Dave and all the gang at Angling Sports for giving us space to set up our snazzy new bannersAlso many thanks to those TRAA members who took the tiime to hang out at the show, chatting to folks about what the TRAA does and generally about fishing in and around London."],
        ["Family Fishing Day", "July 9, 2016", "This event has become another TRAA tradition. Members have been helping the Fanshawe Campers Association with the Family Fishing Day for many years now.", "We help the kids rig up, sort out the odd tangle, help measure and release fish; we're just there to generally show them some fishing basics. TRAA members that have come come out to this event in past years find it both fun and rewarding."],
        ["Thames River Clean-Up", "May 7, 2016", "TRAA members met with another group to do our yearly cleanup of the area around Komoka bridge (some may call it the Speedway bridge).", "While a good amount of trash was removed from the area, participants commented that there seemed to be significantly less to pick up than in previous years. Let's hope that trend continues!"],
        ["Angling Sports Barbeque", "May 7, 2016", "There was hotdogs, burgers and lots of fun going on at this informal get-together. Paul Noble put his barbequing skills to the test supplying a steady stream of hungry customers.", "Ryan Simard spent most of his time trying to sell tickets for the 'Count the Bobbers Contest'. Ryan was also the main guy in organizing and pulling this whole event together - nice work Ryan!"],
        ["Brown Trout Release", "May 2, 2016", "The brown trout were successfully released with the help of 30 Grade 7/8 students from Oxbow Public School.", "It was good timing as the rain stopped just as we showed up at the hatchery. Half of the students went for a stream tour lead by Bill Vandewetering and Richard Westelaken while the other half toured the hatchery operation."],
        ["Annual TRAA Paddle & Fish", "July 18, 2015", "We held our 3rd Annual Paddle & Fish July 18th. Members met at the Tim Horton's on Veteran's Memorial Parkway and then left from there to the put-in at the Veteran's Memorial Parkway bridge.", "From there we paddled and fished our way down to Pottersburg Park."],
        ["Family Fishing Day", "July 11, 2015", "This event has become another TRAA tradition. Members have been helping the Fanshawe Campers Association with the Family Fishing Day for many years now.", "We help the kids rig up, sort out the odd tangle and generally show them some fishing basics. The TRAA members that come out to this event find it both fun and rewarding."],
        ["Rainbow Trout Release", "June 22, 2015", "The rainbow trout fry were released into Dingman Creek with the help of a Grade 4 class from Princess Elizabeth Public School.", "Special thanks to TRAA members Jenn Stewart, Adam Bengen, Bill Vandewetering and Rob Huber for taking the time to help out with the this event."],
        ["TRAA Presented the Film", "June 18, 2015", "As you are likely aware, Springbank Dam has been back in the news with rookie mayor Matt Brown attempting to gain support for the misguided repair of this monument to environmental and fiscal disaster.", "If you are a fan of free-flowing rivers for the health of our aquatic ecosystems and your community and you missed this screening, you'll want to check out this moving piece of cinema on Netflex or anywhere else you can find it."]
    ];
    
    function eventSwap() {
        if (counter > 14) {
            counter = 0;
        }
        if (counter < 0) {
            counter = 14;
        }
        eventImage.src = `images/archive_mobile${counter}.jpg`;
        eventOne.textContent = eventArr[counter][0];
        eventTwo.textContent = eventArr[counter][1];
        eventThree.textContent = eventArr[counter][2];
        eventFour.textContent = eventArr[counter][3];
    }
    
    back.addEventListener("click", function(e) {
        counter -= 1;
        eventSwap();
    });
    next.addEventListener("click", function(e) {
        counter += 1;
        eventSwap();
    })
    
})();
