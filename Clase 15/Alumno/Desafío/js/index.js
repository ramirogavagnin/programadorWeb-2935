$(document).ready(function(){

console.log('init desafío 15')

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
  
getData(urlBase, getInfo)

 function getInfo (error, data){

    if(data.results){
      showPeopleList (data.results)
     }
    if (data.next){
      getData(data.next, getInfo)
    }
 }


 function showPeopleList (results){
  for (var i = 0; i < results.length; i++){
console.log(results[i].name)   
}
 }


})