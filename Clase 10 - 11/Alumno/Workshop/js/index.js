console.log('workshop')

var LS_KEY = 'studentsList'

// Carga incial de la app
var localList = getLocalList(LS_KEY)

var mainListNode = document.getElementById('mainList')

var newStudentsList = []

var localStudent

var newStudent

for (var i = 0; i < localList.length; i++) {
  localStudent = localList[i]
  newStudent = new Student(
    localStudent.firstName,
    localStudent.lastName,
    localStudent.dni,
    localStudent.email
  )
  newStudentsList.push(newStudent)

  var liNode = createStudentNode(newStudent)

  mainListNode.appendChild(liNode)
}

// Levantar nombre y validarlo

// Traigo el nodo
var firstNameInputNode = document.getElementById('firstName')

// Le agrego el evento de perdida de foco
firstNameInputNode.onblur = validateEmptyField

var lastNameInputNode = document.getElementById('lastName')

lastNameInputNode.onblur = validateEmptyField

// Función que valida si el campo esta vacío o no

function validateEmptyField(event) {

  var inputNode = event.target

  if (!inputNode.value) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }

  validateButton()
}

// Levantar el DNI

var dniInputNode = document.getElementById('dni')

dniInputNode.onblur = validateDniField

function validateDniField(event) {

  var inputNode = event.target

  var parsedValue = parseInt(inputNode.value)


  if (

    !inputNode.value ||
    isNaN(parsedValue) ||
    parsedValue <= 0 ||
    searchStudentIndexByDni(inputNode.value, newStudentsList) !== -1
  ) {
    // Caso incorrecto
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    // Caso correcto
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
  validateButton()

}

// Función que valida si habilitar o no el botón de agregar

var addStudentButtonNode = document.getElementById('addStudentButton')

addStudentButtonNode.disabled = true

function validateButton() {
  var isValidInputNodes = document.getElementsByClassName('is-valid')

  if (isValidInputNodes.length === 4) {
    addStudentButtonNode.disabled = false
  } else {
    addStudentButtonNode.disabled = true
  }
}


// Función que agrega estudiante

addStudentButtonNode.onclick = addStudent

function addStudent(event) {


  var firstNameToLowerCase = firstNameInputNode.value.toLowerCase()

  var lastNameToLowerCase = lastNameInputNode.value.toLowerCase()

  var nameCapitalize = function (nameOrLastName) {
    if (nameOrLastName) {

      return nameOrLastName[0].toUpperCase() + nameOrLastName.slice(1)
    }

  }

  var firstName = nameCapitalize(firstNameToLowerCase)

  var lastName = nameCapitalize(lastNameToLowerCase)

  var dni = dniInputNode.value

  var email = emailInputNode.value

  var newStudent = new Student(firstName, lastName, dni, email)

  newStudentsList.push(newStudent)

  var liNode = createStudentNode(newStudent)

  mainListNode.appendChild(liNode)

  setLocalList(LS_KEY, newStudentsList)

  // Limpieza del formulario
  firstNameInputNode.value = ''
  lastNameInputNode.value = ''
  dniInputNode.value = ''
  emailInputNode.value = ''

  firstNameInputNode.classList.remove('is-valid')
  lastNameInputNode.classList.remove('is-valid')
  dniInputNode.classList.remove('is-valid')
  emailInputNode.classList.remove('is-valid')
  

  addStudentButtonNode.disabled = true
  console.log(newStudentsList)
}

// Función que busqued un dni

function searchStudentIndexByDni(dni, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.dni === dni) {
      index = i
      break
    }
  }
  return index
}


// Baja estudiante



var deleteStudentInputNode = document.getElementById('deleteDni')

deleteStudentInputNode.onblur = validateDeleteInputByDni

var deleteStudentButtonNode = document.getElementById('deleteStudentButton')

deleteStudentButtonNode.disabled = true

// Función que valida el dni y lo busca en la lista, si lo encuentra habilita el botón Borrar

function validateDeleteInputByDni(event) {

  var inputNode = event.target

  var parsedValue = parseInt(inputNode.value, 10)

  if (

    !inputNode.value ||
    isNaN(parsedValue) ||
    parsedValue <= 0 ||
    searchStudentIndexByDni(inputNode.value, newStudentsList) === -1
  ) {
    // Caso incorrecto
  
    inputNode.classList.add('is-invalid')
    deleteStudentButtonNode.disabled = true
  } else {
    // Caso correcto
    inputNode.classList.remove('is-invalid')
    deleteStudentButtonNode.disabled = false

  }
}

// Función que elimina un estudiante

deleteStudentButtonNode.onclick = deleteStudentNodeByDni

function deleteStudentNodeByDni(event) {

  var nodeId = deleteStudentInputNode.value

  var nodeToDelete = document.getElementById(nodeId)



  for (var i = 0; i < newStudentsList.length; i++) {
    var student = newStudentsList[i]
    if (student.dni === nodeId) {
      var index = i

      break
    }

  }

  newStudentsList.splice(index, 1)

  mainListNode.removeChild(nodeToDelete)

  setLocalList(LS_KEY, newStudentsList)

  // Limpieza del formulario

  deleteStudentInputNode.value = ''


  deleteStudentButtonNode.disabled = true


}


// Función desafío clase 09 que me valida el email ;D

var emailInputNode = document.getElementById('email')

emailInputNode.onblur = validateInputEmail


function validateInputEmail(event){

var inputNode = event.target


if (!inputNode.value || 
  inputNode.value.indexOf('@') === -1 || 
  inputNode.value.indexOf('.') === -1) 
  {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')

  } else{  
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
      }  

      validateButton()

    }


// Levanto el nodo de búsqueda

 var searchInputNode = document.getElementById('searchText')

 var searchInputButton = document.getElementById('searchStudentButton')

 searchInputButton.onclick = searchStudentByNameOrLastName


 var searchListNode = document.getElementById('searchList')

 

 function searchStudentByNameOrLastName (event) {


var index =  searchStudentIndexByText (searchInputNode.value, newStudentsList)

searchListNode.innerHTML = ''

if (index !== -1) {
var student = newStudentsList [index]

var liNode = createStudentNode(student)

searchListNode.appendChild(liNode) 
}


 }





 // Función desafío 04 que busca por coincidencia exacta

 function searchStudentIndexByText (nameOrLastName, studentsList) {
	var index = -1
	for (var i = 0; i < studentsList.length; i++) {
	  var student = studentsList[i]
	  if (
      includesText (nameOrLastName, student.firstName) ||
      includesText (nameOrLastName, student.lastName)
	  ) {
		index = i
		break
	  }
	}
	return index
  }

  

  
 // Función desafío 06 Busca por concidencia por nombre o apellido
 
 function includesText (text, baseText) {
    // Valido que ambos parámetros sean string
    if (typeof text === 'string' && typeof baseText === 'string') {
      // Verifico si el primer parámetro se encuentra dentro del segundo
      var textUpperCase = text.toUpperCase()
      var baseTextUpperCase = baseText.toUpperCase()
      if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }


// Funcion desafío clase 08

/**
 * Función que devuelve nodos li
 * @param { Student } newStudent
 * @returns Node
 */
function createStudentNode(newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.getId()

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    newStudent.getFullName() +
    '</h1><h3>DNI:' +
    newStudent.dni +
    '</h3><p>E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}

// Función desafío clase 05

// Función constructora

function Student(firstName, lastName, dni, email) {
  // Propiedades privadas
  var id = dni

  // Propiedades públicas
  this.firstName = firstName

  if (lastName) {
    this.lastName = lastName
  }

  this.dni = dni

  if (email) {
    this.email = email
  } else {
    this.email = ''
  }

  // Métodos públicos
  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    return (this.firstName || '') + ' ' + (this.lastName || '')
  }
}




// ===== Función desafío clase 07 ======

// Función que busca en el localStorage a partir de una key que se le pasa como parámetro
// Se verifica que la key sea del tipo string, y si existe nos devuelve la lista parseada
// sino nos devuelve un array vacío.

function getLocalList(key) {

  if (typeof key === 'string') {

    var localList = localStorage.getItem(key)

    if (localList) {

      var parsedList = JSON.parse(localList)
      return parsedList
    } else {

      return []
    }
  }
}



function setLocalList(key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}
