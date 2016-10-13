$$(document).ready(function(){
	console.log('Document ready');
	var $toucharea = $$('#toucharea');

	$toucharea.on('swipeUp', function(e){
   		console.log(new Date(),'swipeUp');

         // Method 1
         /*
   		$("#view_homescreen").hide();
   		$("#view_glaces").show();
   		$('.carousel').carousel('pause')
         */

         // Method 2
         $("#view_homescreen").slideUp();
         $('#view_glaces').show('slide', {direction: 'down'});
         $('.carousel').carousel('pause')
	});

	$toucharea.on('swipeDown', function(e){
   		console.log(new Date(),'swipeDown', e.touch.delta.x, e.touch.delta.y);

         if(e.touch.delta.y < 30) {
            return false;
         }
         // Method 1
   		//$("#view_homescreen").show();
   		//$("#view_glaces").hide();

         // Method 2
         $("#view_homescreen").slideDown();
         $("#view_glaces").animate({top:'390px'});
         $("#view_glaces").hide();
         $("#view_glaces").animate({top:'0px'});
	});

	$toucharea.on('swipeLeft', function(e){
   		console.log(new Date(),'swipeLeft');
   		$('.carousel').carousel('next')
   		$('.carousel').carousel('pause')
	});

	$toucharea.on('swipeRight', function(e){
   		console.log(new Date(),'swipeRight');
   		$('.carousel').carousel('prev')
   		$('.carousel').carousel('pause')
	});

   $toucharea.on('hold', function(e){
         console.log(new Date(),'hold');
         //$("#view_homescreen").show();
         //$("#view_glaces").hide();
         //$("#view_homescreen").animate({width: "60%", height: "60%"}, 'slow');
         $( "#view_homescreen" ).show({ effect: "scale", direction: "horizontal" });
   });
});