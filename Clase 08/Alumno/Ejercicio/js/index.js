console.log('ej 08')

var texts = ['Ed', 'Edd', 'Eddy' ]

var mainListNode = document.getElementById('mainList')

mainListNode.innerHTML = ''

var liNode

for (i = 0; i < texts.length; i ++){

    liNode = document.createElement('li')
    liNode.className = 'list-group-item'
    liNode.innerHTML = texts[i]
   /*  liNode.id = dni */
    mainListNode.appendChild(liNode)

}