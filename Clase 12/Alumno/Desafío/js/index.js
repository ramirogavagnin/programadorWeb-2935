console.log('Desafío clase 12')

var emailInputNode = $('#email')

emailInputNode.blur(validateEmailField)

function validateEmailField (event){

    var inputNode = $(this)

    var value = inputNode.val()


if(!value || 
    value.indexOf('@') === -1 || 
    value.indexOf('.') === -1 ||
value.length <= 9 ){

    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')
}
else {
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')

}
    

}