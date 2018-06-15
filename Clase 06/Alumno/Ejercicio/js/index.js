console.log('init ej 06')



var numbers = [1,2,3,4,5]

var students = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987,
      email: 'juan@gmail.com'
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989,
      email: 'ana@gmail.com'
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956,
      email: 'pedro@gmail.com'
    }
  ]

function deleteElement (index, elemnts) {

    if (Array.isArray(elemnts)) {

        var elements2 = elemnts.slice()

elements2.splice(index, 1)

return elements2

} else {

    return elemnts
}

}



var result = deleteElement(1, numbers) 

var result2 = deleteElement(1, students)

console.log(result)

console.log (result2)

console.log(students)


