console.log('Desafío 08')


var student = { 
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
}



function StudentsCreateFuntion(firstName, lastName, dni, email) {

    var id = dni

    this.firstName = firstName
    this.lastName = lastName
    this.dni = dni
    this.email = email

    this.getId = function () {


        var id = dni

        return id

    }

    this.getFullName = function () {

        return (this.firstName || '') + ' ' + (this.lastName || '')

    }

}



var newStudentObject = new StudentsCreateFuntion(student.firstName, student.lastName, student.dni, student.email)

var newStudent = newStudentObject


console.log(newStudent)


function createStudentNode(student){


var mainListNode = document.getElementById('mainList')

mainListNode.innerHTML = ''

var liNode

    liNode = document.createElement('li')
    liNode.className = 'list-group-item'
    liNode.id = student.dni
    liNode.innerHTML = '<h1>' + student.firstName + '' + student.lastName + '</h1>' + '<h3>' + student.dni + '</h3>' + '<p>' + student.email + '</p>'
    mainListNode.appendChild(liNode)

}




var studentNode = createStudentNode(newStudent)




