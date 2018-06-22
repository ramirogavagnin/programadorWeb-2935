console.log('desafío 07')


var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']


 function saveLocalList (key, array){

    if (typeof key === 'string' &&  Array.isArray(array)){

        var stringifyStudents = JSON.stringify(array)
        localStorage.setItem(key, stringifyStudents)
    }

}

saveLocalList ('list', studentsList)



function getLocalList(key){

    var localList = localStorage.getItem(key)



    if(localList === null) {

        var array = []

        return array
    }

}

var studentsList = getLocalList('list')



console.log(studentsList)


