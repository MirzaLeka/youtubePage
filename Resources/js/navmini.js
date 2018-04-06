
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