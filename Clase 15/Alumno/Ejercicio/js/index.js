$(document).ready(function(){

console.log('init ej 15')

function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        
        cbk(null, data)
      
      })
      .fail(function (error) {
        cbk(error)
      })



  }

  var urlBase = 'https://swapi.co/api/' + 'people/5/'

 function callBack (error, data){

    var data = data

    console.log(data.name + ' ' + data.height + ' ' + data.hair_color + ' ' + data.hair_color)

 }

 function showName (){

    

 }

  getData(urlBase, callBack)

  

})