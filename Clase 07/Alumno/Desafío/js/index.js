console.log('desafío 07')

// Función que busca en el localStorage a partir de una key que se le pasa como parámetro
// Se verifica que la key sea del tipo string, y si existe nos devuelve la lista parseada
// sino nos devuelve un array vacío.

function getLocalList(key) {

    if (typeof key === 'string') {

        var localList = localStorage.getItem(key)

        if (localList) {

            var parsedLocaList = JSON.parse(localList)
            return parsedLocalList
        } else {

            return []
        }
    }
}




var studentsList = getLocalList('list')


console.log(studentsList)