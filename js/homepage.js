$(document).ready(function(){



  $('a[href^="#"]').on('click', function(event) {
 var target = $( $(this).attr('href') );
if(target.length) {
 event.preventDefault();
 $('html, body').animate({
   scrollTop: target.offset().top
  }, 1000);
  }
  });



  $('.mobile-menu-icon').click(function(){

$('#mobile-menu-list').toggleClass('d-none d-inline-block');

  });



  $('.batshuayi-text').click(function(){
    $('#batshuayi').fadeIn( "slow", function() {
  });
  });


  $('.bat-close').click(function(){
    $('#batshuayi').fadeOut( "slow", function() {
  });
  });

    $('.brewster-text').click(function(){
    $('#Brewster').fadeIn( "slow", function() {
  });
  });


  $('.brew-close').click(function(){
    $('#Brewster').fadeOut( "slow", function() {
  });
  });

    $('.sterling-text').click(function(){
    $('#sterling').fadeIn( "slow", function() {
  });
  });


  $('.ster-close').click(function(){
    $('#sterling').fadeOut( "slow", function() {
  });
  });

    $('.anton-text').click(function(){
    $('#anton').fadeIn( "slow", function() {
  });
  });


  $('.anton-close').click(function(){
    $('#anton').fadeOut( "slow", function() {
  });
  });






});