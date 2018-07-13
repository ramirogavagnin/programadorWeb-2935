$(document).ready(function(){

console.log('init desafío 14')

var deleteButtonNode = $('#deleteButton')

deleteButtonNode.click(removeElementWithAnimation)

function removeElementWithAnimation(){

    var tableRoadNode = $('#1')

    tableRoadNode.hide(400, function(){

        tableRoadNode.remove()

    })

}

})