import {
  getLocalList,
  setLocalList
} from '../utils/localStorage'

import {
  searchPeopleIndexByUrl
} from '../utils/search'

import {
  getData
} from '../utils/ajax'

import {
  pushTableContentFromApi
} from '../utils/tables'



function peopleController() {

  console.log('Soy la pantalla People')

  getData('https://swapi.co/api/' + 'people/', callBack)


  function callBack(error, data) {

    if (data.results) {
      setPeopleList(data.results)
    }
    if (data.next) {
      $('#seeMore').attr('disabled', false)
      $('#seeMore').one('click', function () {

        getData(data.next, callBack)

      })
    } else {

      $('#seeMore').attr('disabled', true)
    }
  }


  function setPeopleList(results) {

    pushTableContentFromApi(results)


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

              rowNode.hide(200, function(){
                rowNode.remove()
            })
             
            }
          }
          break

        default:
        rowNode.hide(200, function(){
          rowNode.remove()
      })
          break

      }

    })

  }




}


export default peopleController