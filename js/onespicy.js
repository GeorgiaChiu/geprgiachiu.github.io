// set images


var images = [
    "/resourse//works/performance/201807-1.jpg",
    "/resourse/works/performance/201906-5.jpg",
    "/resourse/works/performance/201812-1-1.jpg",
    "/resourse/works/performance/201811-1.jpg",
    "/resourse/works/performance/201906-2.jpg",
  
  ]
  // instanciate slider
  var rbgShiftSlider = new rbgShiftSlider({
    // nav : true,
    // navElement: '.scene-nav',
    slideImages: images,
    stageWidth: 1280,
    stageHeight: 720,
    displacementImage: 'http://hmongouachon.com/_demos/rgbShiftSlider/displace-circle.png',
    fullScreen: true,
    transitionDuration: 0.55, // must be 0.1 > transitionGhostDuration
    transitionGhostDuration : 0.15,
    transitionFilterIntensity: 350,
    transitionSpriteIntensity: 2,
    mouseDispIntensity: 3,
    interactive : true,
    autoPlay : true,
    autoPlaySpeed : 3000,

    
  });
