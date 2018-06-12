console.log('desafío clase 04');

var studentsList = [
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

function search (arrayStudents) {
    
 
	var nameSearch = prompt('Ingrese el nombre.');


	for (var i = 0; i < arrayStudents.length; i++) {
       
if (arrayStudents[i].firstName === nameSearch){

	var messageOfSearch = 'Te encontre en la posición ' + [i]
	break

}

else {

	var messageOfSearch = 'No te encontre :('
}


    }
	 
	return messageOfSearch

}


var studentSearch = search (studentsList);

console.log(studentSearch);


