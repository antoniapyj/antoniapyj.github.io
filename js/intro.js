
$( document ).ready(function() {
    console.log( "ready!" );


$('.intro_close').click(function(){
$('#home_intro').addClass('d-none');
});

 $('#home_intro').delay(16500).fadeOut(1000);


$(".circle-1").hover(function(){
$(".circle-1").animate({width:"600px", height: "600px", top: "3%", left: "0%"},1200);
$(".circle-2").animate({width:"560px", height: "560px", top: "24%", left: "58%"},1500);
$(".circle-3").animate({width:"180px", height: "180px", top: "7%", left: "46%"},1000);
$(".circle-4").animate({width:"180px", height: "180px", top: "75%", left: "28%", opacity:"0.6"},1800);
$(".circle-5").animate({width:"120px", height: "120px", top: "57%", left: "44%"},1500);
$(".circle-6").animate({width:"100px", height: "100px", top: "6%", left: "72%"},800);
});


$(".circle-1").mouseleave(function(){
$(".circle-1").animate({width:"500px", height: "500px", top: "5%", left: "3%"},900);
$(".circle-2").animate({width:"600px", height: "600px", top: "25%", left: "57%"},1500);
$(".circle-3").animate({width:"200px", height: "200px", top: "8%", left: "45%"},1000);
$(".circle-4").animate({width:"120px", height: "120px", top: "80%", left: "30%", opacity:"1"},1800);
});




$(".circle-2").hover(function(){
$(".circle-2").animate({width:"880px", height: "880px", top: "16%", left: "45%"},1300);
$(".circle-1").animate({width:"480px", height: "480px", top: "4%", left: "3%"},900);
$(".circle-3").animate({width:"180px", height: "180px", top: "7%", left: "46%"},1000);
$(".circle-4").animate({width:"180px", height: "180px", top: "75%", left: "28%", opacity:"0.6"},1800);
$(".circle-5").animate({width:"70px", height: "70px", top: "60%", left: "45%", opacity:"0.6"},1500);
$(".circle-6").animate({width:"70px", height: "70px", top: "6%", left: "74%"},800);
});


$(".circle-3").hover(function(){
$(".circle-1").animate({width:"600px", height: "600px", top: "3%", left: "1%"},1200);
$(".circle-2").animate({width:"560px", height: "560px", top: "24%", left: "58%"},1500);
$(".circle-3").animate({width:"250px", height: "250px", top: "4%", left: "46%", opacity:"0.8"},1000);
$(".circle-4").animate({width:"180px", height: "180px", top: "75%", left: "28%", opacity:"0.6"},1800);
$(".circle-5").animate({width:"100px", height: "100px", top: "58%", left: "44%", opacity:"0.6"},1500);
$(".circle-6").animate({width:"90px", height: "90px", top: "8%", left: "72%"},800);
});


$(".circle-4").hover(function(){
$(".circle-1").animate({width:"600px", height: "600px", top: "3%", left: "2%"},1200);
$(".circle-2").animate({width:"560px", height: "560px", top: "24%", left: "58%"},1500);
$(".circle-3").animate({width:"250px", height: "250px", top: "4%", left: "46%"},1000);
$(".circle-4").animate({width:"200px", height: "200px", top: "72%", left: "32%", opacity:"0.6"},1800);
$(".circle-5").animate({width:"100px", height: "100px", top: "58%", left: "44%", opacity:"0.6"},1500);
});

$(".circle-5").hover(function(){
$(".circle-1").animate({width:"600px", height: "600px", top: "3%", left: "2%"},1200);
$(".circle-2").animate({width:"560px", height: "560px", top: "24%", left: "58%"},1500);
$(".circle-3").animate({width:"250px", height: "250px", top: "4%", left: "46%"},1000);
$(".circle-4").animate({width:"200px", height: "200px", top: "72%", left: "32%", opacity:"0.6"},1800);
$(".circle-5").animate({width:"120px", height: "120px", top: "57%", left: "44%"},1500);
});

});