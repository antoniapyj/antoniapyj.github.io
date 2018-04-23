
$( document ).ready(function() {
    console.log( "ready!" );



$('.intro_left').hover(function(){
$('#home_intro').css('background-image','url(./images/intro-left.jpg)'); 
});

$('.intro_mid').hover(function(){
$('#home_intro').css('background-image','url(./images/intro-mid.jpg)'); 
});

$('.intro_right').hover(function(){
$('#home_intro').css('background-image','url(./images/intro-right.jpg)'); 
});





$('.intro_close').click(function(){
$('#home_intro').addClass('d-none');
});

 $('#home_intro').delay(16500).fadeOut(1000);




	





});