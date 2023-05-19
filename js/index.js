var BackgroundImg = ["/images/banners/banner1.jpg",
"/images/banners/banner2.jpg",
"/images/banners/banner3.jpg",
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