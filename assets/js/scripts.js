$(window).on("load",function(){
    $(".c-loader").fadeOut();

    anime({
        targets: '.floating-image .image-1',
        translateX: 20,
        easing: 'easeInOutSine'
      });

      anime({
        targets: '.floating-image .image-2',
        translateX: -20,
        easing: 'easeInOutSine'
      });

      anime({
        targets: '.footer-logo',
        opacity:1,
        translateY: -20,
        easing: 'easeInOutSine',
        delay: 1000
      });

      anime({
        targets: '.c-title',
        opacity:1,
        translateY: 20,
        easing: 'easeInOutSine',
        delay: 1000
      });


      anime({
        targets: '.block-1',
        opacity:1,
        easing: 'easeInElastic(1, .6)',
        delay: 100
      });
      anime({
        targets: '.block-2',
        opacity:1,
        easing: 'easeInElastic(1, .6)',
        delay: 500
      });
      anime({
        targets: '.block-3',
        opacity:3,
        easing: 'easeInElastic(1, .6)',
        delay:1000
      });
      anime({
        targets: '.block-4',
        opacity:1,
        easing: 'easeInElastic(1, .6)',
        delay: 1500
      });
});