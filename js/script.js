$(window).load(function){
   $('.pageblock').css('min-height', $(window).height()+'px');
})

$(document).ready( function() {
   $(".next-block").click(function() {
     console.log('click');
     var i = $(this).closest(".pageblock").index()+1;
     console.log(i)
     $('html, body').animate({
       scrollTop: $(".pageblock:nth-child("+(i+1)+")").offset().top
     }, 600);
   });

 })


 $(window).on('resize', function(){
    $('.pageblock').css('height', $(window).height()+'px');
 })
