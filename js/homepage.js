$(document).ready(function(){




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