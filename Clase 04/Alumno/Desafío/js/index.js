console.log('desafío clase 04');

var students = [
	{
		firstName: 'Juan',
		lastName: 'Pérez',
		dni: 45678987
	},
	{
		firstName: 'Ana',
		lastName: 'Fernandez',
		dni: 45678989
	},
	{
		firstName: 'Pedro',
		lastName: 'Mármol',
		dni: 45678956
	},
	{
		firstName: 'Pablo',
		lastName: 'Picapiedras',
		dni: 45678983
	}
];

// Función para buscar la posición de los alummnos en el array
// se le da como paramatro un texto ya capitalizado en la posición 0 y un array
// y compara por nombre o apellido de manera estrictamente igual ===


function searchStudentIndexByText (nameOrLastName, studentsList) {
	var index = -1
	for (var i = 0; i < studentsList.length; i++) {
	  var student = studentsList[i]
	  if (
		student.firstName === nameOrLastName ||
		student.lastName === nameOrLastName
	  ) {
		index = i
		break
	  }
	}
	return index
  }
  
 
  // Funcion para capitalizar la primera letra antes de inciar la busqueda
 
  function capitalize(nameOrLastName)
{
	if 
	(nameOrLastName) {

		 return nameOrLastName[0].toUpperCase() + nameOrLastName.slice(1)
	}
   
}

// Variable donde se guarda el nombre que el usuario quiera buscar
 
var text = prompt('Ingrese un nombre')

// Variable donde se guarda la posición del alumno luego de la busqueda

var index = searchStudentIndexByText(capitalize (text), students)



// Mensaje que muestra en consola si encontro al estudiante + su posición en el array
// y sino muestra que no lo pudo encontrar

  if (index !== -1) {
	console.log('Se encontró el estudiante en la posición ' + index)

  } else {
	console.log('No se pudo encontrar el estudiante')
  }
