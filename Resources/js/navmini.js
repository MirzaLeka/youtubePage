
var navActive = false;

$("#openMiniNav").click(() => {
    $(".outerNavUl").show();
 

    if (navActive) {
      
    
  //      $(".outerNavUl").fadeOut(500);
        $(".outerNavUl").animate({
            top: -65
        },1500);

        
        
        navActive = false;
    }
    else {
//        $(".outerNavUl").fadeIn(500);
        $(".outerNavUl").animate({
            top: 45
        },1500);
        
        
        navActive = true;
    }

});