

        $(document).ready(function () {

            console.log('init ej 13')
        
            var counterNode = $('#counter')
        
            var counter = 0
        
            $(document).keydown(keyCounter)
        
            function keyCounter(event) {
        
                var keyCode = event.which
        
               
               
                 switch(keyCode){
         case 13:
        
        counter = 0
        break
                case  38: 
        
              counter++
        break
        case 40:
        
       counter--
        break
       
               
            }
        
        counterNode.html(counter)
        
         }
        })
    





