import {
  genderTranslate,
  eyeColorTranslate
} from '../utils/translates'


function pushTableContentFromApi(array){

    var tableBody = $('#tableBody')

    for (var i = 0; i < array.length; i++) {

        var person = array[i]
  
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
       
      }


}


function pushTableContentFromLocalStorage(array){

  var tableBody = $('#tableBody')

  for (var i = 0; i < array.length; i++) {

      var person = array[i]

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
     
    }


}

export {pushTableContentFromApi , pushTableContentFromLocalStorage}