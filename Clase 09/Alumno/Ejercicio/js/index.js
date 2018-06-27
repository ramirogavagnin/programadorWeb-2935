console.log('ej 09')

var inputNameNode = document.getElementById('firstName')

inputNameNode.onblur = validateInputName


function validateInputName(event){

var node = event.target

if (node.value && node.value.length > 0){

    node.classList.remove('is-invalid')
    node.classList.add('is-valid')
  }
else {
    
        node.classList.remove('is-valid')
        node.classList.add('is-invalid')
      }  
}