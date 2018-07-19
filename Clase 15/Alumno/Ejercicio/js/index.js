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

    if(data){

    
console.log(data.name + ' ' + data.gender)

    }
    else {

      console.log('Error: ', error)
    }

 }


  getData(urlBase, callBack)

  

})