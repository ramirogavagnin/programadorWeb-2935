$(document).ready(function(){

console.log('parallax')


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop()
    $('#background1').css('top', -(scrollTop * 0.15) + 'px')
    $('#background2').css('top', -(scrollTop * 0.50) + 'px')
    $('#background3').css('top', -(scrollTop * 0.75) + 'px')
  })


})