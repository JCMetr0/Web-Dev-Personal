var BackgroundImg = ["/images/banners/bn1.png",
"/images/banners/bn2.png",
"/images/banners/bn3.png",
];
let bannerNum = 0;


//document.getElementById("posterimg").style.backgroundImage = 'url("' + BackgroundImg[bannerNum] + '")';



function changeImage() {
   

    //var i = Math.floor((Math.random() * 3));
    document.getElementById("posterimg").style.backgroundImage = 'url("' + BackgroundImg[bannerNum] + '")';
    bannerNum += 1;
    //console.log(bannerNum)

    if (bannerNum >= BackgroundImg.length) {
        bannerNum = 0;
    }
}
//window.setInterval(changeImage, 2000);