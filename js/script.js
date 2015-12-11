

	$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
  	items : 1,
  	navigation : false,
    pagination : false,
    slideSpeed : 400,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
    lazyLoad : true,
  });
  var owl = $(".owl-carousel").data('owlCarousel');
  $(".promo-slider__tab-first").on("click", function(e){
      e.preventDefault();
      owl.goTo("0");
      $(this).addClass("tab-active");
      $(this).siblings().removeClass("tab-active");
  })
   $(".promo-slider__tab-second").on("click", function(e){
      e.preventDefault();
      owl.goTo("1");
      $(this).addClass("tab-active");
      $(this).siblings().removeClass("tab-active");
  })

    $("#gallery").owlCarousel({
    items : 6,
    navigation : false,
    pagination : false,
  });

     $("#big-slide").owlCarousel({
    items : 1,
    navigation : false,
    pagination : false,
    autoHeight : true,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
    lazyLoad : true,
  });


    if($(window).width()>1199){
           $("#reviews").owlCarousel({
        items : 2,
        navigation : false,
        pagination : false,
        
      });
    }
    if($(window).width()<1200){
      $("#reviews").removeClass("owl-carousel");
    }
     $(".discount__slide").css("position", "relative");
     $(".discount__navigation").hide();
     $("#discount").owlCarousel({
    items : 1,
    navigation : false,
    pagination : true,
    slideSpeed : 400,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
    lazyLoad : true,
  });
     $("#single-room__slider").owlCarousel({
    items : 1,
    navigation : false,
    pagination : false,
    slideSpeed : 400,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
    lazyLoad : true,
  });

     if($(window).width()<1200&&$(window).width()>767){
         
             $("#single-room__bottom-slider").owlCarousel({
        items : 2,
        navigation : false,
        pagination : true,
        slideSpeed : 400,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,2],
        itemsMobile : [479,2],
        lazyLoad : true,
      });
 
    }

    $(".burger").on("click", function(){
      $(".main-nav").toggleClass("active");
      $(".burger").toggleClass("active");
    })
   
     
     
});
