$(window).load(function(){
   $('.pageblock').css('min-height', $(window).height()+'px');
})

$(document).ready( function() {
   $(".next-block").click(function() {
     var i = $(this).closest(".pageblock").index()+1;
     $('html, body').animate({
       scrollTop: $(".pageblock:nth-child("+(i+1)+")").offset().top
     }, 600);
   });
 })

 $(window).resize(function() {
   $('.pageblock').css('min-height', $(window).height()+'px');
 })
