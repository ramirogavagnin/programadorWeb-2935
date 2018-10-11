import {
  getData
} from '../utils/ajax'

import {
  pushTableContent
} from '../utils/tables'

import {
  buttonEventClick
} from '../utils/buttonEventListener'


function peopleController() {

  var location = window.location.hash

  if (location === '#/people'){

    $('body').css("background-image", "url(../img/people.jpg)");  
  }

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

    pushTableContent(results)

    $('button').click(function () {

      var buttonNode = $(this)

      buttonEventClick(results, buttonNode)
    })

  }




}


export default peopleController