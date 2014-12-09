$$(document).ready(function(){
	console.log('Document ready');
	var $toucharea = $$('#toucharea');

	$toucharea.on('swipeUp', function(e){
   		console.log(new Date(),'swipeUp');
   		$("#view_homescreen").hide();
   		//$("#view_homescreen").fadeOut();
   		$("#view_glaces").show();
   		$('.carousel').carousel('pause')
	});

	$toucharea.on('swipeDown', function(e){
   		console.log(new Date(),'swipeDown');
   		$("#view_homescreen").show();
   		$("#view_glaces").hide();
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
         //$("#view_homescreen").animate({width: "80%", height: "80%"}, 'slow');
   });
});