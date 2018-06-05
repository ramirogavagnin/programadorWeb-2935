console.log('init')

var gender = prompt('Ingrese su género: Male, Female o Undefined')

var age = prompt('Ingrese su edad')

var parsedAge = parseFloat(age, 10)

var maleMayor = ('Sr. usted es mayor de edad, puede ingresar.')

var maleMinor = ('Sr. usted es menor de edad, no puede ingresar.')

var femaleMayor = ('Sra. usted es mayor de edad, puede ingresar.')

var femaleMinor = ('Sra. usted es menor de edad, no puede ingresar.')

var undefinedMayor = ('Sx. usted es mayor de edad, puede ingresar.')

var undefinedMinor = ('Sx. usted es menor de edad, no puede ingresar.')

/* var incorrectGender = ('El género ingresado no es válido. Inténtalo de nuevo!') */



if (gender === ('Male') || gender === ('male')) {
    if (age >= 18) {
        console.log(maleMayor)
    }
    else (gender === ('Male') || gender === ('male')) ;{
        if (age < 18){ 
        console.log(maleMinor)
    }
 }
}

if (gender === ('Female') || gender === ('female')) {
    if (age >= 18) {
        console.log(femaleMayor)
    }
    else (gender === ('Female') || gender === ('female')); {
        if  (age < 18) { 
        console.log(femaleMinor)
    }
}
}

if (gender === ('Undefined') || gender === ('undefined')) {
    if (age >= 18) {
        console.log(undefinedMayor)
    }
    else (gender === ('Male') || gender === ('male')); {
        if (age < 18){ 
        console.log(undefinedMinor)
    }
    }

}


/* --------- */


/* if (gender !== ('Male') || gender !== ('male') || gender !== ('Female') || gender !== ('female') || gender !== ('Undefined') || gender === ('undefined')) {
console.log(incorrectGender)


} */