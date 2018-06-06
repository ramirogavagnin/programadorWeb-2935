console.log('init app')



var daysOfTheWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
  ]
  
  var day

  for (var i = 0; i < daysOfTheWeek.length; i ++) {
   var day = daysOfTheWeek[i]

    switch(day) {

        case 'Lunes':
        case 'Martes':
        case 'Miércoles':
        case 'Miercoles':
        case 'Jueves':
        case 'Viernes':

        
        console.log('Ingresaste un día hábil')
        
        break
        
        case 'Sábado':
        case 'Sabado':
        case 'Domingo':
    
        
        console.log('Ingresaste un día correspondiente al fin de semana')
        
        break
        
        default: console.log('Ingresaste un día inválido')
        }

}