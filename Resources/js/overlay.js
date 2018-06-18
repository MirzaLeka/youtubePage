
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
        "../Resources/dist/img/overlayImg/r61.jpg",
        "../Resources/dist/img/overlayImg/r62.jpg",
        "../Resources/dist/img/overlayImg/r63.jpg"
       ],
       sideImages : [
        "../Resources/dist/img/rainbowSeries.jpg",
        "../Resources/dist/img/overlayImg/r6Side.jpg"
       ]
    },

    {
        title:  "Assassin's Creed: Family Bond Saga",
        description: "<br> Starting with Kenway family, divnig back into Ezio's saga and Altair and finishing with Arno and Jacob, saga gives each major Assassin's Creed protagonist a moment to shine with a sound of Eminem and Imagine Dragons playing in the back.",
        videoURLs: [
            'https://www.youtube.com/embed/CDSVtRXnT4',
            'https://www.youtube.com/embed/WuuM1kwxPO4',
            'https://www.youtube.com/embed/qC9DlHSX5yE'
            
        ],
        videoImages : [
         "../Resources/dist/img/overlayImg/bond1.jpg",
         "../Resources/dist/img/overlayImg/bond2.jpg",
         "../Resources/dist/img/overlayImg/bond3.jpg"
        ],
        sideImages : [
         "../Resources/dist/img/assassinsSeries.jpg",
         "../Resources/dist/img/overlayImg/bondSide.jpg"
        ]
    },

    {
        title:  "Comeback Series Saga",
        description: "<br> Comeback series saga is based around everyone's favorite World War 2 shooters. <br>Series features number of games including Medal of Honor Allied Assault and the expansion packs, Call of Duty 1 and 2, with their most iconic missions.<br><br> Beside all the loud firefights you will also see some easter eggs and funny moments.",
        videoURLs: [
            'https://www.youtube.com/embed/uNn0IAS8HEk',
            'https://www.youtube.com/embed/QsoXx2s2IBc',
            'https://www.youtube.com/embed/QcLC14HbvHY',
            'https://www.youtube.com/embed/ENyo9Km-HWg',
            'https://www.youtube.com/embed/9F1vZdshgVw'
        ],
        videoImages : [
         "../Resources/dist/img/overlayImg/moh1.jpg",
         "../Resources/dist/img/overlayImg/moh2.jpg",
         "../Resources/dist/img/overlayImg/moh3.jpg",
         "../Resources/dist/img/overlayImg/moh4.jpg",
         "../Resources/dist/img/overlayImg/moh5.jpg"
        ],
        sideImages : [
         "../Resources/dist/img/comebackSeries.jpg",
         "../Resources/dist/img/overlayImg/mohSide.jpg"
        ]
    },

    {
        title:  "One Piece: The Will of D Saga",
        description: "<br> Through high action set pieces and stunning visual effects this saga focuses on famous anime series One Piece.<br><br>This three part series follows the advantures of Monkey D. Luffy and his crew on a quest to find treasure known as 'One Piece' in order to become the next pirate king.",
        videoURLs: [
            'https://www.youtube.com/embed/bQ7aaklrqKk',
            'https://www.youtube.com/embed/j-JdcGMoOVE',
            'https://www.youtube.com/embed/oxrXfDuaTl4'
        ],
        videoImages : [
         "../Resources/dist/img/overlayImg/will1.jpg",
         "../Resources/dist/img/overlayImg/will2.jpg",
         "../Resources/dist/img/overlayImg/will3.jpg"
        ],
        sideImages : [
         "../Resources/dist/img/onePieceSeries.jpg",
         "../Resources/dist/img/overlayImg/willSide.jpg"
        ]
    },

    {
        title:  "The Amazing Spiderman Saga",
        description: "<br> Inspired by no-other than the Marvel's Amazing Spierman series, the saga follows that same storyline told in a way never seen before.",
        videoURLs: [
            'https://www.youtube.com/embed/LruYPBvGQHc',
            'https://www.youtube.com/embed/XQ_AH4IFCT4'            
        ],
        videoImages : [
         "../Resources/dist/img/overlayImg/spider1.jpg",
         "../Resources/dist/img/overlayImg/spider2.jpg",
        ],
        sideImages : [
         "../Resources/dist/img/spidermanSeries.jpg",
         "../Resources/dist/img/overlayImg/spiderSide.jpg"
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

  $(".overlayIframe").attr("src", overlayArray[obj].videoURLs[counter]);

      /* Scrolling around */
       
      $('html, body').animate({
        scrollTop: $("#overlayIframeDiv").offset().top
    }, 1000); 
    
    }

      





