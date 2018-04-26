$( document ).ready(function() {
    console.log( "ready!" );





 $( '#menu' ).mouseover(function() {
 $('.logobox').css('transform','rotate(0deg)'); 
 $('.logo').fadeOut( 500, function() {});

$('#menu-icon').fadeIn( 500, function() {});
});


 $( '#menu' ).mouseleave(function() {
 $('.logobox').css('transform','rotate(45deg)'); 
 $('.logo').fadeIn( 500, function() {});

$('#menu-icon').fadeOut( 500, function() {});
});


$( '#menu-icon' ).click(function() {

	$( '#menu-open-icon' ).removeClass('d-none');
	$( '#menu-icon' ).addClass('d-none');
	$('.logo').addClass('d-none');
	$('#menu-wrapper').fadeIn( 500, function() {});
	$('#menu-wrapper').addClass('d-inline-block');
	$('#video_button').hide();

var video =$('#chapter_1_video')[0];

if (video.paused == false) {
      video.pause();
      $('#pause_button').removeClass('fa-pause');
       $('#pause_button').addClass('fa-play');

  } else {
}

});




$( '.fa-times' ).click(function() {

$('#menu-wrapper').removeClass('d-inline-block');
	$( '#menu-open-icon' ).addClass('d-none');
	$( '#menu-icon' ).removeClass('d-none');
	$('.logo').removeClass('d-none');
var video =$('#chapter_1_video')[0];
video.play();

});

});



