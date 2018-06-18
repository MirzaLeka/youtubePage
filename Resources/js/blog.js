$(document).ready(() => {

  /* Loader  */

  $(".fullPageContent").css({
    display: "none"
  });
  
  $("body").css({
    background: "#111"
  });
  
  $(window).on('load', () => {
    $(".mainDiv").fadeOut(2000, function() {
        $("#header").slideDown(1000);  
        $("body").css({
          background: "#000"
        });      
        $(".fullPageContent").delay(500).fadeIn(1000);  
        $(".outerNavUl").delay(1500).fadeIn(400);  
    });
  });
  
  /* / Loader */

});

$(".home").click( function() {
  
    $("html, body").animate({ scrollTop: 0 }, 1000);

} );