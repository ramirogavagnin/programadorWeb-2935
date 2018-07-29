import {
    getLocalList,
    setLocalList
  } from '../utils/localStorage'
  
  import {
    searchPeopleIndexByUrl
  } from '../utils/search'


function buttonEventClick() {


    $('button').click(function () {

        console.log('Me apretaron')

        var peopleList = getLocalList('peopleList')

        var buttonNode = $(this)

        var rowNode = buttonNode.parent().parent()

        var id = rowNode.attr('id')

        var index = searchPeopleIndexByUrl(id, peopleList)

        if (buttonNode.hasClass('.btn-success')) {

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
        }

        if (buttonNode.hasClass('.btn-danger')) {

            switch (index) {
                case -1:
                    peopleList.splice(index, 1)

                    setLocalList('peopleList', peopleList)

                    rowNode.remove()
                    break
            }
        }
    })


}

export default buttonEventClick
