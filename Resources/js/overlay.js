$(document).ready(function() {

    $(".overlayIframe").attr("src",videoURLs[0]);
    
    videoList();

    var height = $('body').height()
    console.log("body: " + height);

});


var overlayTitle = [
"Rainbow Six Siege | Battlefield Hardline Saga",    
"Assassin's Creed: Family Bond Saga",
"Comeback Series Saga",
"One Piece: The Will of D Saga",
"The Amazing Spiderman Saga"
 ];

$(".overlayTitle").html(overlayTitle[0]); 

// Use objects

// Put two pics into object, object into array

// use $ .html to cycle between objects ---> array[0].pic1, array[0].pic2

1
let sidebarVideoTitles= [
"Episode",
"Episode",
"Episode"
];

let overlayVideoDescription = [
`   <br>
Saga combines many gaming series together into a groundbreaking cops and criminals drama.
Beside Rainbow Six and Battlefield, series also features Counter Strike, Swat 4, as well as SWAT 2003 and SWAT Firefight movies.<br><br>
Next entry in the series brings Payday, Grand Theft Auto and Call of Duty into the mix.<br><br>
<b>Release date</b>: TBA`,
``,
``,
``,
``
];

$(".overlayVideoDescription").html(overlayVideoDescription[0]);

let backgroundList = [
"../Resources/img/overlayImg/rainbowSeries/max.jpg",
"../Resources/img/overlayImg/rainbowSeries/max1.jpg",
"../Resources/img/overlayImg/rainbowSeries/max2.jpg"
];

let videoURLs = [
    "https://www.youtube.com/embed/Qu4H06Jsn6w",
    "https://www.youtube.com/embed/eAdz1faa3d4",
    "https://www.youtube.com/embed/slbnHR0gngg"
];


let videoList = () => {

  let fillList = ''; 
    
for (let i = 0; i < sidebarVideoTitles.length; i++) {

    fillList += `<li style="background: url(${backgroundList[i]}) no-repeat center center; 
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;  "
    class="overlayListLi"
    onclick="getIframeSrc(${i})">
    <h4 class="overlayListHeading">${sidebarVideoTitles[i]} ${i+1}</h4>
    
    </li> <br>`;

}



$("#videosUl").html(fillList);

}


function getIframeSrc(src) {

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


