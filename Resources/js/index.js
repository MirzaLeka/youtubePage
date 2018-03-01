
$(document).ready(function(){

recentUploads();

popularUploads();

});

/* Recent uploads */

function recentUploads() {

  let uploadsNames = ["Tribute To D-Day",
  "Dragon Ball Z/Super「AMV」- Đe Će Ko",
  "JUSTICE LEAGUE: Come Together",
  "Hitman: The World's Deadliest Assassin",
  "Naruto 「AMV」 The Path Of The Ninja"];

  let uploadsWallpapers = ["tributeImg.jpg", "dbzImg.png", "jlImg.jpg", "hitmanImg.jpg", "ninjaImg.jpg" ];

let li = "";

for(let i = 0; i < uploadsNames.length; i++) {
li += ' <li class="listLi" onclick="getVideoSrc(' + i + ')">'
+ '<img class="listImg" src="../Resources/img/' + uploadsWallpapers[i] + '"/>'
+ '<ul class="innerUl"> '
+ '<li class="innerLi">' + uploadsNames[i] + '</li>'
+ '</ul>   </li>';

}

$("#listOfRecentVideos").append(li);

}


function getVideoSrc(src) {

let uploadsSrc = ["https://www.youtube.com/embed/MT11emrOkm8",
"https://www.youtube.com/embed/SxrpLTftavg",
"https://www.youtube.com/embed/QaRjZ5hHX-I",
"https://www.youtube.com/embed/JE9u2dCxbzI",
"https://www.youtube.com/embed/hms61SpaSVA"];

$("iframe").attr("src",uploadsSrc[src]);


}


/* Popular uploads */


function popularUploads(){
  
  let popularVidArray = ["Roronoa Zoro | One Piece「AMV 」Disturbed - Indestructible",
  "Suicide Squad - Purple Lamborghini",
  "Project IGi Launch Trailer",
  "Despicable Me 2 / Eminem - Without Me",
  "Rainbow Six Siege - Battlefield Hardline: Into the jungle",
  "Fast & Furious 6 and Bad Meets Evil-\"Fast Lane\"",
  "Medal of Honor Allied Assault Secrets and Funny Moments",
  "Black Leg Sanji | One Piece [AMV] - I'll Be Gone",
  "CATIA V5 Trailer"];
  
  
let popularImg = ["roronoaPopular.jpg", "suicidePopular.jpg", "igiPopular.jpg",
"despicablePopular.jpg", "rainbowPopular.jpg", "fastPopular.jpg",
"mohaaPopular.jpg", "blackPopular.jpg", "catiaPopular.jpg"];


 let popularVidUrl = ["https://www.youtube.com/watch?v=iM_Q5SgnB44",
 "https://www.youtube.com/watch?v=aX5tY5ePtY4",
 "https://www.youtube.com/watch?v=9fBEd4e0-_M",
 "https://www.youtube.com/watch?v=tR89zzDwWl8",
 "https://www.youtube.com/watch?v=Qu4H06Jsn6w",
 "https://www.youtube.com/watch?v=McFJ9AxOipc",
 "https://www.youtube.com/watch?v=uNn0IAS8HEk",
 "https://www.youtube.com/watch?v=BWeoUxnJiCc",
 "https://www.youtube.com/watch?v=paoaIxRdG7o"]; 

 let row = "";
  
  for(let i = 0; i < popularVidArray.length; i++) {
    
    row+='  <div class="col-sm-4 hey"> <div class="popularDiv" title="Watch on Youtube"> <a href="'+ popularVidUrl[i] + '" target="_blank">  <img class="popularImg" src="../Resources/img/' + popularImg[i] + ' "/>         <h4 class="popularTitle">' + popularVidArray[i] + '</h4> </a> </div> </div>'
    
  }
  $("#row").html(row);
}


/* Original Series - SLIDER */

   var $item = $('.carousel .item'); 
//var $wHeight = $(window).height(); == screen height
$item.eq(0).addClass('active');
$item.height("50vh"); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

/* Don't want to change height on window Resize
$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
}); */

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});



/* Connect with SNACKBAR */

      function snackbar(y) {
 
    var x = document.getElementById("snackbar");
    // y can either be Nino or Mirza

if (x.className != "show") {
 
    x.className = "show";
  $("#snackbar cite").text("Connect With " + y);
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    /* What this does is block hover spam. Let's say you hover over one box, Connect with Nino appears. 
You hover over another, Connect wit Mirza appears, but Connect with Nino didn't disappear yet and you hover again. Boom! 
Snackbar is starting to appear and disappear like crazy. How to solve the problem?
Well this separates code into if / else statement, if you see snackbar you can't trigger another before existing one disappears.*/


} else {

    $("#snackbar cite").text("Connect With " + y);

// But if it's shown and I hover over another, switch names


}


}



/* NEXT CREW HEADER */

var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}


$(function () {

  var nxcTitle = " NEXT CREW";

  showText("h1 b cite", nxcTitle, 0, 200);   

});


function openEmail(){

window.open("mailto:nxc-production@live.com");
  
}

/* Scrolling around */

// Home

$("#home").click( function() {
  
  	$("html, body").animate({ scrollTop: 0 }, 1000);
  
} );

// Crew

$("#cr").click(function() {
    $('html, body').animate({
        scrollTop: $("#meetTheCrew").offset().top
    }, 1000);
});

// Projects

$("#pr").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});

// Stories

$("#st").click(function() {
    $('html, body').animate({
        scrollTop: $("#stories").offset().top
    }, 1000);
});


// Get in touch

$("#gt").click(function() {
    $('html, body').animate({
        scrollTop: $("#getInTouch").offset().top
    }, 1000);
});

////////////////////

// Recent Uploads

$("#ru").click(function() {
    $('html, body').animate({
        scrollTop: $("#scrollRu").offset().top
    }, 1000);
});


// Popular Uploads

$("#pu").click(function() {
    $('html, body').animate({
        scrollTop: $("#scrollPu").offset().top
    }, 1000);
});


// Original Series

$("#os").click(function() {
    $('html, body').animate({
        scrollTop: $("#scrollOs").offset().top
    }, 1000);
});


// Where do we go next

$("#wd").click(function() {
    $('html, body').animate({
        scrollTop: $("#scrollWd").offset().top
    }, 1000);
});


//module.exports.popular = popularUploads;

/* NAVBAR sub-menu Scroll down

	$(".menu-trigger").click(function() {
		
		$(".nav-menu").slideToggle(400, function() {
			$(this).toggleClass("nav-expanded").css('display', '');
		});
		
	});
*/

/* FULL SCREEN OVERLAY */

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}