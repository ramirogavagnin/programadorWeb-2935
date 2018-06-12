console.log('init ej clase 04')

var notes = [ 7, 5, 6, 4, 3, 2, 8 ]



function averageCalculator (examResults) {

    var numbers = 0

    for (var i = 0; i < examResults.length; i++) {
        numbers = numbers + examResults[i] 
    }
    
    var result = numbers / examResults.length

    return result 
}


var resultProm = averageCalculator (notes)

console.log(resultProm)

