import {
  genderTranslate,
  eyeColorTranslate
} from '../utils/translates'

// Función que pushea el contenido de nuestra tabla según la pantalla correspondiente
// en la pantalla People recibe como parametro un array con los resultados que nos devuelve la API
// en la pantalla Local-storage recibe como otro array con lo que este guardado en el LocalStorage

function pushTableContent(array) {

  var tableBody = $('#tableBody')


  for (var i = 0; i < array.length; i++) {

    var person = array[i]

    var location = window.location.hash

    switch (location) {

      case '#/people':
        tableBody.append(
          '<tr id="' +
          person.url +
          '"><th scope="row" >' +
          (i + 1) +
          '</th><td>' +
          person.name +
          '</td><td>' +
          genderTranslate(person.gender) +
          '</td><td>' +
          person.height +
          ' cm</td><td>' +
          person.mass +
          ' kg</td><td>' +
          eyeColorTranslate(person.eye_color) +
          '</td><td><button type="button" class="btn btn-success">Guardar</button></td></tr>'
        )
        break

      case '#/local-storage':

        tableBody.append(
          '<tr id="' +
          person.url +
          '"><th scope="row" >' +
          (i + 1) +
          '</th><td>' +
          person.name +
          '</td><td>' +
          genderTranslate(person.gender) +
          '</td><td>' +
          person.height +
          ' cm</td><td>' +
          person.mass +
          ' kg</td><td>' +
          eyeColorTranslate(person.eye_color) +
          '</td><td><button type="button" class="btn btn-danger">Eliminar</button></td></tr>'
        )

        break


    }

  }


}




export {
  pushTableContent
}