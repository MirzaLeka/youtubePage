
$(document).ready(function(){

    
    /* Loader  */
    
    $(".fullPageContent").css({
      display: "none"
    })
    
    $("body").css({
      background: "#111"
    });
    
    $(function() {
      $(".mainDiv").fadeOut(2000, function() {
          $("#blogHeader").slideDown(1000);  
          $("body").css({
            background: "#000"
          });      
          $(".fullPageContent").delay(500).fadeIn(1000);  
      });
    });
    
    /* / Loader */
    
    });
    