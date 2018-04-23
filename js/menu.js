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


$( '#menu' ).click(function() {
var video =$('#chapter_1_video')[0];

if (video.paused == false) {
      video.pause();
      $('#pause_button').removeClass('fa-pause');
       $('#pause_button').addClass('fa-play');

  } else {
      video.play();
      $('#video_button').hide();
      $('#pause_button').addClass('fa-pause');
       $('#pause_button').removeClass('fa-play'); 
}

$('#menu-wrapper').fadeIn( 500, function() {});
$('#menu-wrapper').toggleClass('d-none d-inline-block');
$('#menu-icon').toggleClass('fa-bars fa-times');
});


});



