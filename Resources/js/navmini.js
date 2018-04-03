
var navActive = false;

$("#openMiniNav").click(() => {
 
    if (navActive) {
      
        $(".outerNavUl").animate({
            top: -120
        },800);
        
        navActive = false;
    }
    else {

        $(".outerNavUl").animate({
            top: 45
        },800);
        
        
        navActive = true;
    }

});