$(document).ready(function() {

//    $(".overlayIframe").attr("src",videoURLs[0]);
    
  //  videoList();

    /*
    var height = $('body').height()
    console.log("body: " + height);
    */

    getOverlayContent(0);

});

// Array of content

let overlayArray = [
    {
       title:  "Rainbow Six Siege | Battlefield Hardline Saga",
       description: "<br> Saga combines many gaming series together into a groundbreaking cops and criminals drama. Beside Rainbow Six and Battlefield, series also features Counter Strike, Swat 4, as well as two SWAT movies.<br><br> Next entry in the series brings Payday, Grand Theft Auto and Call of Duty into the mix.<br><br> <b>Release date</b>: TBA",
       videoURLs: [
        "https://www.youtube.com/embed/Qu4H06Jsn6w",
        "https://www.youtube.com/embed/eAdz1faa3d4",
        "https://www.youtube.com/embed/slbnHR0gngg"
       ],
       videoImages : [
        "../Resources/img/overlayImg/r61.jpg",
        "../Resources/img/overlayImg/r62.jpg",
        "../Resources/img/overlayImg/r63.jpg"
       ],
       sideImages : [
        "../Resources/img/rainbowSeries.jpg",
        "../Resources/img/overlayImg/r6Side.jpg"
       ]
    }
    
    
    ];

////////////////////////


/* Adding props to the DOM */

let getOverlayContent = j => {


// Series title

$(".overlayTitle").html(overlayArray[j].title);

// Series Description

$(".overlayVideoDescription").html(overlayArray[j].description);

// List of videos

let fillList = ''; 

let part2 = 'https://www.youtube.com/embed/eAdz1faa3d4';

console.log(`part2: ${part2}`);

console.log("overlay urls: " + overlayArray[j].videoURLs);

var part3 = overlayArray[j].videoURLs;

console.log("PART 3: " + part3);
    
for (let i = 0; i < overlayArray[j].videoImages.length; i++) {

    fillList += `<li style="background: url(${overlayArray[j].videoImages[i]}) no-repeat center center; 
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;  "
    class="overlayListLi"
    onclick="getOverlayIframeSrc(${j}, ${i})">
    <h4 class="overlayListHeading">Episode ${i+1}</h4>
    
    </li> <br>`;
}

$(".videosUl").html(fillList);

// Side Images

let getSideImages = '';

for (let i=0; i < overlayArray[j].sideImages.length; i++) {
getSideImages += `<img class="overlayPreviewImg blackBackground" src=${overlayArray[j].sideImages[i]} />`;
}

$("#sideImages").html(getSideImages);

// Iframe default video -- first in array

$(".overlayIframe").attr("src",overlayArray[j].videoURLs[0]);


}

/////////////////////////////


// Add new src to iframe

function getOverlayIframeSrc(obj, counter) {

    /*
    console.log("obj: " + obj);
    console.log("counter: " + counter);
    */

  $(".overlayIframe").attr("src", overlayArray[obj].videoURLs[counter]);
    
    }







    /* WORKING SAMPLE 
    
       fillList += `<li style="background: url(${overlayArray[j].videoImages[i]}) no-repeat center center; 
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;  "
    class="overlayListLi"
    onclick="getOverlayIframeSrc(${i})">
    <h4 class="overlayListHeading">Episode ${i+1}</h4>
    
    </li> <br>`;
    
    
    */


/*
let overlayTitle = [
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

let overlayVideoDescription = [
`   <br>
Saga combines many gaming series together into a groundbreaking cops and criminals drama.
Beside Rainbow Six and Battlefield, series also features Counter Strike, Swat 4, as well as two SWAT movies.<br><br>
Next entry in the series brings Payday, Grand Theft Auto and Call of Duty into the mix.<br><br>
<b>Release date</b>: TBA`,
``,
``,
``,
``
];

$(".overlayVideoDescription").html(overlayVideoDescription[0]);

let backgroundList = [
"../Resources/img/overlayImg/r61.jpg",
"../Resources/img/overlayImg/r62.jpg",
"../Resources/img/overlayImg/r63.jpg"
];

let videoURLs = [
    "https://www.youtube.com/embed/Qu4H06Jsn6w",
    "https://www.youtube.com/embed/eAdz1faa3d4",
    "https://www.youtube.com/embed/slbnHR0gngg"
]; 


let videoList = () => {

  let fillList = ''; 
    
for (let i = 0; i < backgroundList.length; i++) {

    fillList += `<li style="background: url(${backgroundList[i]}) no-repeat center center; 
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;  "
    class="overlayListLi"
    onclick="getIframeSrc(${i})">
    <h4 class="overlayListHeading">Episode ${i+1}</h4>
    
    </li> <br>`;

}

$(".videosUl").html(fillList);

}


function getIframeSrc(src) {

    $(".overlayIframe").attr("src",videoURLs[src]);
    
    }



let sideImages = [
    "../Resources/img/rainbowSeries.jpg",
    "../Resources/img/overlayImg/r6Side.jpg"
];

let getSideImages = '';

for (let i=0; i < sideImages.length; i++) {
getSideImages += `<img class="overlayPreviewImg blackBackground" src=${sideImages[i]} />`;
}

$("#sideImages").html(getSideImages);

*/

// Video URLS

// MOH

let a = 'https://www.youtube.com/watch?v=uNn0IAS8HEk';
let b = 'https://www.youtube.com/watch?v=QsoXx2s2IBc';
let c = 'https://www.youtube.com/watch?v=QcLC14HbvHY';
let d = 'https://www.youtube.com/watch?v=ENyo9Km-HWg';
let e = 'https://www.youtube.com/watch?v=9F1vZdshgVw';

let story1 = `Comeback series saga is based around everyone's favorite World War 2 shooters. 
Series features number of games including Medal of Honor Allied Assault and the expansion packs,
Call of Duty 1 and 2 with their most iconic missions played in a way you'd never knew existed. Series also features easter eggs and funny moments.`;

// Spider-Man

let aa = 'https://www.youtube.com/watch?v=LruYPBvGQHc';
let bb = 'https://www.youtube.com/watch?v=XQ_AH4IFCT4';

let story2 = "Inspired by no-other than the Marvel's Amazing Spierman series, the saga follows that same storyline told in a different way.";


// Family Bond

let aaa = 'https://www.youtube.com/watch?v=uCDSVtRXnT4';
let bbb = 'https://www.youtube.com/watch?v=WuuM1kwxPO4';
let ccc = 'https://www.youtube.com/watch?v=qC9DlHSX5yE';

let story3 = `Starting with Kenway family, divnig back into Ezio's saga and Altair and finally finishing with Arno and Jacob
,saga gives each major Assassin's Creed protagonist a moment to shine with a sound of Eminem and Imagine Dragons playing in the back.`;

// the will of D

let aaaa = 'https://www.youtube.com/watch?v=bQ7aaklrqKk';
let bbbb = 'https://www.youtube.com/watch?v=j-JdcGMoOVE';
let cccc = 'https://www.youtube.com/watch?v=oxrXfDuaTl4';

let story4 = `Through high action set pieces and stunning visual effects this saga focuses on famous anime series One Piece.
This three part series follows the advantures of Monkey D. Luffy and his crew on a quest to find treasure known as 'One Piece'
in order to become the next pirate king.`;

