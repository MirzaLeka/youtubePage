
var navActive = false;

// Functions

const closeMiniNavbar = () => {

    $(".outerNavUl").animate({
        top: -120
    },600);
    
    navActive = false;

};

const openMiniNavbar = () => {

    $(".outerNavUl").animate({
        top: 45
    },600);
    
    
    navActive = true;

};

// Trigger

$("#openMiniNav").click(() => {
 
    if (navActive) {
        closeMiniNavbar();
    }
    else {
        openMiniNavbar();  
    }

});

$("div").click(() => {

    closeMiniNavbar();  

});

// Removes hashcode # from url (when you click on nav list item anchor)

$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
});