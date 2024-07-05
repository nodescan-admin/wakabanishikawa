$(function(){$("div.panel").hide();
$(".menu").click(function(){
    $(this).toggleClass("menuOpen").next().slideToggle();
});
})

$(document).ready(function(){
      $('.bxslider').bxSlider({
      mode: 'fade',
      auto: true,
      speed:1000,
      controls: false,
      pause: 6000
    })
});
