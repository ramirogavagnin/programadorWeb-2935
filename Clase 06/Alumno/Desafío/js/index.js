console.log('desafío 06')



function includesText(value1, value2){

if (typeof value1 === 'string' && typeof value2 === 'string') { 
    
var value1 = value1.toUpperCase()

var value2 = value2.toUpperCase()



if (value2.indexOf(value1) !== -1) {

return true

}

else {
    return false
}

}

else {
    return false
}

}



 



console.log('First Search ' + includesText('Pa', 'Patricia'))


console.log('Second Search ' + includesText('Patricia', 'Pa')) 


console.log('Third Search ' + includesText(2, 'Pa')) 