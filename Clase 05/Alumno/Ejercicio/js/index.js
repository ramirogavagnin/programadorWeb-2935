console.log('ej clase 05')


var cars = [
    {
      model:'Suran',
      brand: 'volkswagen',
      year: 2015
    },
    {
      model:`Audi TT`,
      brand:'Audi',
      year: 2017
    },
    {
      model:`Gran turismo`,
      brand:'Maserati',
      year: 2018
    }
  ]

function Car (model, brand, year){

    var id = Math.random()

    this.model = model

    this.brand = brand

    this.year = year



    this.getCarName = function (){
var carName = 'Modelo: ' + model + ' Marca: ' + brand + ' Año: ' + year
return carName
        
    }
  
}



var car

var newCars = []

for (i = 0; i < cars.length; i++){
  
  var car = new Car (cars[i].model, cars[i].brand, cars[i].year)
  newCars.push(car)
  
}

console.log(cars)

console.log(newCars)

console.log(newCars[i].getCarName())

