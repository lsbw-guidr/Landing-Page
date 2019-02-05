const bannerText = document.querySelector(".banner-text");

bannerText.addEventListener("onload", e => {
    TweenMax.to(".green", 3, { rotationX: 360 });
});

