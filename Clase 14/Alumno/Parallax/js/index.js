$(document).ready(function(){

console.log('parallax')


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop()
    $('#background1').css('top', -(scrollTop * 0.05) + 'px')
    $('#background2').css('top', -(scrollTop * 0.25) + 'px')
    $('#background3').css('top', -(scrollTop * 0.70) + 'px')
    $('#background4').css('top', -(scrollTop * 0.100) + 'px')
  })


})