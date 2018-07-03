console.log('desafío 09')

var inputEmailNode = document.getElementById('email')

inputEmailNode.onblur = validateInputEmail


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

    }

