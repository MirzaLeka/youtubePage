$(document).ready(function() {

    videoList();

    var height = $('body').height()
    console.log("body: " + height);

});

/*
var videoTitles = [
"Rainbow Six Siege | Battlefield Hardline Saga",    
"Assassin's Creed: Family Bond Saga",
"Comeback Series Saga",
"One Piece: The Will of D Saga",
"The Amazing Spiderman Saga"
 ];

$(".videoTitle").html(videoTitles[0]); */

// Use objects

// Put two pics into object, object into array

// use $ .html to cycle between objects ---> array[0].pic1, array[0].pic2

1
let videoTitles= [
"Episode",
"Episode",
"Episode"
];

let backgroundList = [
"../Resources/img/overlayImg/rainbowSeries/max.jpg",
"../Resources/img/overlayImg/rainbowSeries/max1.jpg",
"../Resources/img/overlayImg/rainbowSeries/max2.jpg"
];

let videoList = () => {

  var fillList = ''; 

  var url = 'max.jpg';
    
for (let i = 0; i < videoTitles.length; i++) {

    fillList += `<li style="background: url(${backgroundList[i]}) no-repeat center center; 
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;  "
    class="listLi"
    onclick="getIframeSrc(${i})">
    <h4 class="listHeading">${videoTitles[i]} ${i+1}</h4>
    
    </li> <br>`;

}


$("#videosUl").html(fillList);

}


function getIframeSrc(src) {

    console.log("I'm in!");

    let videoURLs = [
        "https://www.youtube.com/embed/Qu4H06Jsn6w",
        "https://www.youtube.com/embed/eAdz1faa3d4",
        "https://www.youtube.com/embed/slbnHR0gngg"
    ];
    

    $(".overlayIframe").attr("src",videoURLs[src]);
    
    
    }

let sideImages = [
    "../Resources/img/overlayImg/rainbowSeries/max2.jpg",
    "../Resources/img/overlayImg/rainbowSeries/max3.jpg"
];

let getSideImages = '';

for (let i=0; i < sideImages.length; i++) {
getSideImages += `<img class="previewImg blackBackground" src=${sideImages[i]} />`;
}

$("#sideImages").html(getSideImages);


