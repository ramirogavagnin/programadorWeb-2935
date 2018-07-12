$(document).ready(function () {

    console.log('init desafío 13')


    // Función que valida email

    var emailInputNode = $('#email')

    emailInputNode.one('blur', validateEmailField)

    function validateEmailField(event) {

        var inputNode = $(this)

        var value = inputNode.val()

        inputNode.next().remove()

        var errorText = ''

        if (!value) {
            errorText = 'El campo está vacío'
        } else {
            if (value.indexOf('@') === -1) {
                errorText = 'Falta el arroba (@) '
            }
            if (value.indexOf('.') === -1) {
                errorText = errorText + 'Falta el punto (.)'
            }
        }

        if (errorText) {
            var parentNode = inputNode.parent()
            parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')

            inputNode.removeClass('is-valid')
            inputNode.addClass('is-invalid')
        } else {
            inputNode.removeClass('is-invalid')
            inputNode.addClass('is-valid')
        }

        if (event.type === 'blur') {
            inputNode.on('input', validateEmailField)
        }
        validateButton()
    }




    // Función que valida el nombre y el textArea



    var firstNameInputNode = $('#firstName')

    firstNameInputNode.one('blur', validateNameAndTextField)

    var textAreaInputNode = $('#comments')

    textAreaInputNode.one('blur', validateNameAndTextField)

    function validateNameAndTextField(event) {

        var inputNode = $(this)

        var value = inputNode.val()

        inputNode.next().remove()

        var errorText = ''

        if (!value) {
            errorText = 'El campo está vacío'
        }

        if (errorText) {
            var parentNode = inputNode.parent()
            parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')

            inputNode.removeClass('is-valid')
            inputNode.addClass('is-invalid')
        } else {
            inputNode.removeClass('is-invalid')
            inputNode.addClass('is-valid')
        }

        if (event.type === 'blur') {
            inputNode.on('input', validateNameAndTextField)
        }

        validateButton()
    }


// Función que valida el botón

    $('#submitButton').attr('disabled', true)


    function validateButton() {

        if (firstNameInputNode.hasClass('is-valid') &&
            emailInputNode.hasClass('is-valid') &&
            textAreaInputNode.hasClass('is-valid')
        ) {
            $('#submitButton').attr('disabled', false)

        } else {

            $('#submitButton').attr('disabled', true)
        }

    }




})