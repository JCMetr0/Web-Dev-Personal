window.onload = function () {

    function changeImage() {   
        var BackgroundImg=["/images/banners/banner1.jpg",
        "/images/banners/banner2.jpg",
        "/images/banners/banner3.jpg",
        ];
        var i = Math.floor((Math.random() * 3));
        document.getElementById("posterimg").style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 7000);
}