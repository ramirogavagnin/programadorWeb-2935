function homeController () {
 
  var location = window.location.hash
  
  if (location === ''){

      $('body').css("background-image", "url(../img/home.jpg)")
  }
}

export default homeController
