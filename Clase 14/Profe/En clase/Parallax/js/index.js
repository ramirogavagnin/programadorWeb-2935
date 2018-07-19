<<<<<<< HEAD
$(document).ready(function(){

console.log('parallax')


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop()
    $('#background1').css('top', -(scrollTop * 0.15) + 'px')
    $('#background2').css('top', -(scrollTop * 0.50) + 'px')
    $('#background3').css('top', -(scrollTop * 0.75) + 'px')
  })


})
=======
$(document).ready(function () {
  console.log('Init app')

  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop()

    $('#background1').css('top', -(scrollTop * 0.25) + 'px')
    $('#background2').css('top', -(scrollTop * 0.5) + 'px')
    $('#background3').css('top', -(scrollTop * 2) + 'px')
    console.log('Hola soy scroll', scrollTop)
  })
})
>>>>>>> e7401b9ba0266aeb8b0a617156dddec21a8ca4e2
