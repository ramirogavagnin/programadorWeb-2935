console.log('ej clase 12')

var squaresNodes = $('.square')

squaresNodes.click(addClass)

var player = true

function addClass(event) {

    var squareNode = $(this)

    if(!(squareNode.hasClass('cross') || squareNode.hasClass('circle'))) { 

    if (player) {

        squareNode.addClass('cross')
        player = false
    } else {

        squareNode.addClass('circle')
        player = true
    }
    }
}