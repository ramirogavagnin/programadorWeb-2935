console.log('Desafío 08')


var student = { 
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
}



function Student(firstName, lastName, dni, email) {

    var id = dni

    this.firstName = firstName
    this.lastName = lastName
    this.dni = dni
    this.email = email

    this.getId = function () {

        return id
    }

    this.getFullName = function () {

        return (this.firstName || '') + ' ' + (this.lastName || '')
    }

}



var newStudent = new Student(student.firstName, student.lastName, student.dni, student.email)




console.log(newStudent)


function createStudentNode(newStudent){


var mainListNode = document.getElementById('mainList')

mainListNode.innerHTML = ''

var liNode

    liNode = document.createElement('li')
    liNode.className = 'list-group-item'
    liNode.id = student.dni
    liNode.innerHTML = '<h1>' +
     newStudent.getFullName() + 
     '</h1>' + 
     '<h3>' + 
     newStudent.dni +
      '</h3>' + 
      '<p>' +
       newStudent.email 
       + '</p>'
   
       return liNode

}




var studentNode = createStudentNode(newStudent)




