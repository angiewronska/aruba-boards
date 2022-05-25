$('.mobile-menu,.menu a').click(()=> {
  $('.menu').toggleClass('visible');
})
let images = [];

let imagesDesktop = [
'img/ocean/video0000.jpg',
'img/ocean/video0001.jpg',
'img/ocean/video0002.jpg',
'img/ocean/video0003.jpg',
'img/ocean/video0004.jpg',
'img/ocean/video0005.jpg',
'img/ocean/video0006.jpg',
'img/ocean/video0007.jpg',
'img/ocean/video0008.jpg',
'img/ocean/video0009.jpg',
'img/ocean/video0010.jpg',
'img/ocean/video0011.jpg',
'img/ocean/video0012.jpg',
'img/ocean/video0013.jpg',
'img/ocean/video0014.jpg',
'img/ocean/video0015.jpg',
'img/ocean/video0016.jpg',
'img/ocean/video0017.jpg',
'img/ocean/video0018.jpg',
'img/ocean/video0019.jpg',
'img/ocean/video0020.jpg',
'img/ocean/video0021.jpg',
'img/ocean/video0022.jpg',
'img/ocean/video0023.jpg',
'img/ocean/video0024.jpg',
'img/ocean/video0025.jpg',
'img/ocean/video0026.jpg',
'img/ocean/video0027.jpg',
'img/ocean/video0028.jpg',
'img/ocean/video0029.jpg',
'img/ocean/video0030.jpg',
'img/ocean/video0031.jpg',
'img/ocean/video0032.jpg',
'img/ocean/video0033.jpg',
'img/ocean/video0034.jpg',
'img/ocean/video0035.jpg',
'img/ocean/video0036.jpg',
'img/ocean/video0037.jpg',
'img/ocean/video0038.jpg',
'img/ocean/video0039.jpg',
'img/ocean/video0040.jpg',
'img/ocean/video0041.jpg',
'img/ocean/video0042.jpg',
'img/ocean/video0043.jpg',
'img/ocean/video0044.jpg',
'img/ocean/video0045.jpg',
'img/ocean/video0046.jpg',
'img/ocean/video0047.jpg',
'img/ocean/video0048.jpg',
'img/ocean/video0049.jpg',
'img/ocean/video0050.jpg',
'img/ocean/video0051.jpg',
'img/ocean/video0052.jpg',
'img/ocean/video0053.jpg',
'img/ocean/video0054.jpg',
'img/ocean/video0055.jpg',
'img/ocean/video0056.jpg',
'img/ocean/video0057.jpg',
'img/ocean/video0058.jpg',
'img/ocean/video0059.jpg',
'img/ocean/video0060.jpg',

];

let imagesMobile = [
'img/oceanmobile/video0000.jpg',
'img/oceanmobile/video0001.jpg',
'img/oceanmobile/video0002.jpg',
'img/oceanmobile/video0003.jpg',
'img/oceanmobile/video0004.jpg',
'img/oceanmobile/video0005.jpg',
'img/oceanmobile/video0006.jpg',
'img/oceanmobile/video0007.jpg',
'img/oceanmobile/video0008.jpg',
'img/oceanmobile/video0009.jpg',
'img/oceanmobile/video0010.jpg',
'img/oceanmobile/video0011.jpg',
'img/oceanmobile/video0012.jpg',
'img/oceanmobile/video0013.jpg',
'img/oceanmobile/video0014.jpg',
'img/oceanmobile/video0015.jpg',
'img/oceanmobile/video0016.jpg',
'img/oceanmobile/video0017.jpg',
'img/oceanmobile/video0018.jpg',
'img/oceanmobile/video0019.jpg',
'img/oceanmobile/video0020.jpg',
'img/oceanmobile/video0021.jpg',
'img/oceanmobile/video0022.jpg',
'img/oceanmobile/video0023.jpg',
'img/oceanmobile/video0024.jpg',
'img/oceanmobile/video0025.jpg',
'img/oceanmobile/video0026.jpg',
'img/oceanmobile/video0027.jpg',
'img/oceanmobile/video0028.jpg',
'img/oceanmobile/video0029.jpg',
'img/oceanmobile/video0030.jpg',
'img/oceanmobile/video0031.jpg',
'img/oceanmobile/video0032.jpg',
'img/oceanmobile/video0033.jpg',
'img/oceanmobile/video0034.jpg',
'img/oceanmobile/video0035.jpg',
'img/oceanmobile/video0036.jpg',
'img/oceanmobile/video0037.jpg',
'img/oceanmobile/video0038.jpg',
'img/oceanmobile/video0039.jpg',
'img/oceanmobile/video0040.jpg',
'img/oceanmobile/video0041.jpg',
'img/oceanmobile/video0042.jpg',
'img/oceanmobile/video0043.jpg',
'img/oceanmobile/video0044.jpg',
'img/oceanmobile/video0045.jpg',
'img/oceanmobile/video0046.jpg',
'img/oceanmobile/video0047.jpg',
'img/oceanmobile/video0048.jpg',
'img/oceanmobile/video0049.jpg',
'img/oceanmobile/video0050.jpg',

];

function checkWidth() {
  if( $(window).width() >= 992 ) {
    images = imagesDesktop.slice()
  }
  else {
    images = imagesMobile.slice()
  }
}
checkWidth();
$(window).resize(checkWidth);

let obj = {curImg: 0};
let tween = TweenMax.to(obj, 0.5,
  {
    curImg: images.length - 1,
    roundProps: "curImg",
    immediateRender: true,
    ease: Linear.easeNone,
    onUpdate: function () {
      $("#myimg").attr("src", images[obj.curImg]);
    }
  }
);

// init controller
var controller = new ScrollMagic.Controller();

// build scene
new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook:0, duration:'300%'})
.setPin('#imagesequence')
        .setTween(tween)
        .addTo(controller);

let revealElements = document.getElementsByClassName("animated");
	for (i=0; i<revealElements.length; i++) {
		new ScrollMagic.Scene({
							triggerElement: revealElements[i],
							triggerHook: 0.8,
						})
						.setClassToggle(revealElements[i], "fadeIn")
            .addTo(controller);
  }

  let revealImg = document.getElementsByClassName("story-img--left");
  	for (i=0; i<revealImg.length; i++) {
  		new ScrollMagic.Scene({
  							triggerElement: revealImg[i],
  							triggerHook: 0.8,
  						})
  						.setClassToggle(revealImg[i], "fadeInLeft")
              .addTo(controller);
    }

    let revealImg2 = document.getElementsByClassName("story-img--right");
    	for (i=0; i<revealImg.length; i++) {
    		new ScrollMagic.Scene({
    							triggerElement: revealImg2[i],
    							triggerHook: 0.8,
    						})
    						.setClassToggle(revealImg2[i], "fadeInRight")
                .addTo(controller);
      }

new ScrollMagic.Scene({
							triggerElement: "#surfboards",
							triggerHook: 0.8,
							offset: 50
						})
            .setClassToggle("#nav", "nav_bg")
            .addTo(controller);


new ScrollMagic.Scene({triggerElement: ".contact2", triggerHook:1})
						.setPin(".contact1")
						.addTo(controller);

$('.owl-carousel').owlCarousel({
  loop:true,
  items:1,
  dots: true,
  autoplay: true,
  autoplayTimeout:4000,
  autoplayHoverPause:false,
  animateOut: 'fadeOut',
    animateIn: 'fadeIn',
})
