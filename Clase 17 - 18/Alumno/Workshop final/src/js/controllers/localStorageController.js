import {
  getLocalList,
  setLocalList
} from '../utils/localStorage'


import {
  pushTableContentFromLocalStorage
} from '../utils/tables'

import {
  searchPeopleIndexByUrl
} from '../utils/search'

function localStorageController() {

  console.log('Soy el localStorage')

  var peopleList = getLocalList('peopleList')

  pushTableContentFromLocalStorage(peopleList)


  $('.btn-danger').click(function () {
    console.log('Me apretaron')
    var buttonNode = $(this)

    var rowNode = buttonNode.parent().parent()

    var id = rowNode.attr('id')

    var index = searchPeopleIndexByUrl(id, peopleList)

    if (index !== -1) {
      peopleList.splice(index, 1)

      setLocalList('peopleList', peopleList)

      rowNode.hide(200, function(){
        rowNode.remove()
    })
    }

  })
}

export default localStorageController
