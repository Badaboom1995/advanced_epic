$(document).ready(function(){ 

	$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
  	items : 1,
  	navigation : true,
    navigationText : ["prev","next"],
    pagination : false,
    slideSpeed : 1000,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });
 
});
});