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

let videoURLs = [
    "https://www.youtube.com/watch?v=Qu4H06Jsn6w",
    "https://www.youtube.com/watch?v=eAdz1faa3d4",
    "https://www.youtube.com/watch?v=slbnHR0gngg"
];

let videoTitles= [
"Part 1",
"Part 2",
"Part 3 - Teaser"
];

let backgroundList = [
"#D50000",
"#007BFF",
"#FFFF00"
];

let videoList = () => {

  var fillList = ''; 
    
for (let i = 0; i < videoURLs.length; i++) {

    fillList += `<li style='background: ${backgroundList[i]}' class="listLi">
    <h5 class="listHeading">${videoTitles[i]}</h5>
    
    </li> <br>`;


}


$("#videosUl").html(fillList);

}

