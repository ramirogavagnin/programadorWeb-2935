import {
  getLocalList,
  
} from '../utils/localStorage'

import {
  buttonEventClick
} from '../utils/buttonEventListener'


import {
  pushTableContent
} from '../utils/tables'



function localStorageController() {

  var peopleList = getLocalList('peopleList')

  pushTableContent(peopleList)

  $('button').click(function () {
    var buttonNode = $(this)
  
    buttonEventClick(null, buttonNode)
      })

}

export default localStorageController
