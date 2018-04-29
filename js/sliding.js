$(document).ready(function() {


$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}


$('#your-element').scrollView();



$('.storyanchor').click(function (event) {
  event.preventDefault();
  $('#thestory').scrollView();

  return false;
});


$('.caseanchor').click(function (event) {
  event.preventDefault();
  $('#casestudies').scrollView();

  return false;
});




});