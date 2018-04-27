
/* NAVBAR scroll - not in use <=========== Inside DOcument Ready Function  */

//$("#menu, .outerNavUl").hide();
/*
    
    $(function () {
        $(window).scroll(function () {

          
            if ($(this).scrollTop() > 300) {

                setTimeout(function(){ 
                    $('#menu').css({

                        background: "-moz-linear-gradient(#444, #111)",
                        background: "-webkit-linear-gradient(#444, #111)",
                        background: "-o-linear-gradient(#444, #111)",
                        background: "-ms-linear-gradient(#444, #111)",
                        background: "linear-gradient(#444, #111)",
                        transition: "all 0.8"
                    });
                
                },2000);

              
            } else {
                $('#menu').css({
                    background: "none",
                    transition: "all 0.8s"
                });
            }
        });
    });*/


/* Scrolling around */

// Home

$(".home").click( function() {
  
    $("html, body").animate({ scrollTop: 0 }, 1000);

} );

// Crew

$(".cr").click(function() {
  $('html, body').animate({
      scrollTop: $("#meetTheCrew").offset().top
  }, 1000);
});

// Projects

$(".pr").click(function() {
  $('html, body').animate({
      scrollTop: $("#projects").offset().top
  }, 1000);
});

// Stories

$(".st").click(function() {
  $('html, body').animate({
      scrollTop: $("#stories").offset().top
  }, 1000);
});


// Get in touch

$(".gt").click(function() {
  $('html, body').animate({
      scrollTop: $("#getInTouch").offset().top
  }, 1000);
});

////////////////////

// Recent Uploads

$(".ru").click(function() {
  $('html, body').animate({
      scrollTop: $("#scrollRu").offset().top
  }, 1000);
});


// Popular Uploads

$(".pu").click(function() {
  $('html, body').animate({
      scrollTop: $("#scrollPu").offset().top
  }, 1000);
});


// Original Series

$(".os").click(function() {
  $('html, body').animate({
      scrollTop: $("#scrollOs").offset().top
  }, 1000);
});


// What's next

$(".wd").click(function() {
  $('html, body').animate({
      scrollTop: $("#scrollWd").offset().top
  }, 1000);
});

// Removes hashcode # from url (when you click on nav list item anchor)

$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
});