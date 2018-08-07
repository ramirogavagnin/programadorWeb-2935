import {
    getLocalList,
    setLocalList
  } from '../utils/localStorage'
  
  import {
    searchPeopleIndexByUrl
  } from '../utils/search'


  // Función que escucha y evalua el evento click sobre un button y determinando
  // en que pantalla se encuentra nuestra app guarda y agrega, o elimina personajes
  


function buttonEventClick(results, buttonNode) {

        var peopleList = getLocalList('peopleList')

        var rowNode = buttonNode.parent().parent()

        var id = rowNode.attr('id')

        var index = searchPeopleIndexByUrl(id, peopleList)

        var location = window.location.hash

if (location === '#/people') {

 switch (index) {
        case -1:

            for (var i = 0; i < results.length; i++) {

                var person = results[i]

                if (person.url === id) {

                    peopleList.push(person)

                    setLocalList('peopleList', peopleList)

                    rowNode.remove()

                }
           
            }
            break

        default:
            rowNode.remove()
            break

    }

} else if (location === '#/local-storage'){
   
    if (index !== -1) {
        peopleList.splice(index, 1)
  
        setLocalList('peopleList', peopleList)
  
        rowNode.hide(200, function(){
          rowNode.remove()
      })
      }

}

}

  



export {  buttonEventClick }



/* if (buttonNode.hasClass('.btn-success')) {

   

if (buttonNode.hasClass('.btn-danger')) {

    switch (index) {
        case -1:
            peopleList.splice(index, 1)

            setLocalList('peopleList', peopleList)

            rowNode.remove()
            break
    }
}

 */