import {
  genderTranslate,
  eyeColorTranslate
} from '../utils/translates'

import {
  getLocalList,
  setLocalList
} from '../utils/localStorage'

import {
  searchPeopleIndexByUrl
} from '../utils/search'

function peopleController() {

  console.log('Soy la pantalla People')

  getData('https://swapi.co/api/' + 'people/', getInfo)



  function getData(url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  function getInfo(error, data) {

    if (data.results) {
      setPeopleList(data.results)
    }
    if (data.next) {
      $('#seeMore').attr('disabled', false)
      $('#seeMore').one('click', function () {

        getData(data.next, getInfo)

      })
    } else {

      $('#seeMore').attr('disabled', true)
    }
  }

  
  function setPeopleList(results) {

    var tableBody = $('#tableBody')

    for (var i = 0; i < results.length; i++) {

      var person = results[i]

      tableBody.append(
        '<tr id="' +
        person.url +
        '"><th scope="row" >' +
        (i + 1) +
        '</th><td>' +
        person.name +
        '</td><td>' +
        genderTranslate(person.gender) +
        '</td><td>' +
        person.height +
        ' cm</td><td>' +
        person.mass +
        ' kg</td><td>' +
        eyeColorTranslate(person.eye_color) +
        '</td><td><button type="button" class="btn btn-success">Guardar</button></td></tr>'
      )
    }

    $('.btn-success').click(function () {
          console.log('Me apretaron')

          var peopleList = getLocalList('peopleList')

          var buttonNode = $(this)

          var rowNode = buttonNode.parent().parent()

          var id = rowNode.attr('id')

          var index = searchPeopleIndexByUrl(id, peopleList)


          switch (index) {
            case -1:

              console.log('No esta en el localStorage')

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

        
      
        

       /*  if(index !==-1){
          rowNode.remove()
        
      }else {

        console.log('No esta en el localStorage')

for (var i = 0; i < results.length; i++){
      
          var person = results[i]
        
          if(person.url===id){ 

        peopleList.push(person)

        setLocalList('peopleList', peopleList)

        rowNode.remove()
        
       } 
      }
      } */
       
     })
      
    }

   
  

}


export default peopleController