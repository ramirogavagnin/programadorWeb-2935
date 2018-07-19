$(document).ready(function(){

console.log('init desafío 15')

getData(urlBase, getInfo)


function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
      
        cbk(null, data)
      
      })
      .fail(function (error) {
        cbk(error)
      })
  }


  

var urlBase = 'https://swapi.co/api/' + 'people/'

 function getInfo (error, data){

    if(data.results){

      showPeopleList (data.results)
     }

    if (data.next){

      getData(data.next, getInfo)
    }
  

    /* else {

      console.log('Error: '+ error)
    } */

 }


 function showPeopleList (results){
  
  var peopleList

  for (var i = 0; i < results.length; i++){

peopleList = results[i]

console.log('hola')

   
}

 }

  

})