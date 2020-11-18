$(window).on("load",function(){
    $(".c-loader").fadeOut();
    $(".block-text").hover(function(){
      var image = $(this).data("image");
      $("."+image).css("opacity",1);
      $(".c-background").addClass("image-active");
    },function(){
      $(".image").css("opacity",0);
      $(".c-background").removeClass("image-active");
    });
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
      targets: '.bl',
      opacity:1,
      easing: 'easeInElastic(1, .6)',
      delay: anime.stagger(100)
    });

    //load overlay
    $(".block-text a").on("click",function(e){
      e.preventDefault();
      var _targetId = $(this).attr("href");
      $(".c-overlay").animate({"max-width": "100%"},500,function(){
        $(document).find(".tab-item"+_targetId).fadeIn(100,function(){
          anime({
            targets: '.c-overlay .animate',
            translateY: -20,
            opacity:1,
            easing: 'easeInOutSine',
            delay: anime.stagger(50)
          });
         
        });
      });
    })

    $(document).on("click", ".overlay-close", function(e){
      e.preventDefault();
      anime({
        targets: '.c-overlay .animate',
        translateY: 20,
        opacity:0,
        easing: 'easeInOutSine',
        complete: function(anim) {
                    
          $(".tab-item").fadeOut(500,function(){ $(".c-overlay").animate({"max-width":"0%"}, 500)});
        }
      });
     
      
    })
});