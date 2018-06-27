console.log('desafío 09')

var inputEmailNode = document.getElementById('email')

inputEmailNode.onblur = validateInputEmail


function validateInputEmail(event){

var node = event.target


if (node.value && node.value.indexOf('@') > 0 && node.value.indexOf('.') > 0) {

    node.classList.remove('is-invalid')
    node.classList.add('is-valid')
  
}
  else {
    
        node.classList.remove('is-valid')
        node.classList.add('is-invalid')
      }  

    }

