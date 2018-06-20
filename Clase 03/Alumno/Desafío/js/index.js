console.log('init de app')

var operationType = prompt('Ingrese la operación a relizar: suma, resta, multiplicación o división.')

var value1 = prompt('Ingrese el primer valor.')

var persedValue1 = parseFloat(value1, 10)

do {
    var value2 = prompt('Ingrese el segundo valor.')
    var persedValue2 = parseFloat(value2, 10)
}
while (persedValue2 === 0) 




switch (operationType){

case 'Suma':prompt('La operación elegida no es correcta, vuelva a intentarlo!')
case 'suma':

var resultSum = persedValue1 + persedValue2

console.log('El resultado de la suma es ' + resultSum)

break

case 'Resta':
case 'resta':

var resultRes = persedValue1 - persedValue2

console.log('El resultado de la resta es ' + resultRes)

break

case 'Multiplicación':
case 'multiplicación':
case 'Multiplicacion':
case 'multiplicacion':
console.log('El resultado de la multiplicación es ' + resultMult)

var resultMult = persedValue1 * persedValue2

break

case 'División':
case 'división':
case 'Division':
case 'division':

var resultDiv = persedValue1 / persedValue2

console.log('El resultado de la división es ' + resultDiv)

break
default:
 
console.log  ('La operación elegida no es correcta, vuelva a intentarlo! (Ctrl+R) ;)')

break
}


