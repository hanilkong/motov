(function () {
    'use strict'
   
    var desktopCtl = new ScrollMagic.Controller()
    var allCtl = new ScrollMagic.Controller()
    var tween = TweenMax.staggerTo("#evening", 1, { autoAlpha: 1 }, 1)
    var revealTrigger = document.getElementsByClassName('spacer')
    var revealElements = document.getElementsByClassName("reveal-anim")
    var slides = document.getElementsByClassName("panel")
    var mobileSize = 1024

    $('#top-menu').singlePageNav({
        offset: $('#scroll-menu').outerHeight(),
    })

    $('#hamburger-navi').singlePageNav({
        offset: $('#scroll-menu').outerHeight(),
        beforeStart: function(e) {
            $('.hamburger span').removeClass('active')
            $('#hamburger-menu').removeClass('active')
            
        }
    })

    $('.hamburger').click(function(e) {
        $('.hamburger span').toggleClass('active')
        $('#hamburger-menu').toggleClass('active')
    })

    // top menu animation
    new ScrollMagic.Scene({
        triggerElement: document.getElementById('navi-trigger'), 
        offset: 50,												
        triggerHook: 0.00001,
    })
    .setClassToggle('#scroll-menu', "visible") 
    // .addIndicators({ name: "scroll-menu" })
    .addTo(desktopCtl);

    new ScrollMagic.Scene({
        triggerElement: document.getElementById('navi-trigger'), 
        offset: 50,												
        triggerHook: 0.00001,
    })
    .setClassToggle('#logo', "visible") 
    // .addIndicators({ name: "scroll-menu" })
    .addTo(desktopCtl);

    new ScrollMagic.Scene({
        triggerElement: document.getElementById('navi-trigger'), 
        offset: 50,												
        triggerHook: 0.00001,
    })
    .setClassToggle('#navi li a', "visible") 
    // .addIndicators({ name: "scroll-menu" })
    .addTo(desktopCtl);



    // navi color
    new ScrollMagic.Scene({
        triggerElement: "#navi-1",
        duration: $("#container-1").outerHeight(),
    })
    .setClassToggle(".home", "navi-active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(allCtl)

	new ScrollMagic.Scene({
        triggerElement: "#container-2",
        duration: $("#container-2").outerHeight(),
    })
    .setClassToggle(".navi1", "navi-active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(allCtl)

	new ScrollMagic.Scene({
        triggerElement: "#container-5",
        duration: $("#container-5").outerHeight(),
    })
    .setClassToggle(".navi2", "navi-active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(allCtl)

	new ScrollMagic.Scene({
        triggerElement: "#container-6",
        duration: $("#container-6").outerHeight(),
    })
    .setClassToggle(".navi3", "navi-active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(allCtl)

	new ScrollMagic.Scene({
        triggerElement: "#container-7",
        duration: $("#container-7").outerHeight(),
    })
    .setClassToggle(".navi4", "navi-active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(allCtl)

    // 낮에서 밤으로 이미지 트랜지션
    TweenMax.set("#evening", { autoAlpha: 0 });
    new ScrollMagic.Scene({
        triggerElement: "#trigger",
        duration: 400,
    })
    .setTween(tween)
    .addTo(desktopCtl);

    // first-mover, geo-targeting, intelligent icon 애니메이션 
    for (var i = 0; i < revealElements.length; i++) { 
        new ScrollMagic.Scene({
            triggerElement: revealTrigger[i], 
            offset: 50,												
            triggerHook: 0.9,
        })
        .setClassToggle(revealElements[i], "visible")
        // .addIndicators({ name: "digit " + (i + 1) })
        .addTo(desktopCtl);
    }
    
    // 화면전환 애니메이션
    for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
        .setPin(slides[i], { pushFollowers: false })
        .triggerHook('onLeave')
        // .duration('100%')
        // .addIndicators()
        .addTo(desktopCtl);
    }

    if ($(window).width() <= mobileSize && desktopCtl.enabled()) {
        desktopCtl.enabled(false);
      } else if ($(window).width() > mobileSize && !desktopCtl.enabled()) {
        desktopCtl.enabled(true);
      }
      desktopCtl.update(true);

    $(window).on("resize", function() {
        if ($(window).width() <= mobileSize && desktopCtl.enabled()) {
          desktopCtl.enabled(false);
        } else if ($(window).width() > mobileSize && !desktopCtl.enabled()) {
          desktopCtl.enabled(true);
        }
        desktopCtl.update(true);
      });

      
    $('#ad-button').click(function(e) {
        e.preventDefault();
        $('#ad-on-popup-contents').bPopup()
    })
    $('#mount-button').click(function(e) {
        e.preventDefault();
        $('#mount-popup-contents').bPopup()
    })

})()
function adPopUpSend(e) {
    console.log('TCL: adPopUpSend -> e', e)
    
}

function mountPopUpSend(e) {
    console.log('TCL: mountPopUpSend -> e', e)
    
}

function adPopUpClose(e) {
    $('#ad-on-popup-contents').bPopup().close()
}

function mountPopUpClose(e) {
    $('#mount-popup-contents').bPopup().close()
}
