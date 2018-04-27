$( document ).ready(function() {
    console.log( "ready!" );


    var movementTimer = null;
    $('#chapter_1_video').mousemove(function()
    {
    	$('#vid_control_bar').fadeIn( 1000, function() {});

    	   $('#vid_control_bar').mouseover(function(){
     	console.log( "show!" );
    	$('#vid_control_bar').show(function() {});
    });
    	clearTimeout(movementTimer);
    	movementTimer = setTimeout(function()
    	{
    	 $('#vid_control_bar').fadeOut(1000, function() { });
    	}, 3000);
    });


var video =$('#chapter_1_video')[0];

 $('#video_button').click(function(){

    video.play();
    $('#video_button').hide();
    $('#pause_button').addClass('fa-pause');
       $('#pause_button').removeClass('fa-play'); 


  });


    $('#pause_button').click(function(){
    
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

    });


var vidTime =$("#chapter_1_video");

vidTime.on('loadedmetadata', function() {

  var time = vidTime[0].duration;
        var minutes = Math.floor(time / 60);   
        var seconds = Math.floor(time % 60);
if(seconds <10){$('.duration').text(minutes + ':' + '0' +seconds);} else {$('.duration').text(minutes + ':'+seconds);};
}); 
 
//update HTML5 video current play time
vidTime.on('timeupdate', function() {
	$('.current').text(vidTime[0].currentTime);
	var time = vidTime[0].currentTime;
        var minutes = Math.floor(time / 60);   
         var seconds = Math.floor(time % 60);

	if(seconds <10){$('.current').text(minutes + ':' + '0' +seconds);}else{$('.current').text(minutes + ':'+seconds);};
    var currentPos = vidTime[0].currentTime; //Get currenttime
    var maxduration = vidTime[0].duration; //Get video duration
    var percentage = 100 * currentPos / maxduration; //in %
    $('.timeBar').css('width', percentage+'%');
});

var timeDrag = false;   /* Drag status */
$('.progressBar').mousedown(function(e) {
    timeDrag = true;
    updatebar(e.pageX);
});
$(document).mouseup(function(e) {
    if(timeDrag) {
        timeDrag = false;
        updatebar(e.pageX);
    }
});
$(document).mousemove(function(e) {
    if(timeDrag) {
        updatebar(e.pageX);
    }
});
 
//update Progress Bar control
var updatebar = function(x) {
    var progress = $('.progressBar');
    var maxduration = vidTime[0].duration; //Video duraiton
    var position = x - progress.offset().left; //Click pos
    var percentage = 100 * position / progress.width();
 
    //Check within range
    if(percentage > 100) {
        percentage = 100;
    }
    if(percentage < 0) {
        percentage = 0;
    }
 
    //Update progress bar and video currenttime
    $('.timeBar').css('width', percentage+'%');
    vidTime[0].currentTime = maxduration * percentage / 100;
};


//Mute/Unmute control clicked
$('.muted').click(function() {
   vidTime[0].muted ^= 1;  // Toggle mute 1/0
   $(this).toggleClass('mute unmute');
   $('#mute_button').toggleClass('fa-volume-up fa-volume-off');
   if(vidTime[0].muted){
    $('.volumeBar').css('width', '0');
   }else{
$('.volumeBar').css('width', '100%');
   }
});


 
//Volume control clicked
$('.volumeBar').on('mousedown', function(e) {
    var position = e.pageX - $('.volume').offset().left;
    var percentage = 100 * position / $('.volume').width();
    $('.volumeBar').css('width', percentage+'%');
    vidTime[0].volume = percentage / 100;


});

$('#chapter_1_video').on("timeupdate", function(){
    if(this.currentTime >=19 ) {
       $('#past_story_1_wrapper') .removeClass('d-none');
       
    }

    if(this.currentTime >=24) {
   $('#past_story_1_wrapper') .addClass('d-none');

    }

});


  $('#past_story_1_wrapper').click(function(){
   video.pause();
$('#story_1_wrapper').removeClass('d-none');

  });

  $('.close_cta').click(function(){
$('#story_1_wrapper').addClass('d-none');
vidTime[0].play();
});


/*

$('#chapter_1_video').on("timeupdate", function(autostop){
    if(this.currentTime >=13.5 ) {
    	this.pause();
      $('#article_1').addClass('d-inline-block article_1_wrapper');
      $('#article_1').removeClass('d-none');
      $('#chapter_1_video').off(autostop);
    }

});

$('#chapter_1_video').on("timeupdate", function(autostop){
    if(this.currentTime >=20 ) {
      this.pause();
      $('#article_2').addClass('d-inline-block article_1_wrapper');
      $('#article_2').removeClass('d-none');
      $('#chapter_1_video').off(autostop);
      $('#article_1').removeClass('d-inline-block article_1_wrapper');
$('#article_1').addClass('d-none');
    }

});
*/



$('.resume_button').click(function(){
vidTime[0].play();
$('#article_1').removeClass('d-inline-block article_1_wrapper');
$('#article_1').addClass('d-none');
$('#article_2').removeClass('d-inline-block article_1_wrapper');
$('#article_2').addClass('d-none');
});




vidTime[0].addEventListener('ended', function(){

$('#pause_button').removeClass('fa-pause');
$('#pause_button').addClass('fa-play');
});

/*
$('#story_1').click(function(){
$('#story_1_wrapper').removeClass('d-none');
$('#article_1').removeClass('d-inline-block article_1_wrapper');
$('#article_1').addClass('d-none');

});



$('.chapter_1_dot_1').click(function(){
vidTime[0].pause();
$('#article_1').addClass('d-inline-block article_1_wrapper');
      $('#article_1').removeClass('d-none');
      $('#article_2').removeClass('d-inline-block article_1_wrapper');
$('#article_2').addClass('d-none');

});

$('.chapter_1_dot_2').click(function(){
vidTime[0].pause();
$('#article_2').addClass('d-inline-block article_1_wrapper');
      $('#article_2').removeClass('d-none');
      $('#article_1').removeClass('d-inline-block article_1_wrapper');
$('#article_1').addClass('d-none');

});
*/

$('.chapter_1_dot_1').mouseover(function(){
$('.chapter_1_title_1').removeClass('d-none');
$('.chapter_1_title_1').addClass('d-inline-block');

});


$('.chapter_1_dot_1').mouseout(function(){
$('.chapter_1_title_1').addClass('d-none');
$('.chapter_1_title_1').removeClass('d-inline-block');

});



$('.chapter_1_dot_2').mouseover(function(){
$('.chapter_1_title_2').removeClass('d-none');
$('.chapter_1_title_2').addClass('d-inline-block');

});


$('.chapter_1_dot_2').mouseout(function(){
$('.chapter_1_title_2').addClass('d-none');
$('.chapter_1_title_2').removeClass('d-inline-block');

});

$('.chapter_1_dot_3').mouseover(function(){
$('.chapter_1_title_3').removeClass('d-none');
$('.chapter_1_title_3').addClass('d-inline-block');

});


$('.chapter_1_dot_3').mouseout(function(){
$('.chapter_1_title_3').addClass('d-none');
$('.chapter_1_title_3').removeClass('d-inline-block');

});

$('.chapter_1_dot_4').mouseover(function(){
$('.chapter_1_title_4').removeClass('d-none');
$('.chapter_1_title_4').addClass('d-inline-block');

});


$('.chapter_1_dot_4').mouseout(function(){
$('.chapter_1_title_4').addClass('d-none');
$('.chapter_1_title_4').removeClass('d-inline-block');

});




 var CtaMovementTimer = null;
    $('#previous_block').mouseover(function()
    {
      $('#previous_chapter').fadeIn( 1000, function() {});

      clearTimeout(CtaMovementTimer);
     CtaMovementTimer = setTimeout(function()
      {
       $('#previous_chapter').fadeOut(1000, function() { });
      }, 2000);

    });

    $('#next_block').mouseover(function()
    {
      $('#next_chapter').fadeIn( 1000, function() {});

      clearTimeout(CtaMovementTimer);
     CtaMovementTimer = setTimeout(function()
      {
       $('#next_chapter').fadeOut(1000, function() { });
      }, 2000);

    });

$('.guide_close_cta').click(function(){
$('#using_guide').addClass('d-none');
});




});