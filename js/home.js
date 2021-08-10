var blackBoxContents = [
    {
        imgSrc : "../assets/home/black-window/image1.jpg",
        mainAd : "Madison",
        subAd : "La Quinta , California"
    },
    {
        imgSrc : "../assets/home/black-window/image2.jpg",
        mainAd : "Baker's Bay",
        subAd : "Great Guana Cay, Bahamas"
    },
    {
        imgSrc : "../assets/home/black-window/image3.jpg",
        mainAd : "Mountaintop",
        subAd : "Cashiers, North Carolina"
    },
    {
        imgSrc : "../assets/home/black-window/image4.jpg",
        mainAd : "Mirabel",
        subAd : "Scottsdale,Arizona"
    },
    {
        imgSrc : "../assets/home/black-window/image5.jpg",
        mainAd : "Vaquero",
        subAd : "West Lake,Texas"
    }
]

var index = 0;
function next(){
    index ++ ;
    changeBlackBox();
}

function prev(){
    index --;
    changeBlackBox();
}

function changeBlackBox(){
    if(index < 0) index = blackBoxContents.length -1;
    if(index > blackBoxContents.length ) index = 0 ;

    document.getElementById("black-box-img").src = blackBoxContents[index].imgSrc;
    document.getElementById("main-ad").innerHTML = blackBoxContents[index].mainAd;
    document.getElementById("sub-ad").innerHTML = blackBoxContents[index].subAd;
}