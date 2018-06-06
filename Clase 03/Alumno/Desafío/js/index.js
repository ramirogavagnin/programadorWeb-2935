console.log('init de app')

var operationType = prompt('Ingrese la operación a relizar: suma, resta, multiplicación o división.')

var value1 = prompt('Ingrese el primer valor.')

var value2 = prompt('Ingrese el segundo valor.')

var persedValue1 = parseFloat(value1, 10)

var persedValue2 = parseFloat(value2, 10)

var resultSum = persedValue1 + persedValue2

var resultRes = persedValue1 - persedValue2

var resultMult = persedValue1 * persedValue2

var resultDiv = persedValue1 / persedValue2



switch (operationType){

case 'Suma':
case 'suma':

console.log('El resultado de la suma es ' + resultSum)

break

case 'Resta':
case 'resta':

console.log('El resultado de la resta es ' + resultRes)

break

case 'Multiplicación':
case 'multiplicación':
case 'Multiplicacion':
case 'multiplicacion':
console.log('El resultado de la multiplicación es ' + resultMult)

break

case 'División':
case 'división':
case 'Division':
case 'division':

while (persedValue2 <=0) {

    prompt('Ingrese el segundo valor y que sea mayor que 0.')
    break
}

console.log('El resultado de la división es ' + resultDiv)

break
default:
 prompt('La operación elegida no es correcta, vuelva a intentarlo!')


break
}


/* 
while (operationType !== ('Suma')||operationType !== ('suma')||operationType !== ('Resta')||operationType !== ('resta')||operationType !== ('Multiplicación')||operationType !== ('multiplicación')||operationType !== ('Multiplicacion')||operationType !== ('multiplicacion')||operationType !== ('División')||operationType !== ('división')||operationType !== ('Division')||operationType !== ('division'))
   { prompt('La operación elegida no es correcta, vuelva a intentarlo!')

} */