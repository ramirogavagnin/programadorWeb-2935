console.log('init desafío clase 05')


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

  function StudentsTemplateFuntion (firstName, lastName, dni, email) {

var id = dni

this.firstName = firstName
this.lastName = lastName
this.dni = dni
this.email = email 

this.getId = function(){

    var id = dni

    return id

}

this.getFullName = function(){

    var fullName = this.firstName + ' ' + this.lastName

    return fullName

}
  
}


var student

var newStudents = []

for (i = 0; i < students.length; i++){
  
  var student = new StudentsTemplateFuntion (students[i].firstName, students[i].lastName, students[i].dni, students[i].email)
  newStudents.push(student)
  
}


console.log (newStudents)

console.log (newStudents[2].getFullName())
 

console.log (newStudents[2].getId())
