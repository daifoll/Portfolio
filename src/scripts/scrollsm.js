let projex = document.querySelector('#projex');

let smoothScroll = new scrollToSmooth('a', {
    // options here
    duration: 400,
    easing: "easeInCubic",

});
smoothScroll.init();