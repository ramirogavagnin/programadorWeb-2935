console.log('Init de la app')


var dayAsked = prompt('Ingresa un día de la semana pooorrr favor')

switch(dayAsked){

case 'Lunes':
case 'lunes':
case 'Martes':
case 'martes':
case 'Miércoles':
case 'miércoles':
case 'Miercoles':
case 'miercoles':
case 'Jueves':
case 'jueves':
case 'Viernes':
case 'viernes':

console.log('Ingresaste un día hábil')

break

case 'Sábado':
case 'sábado':
case 'Sabado':
case 'sabado':
case 'Domingo':
case 'domingo':

console.log('Ingresaste un día correspondiente al fin de semana')

break

default: console.log('Ingresaste un día inválido')
}

