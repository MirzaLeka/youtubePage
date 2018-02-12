
$(document).ready(function(){




  var uploadsNames = ["Tribute To D-Day", "Dragon Ball Z/Super「AMV」Frenkie, Kontra, Indigo - Đe Će Ko", "JUSTICE LEAGUE: Come Together | Music Video", "Hitman: The World's Deadliest Assassin Trailer","Naruto 「AMV」 The Path Of The Ninja"];

  var uploadsWallpapers = ["tributeImg.jpg", "dbzImg.png", "jlImg.jpg", "hitmanImg.jpg", "ninjaImg.jpg" ];

var li = "";

for(var i = 0; i < 5; i++) {
li += ' <li class="listLi">'
+ '<img class="listImg" src="../Resources/img/' + uploadsWallpapers[i] + '"/>'
+ '<ul style="padding-top:25px; list-style-type: none;"> '
+ '<li>' + uploadsNames[i] + '</li>'
+ '</ul>   </li>';


}

$("#listOfRecentVideos").append(li);


});


/* if you mouse over class Nonyx, activate nonyx and set name = nino, else activate spy4er and set name = mirza*/
      function snackbarNonyx() {
    var x = document.getElementById("snackbarNonyx")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

      function snackbarSpy4er() {
    var x = document.getElementById("snackbarSpy4er")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}


$(function () {

  var nxcTitle = "NEXT CREW";

  showText("h1 b cite", nxcTitle, 0, 200);   

});

/* SLIDER */

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