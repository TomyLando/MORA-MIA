
// Armar un sistema donde el usuario
//      Tenga acceso a dos funciones diferentes
//          Calcular promedio de alumnos
//          Obtener la tabla de multiplicar de un número x
//      Cuando el usuario lo desee, pueda salir del sistema


// Un sistema donde el usuario ELIGE salir es lo que se llama un sistema perpetuo
// Es decir que vamos a obligar al usuario a que este dentro de un bucle de forma
// indefinida hasta que el decida salir

// Lo ideal es que entremos al bucle DE UNA
while (true) {

    // Le preguntamos al usuario que quiere hacer
    //      Calcular el promedio de alumnos
    //      Obtener la tabla de multiplicar de un numero
    
    if (confirm("¿desea hacer una multiplicacion?")) {

        let numero_a_multiplicar = Number(prompt("escriba el numero que quiera multiplicar"))

        if (isNaN(numero_a_multiplicar)) {

            alert("ingresa el numero en digitos y no en letras porfavor")
            continue
        }

        else {

            for (let i = 0; i <= 10; i++) {
                console.log(numero_a_multiplicar, "x", i, "=", (numero_a_multiplicar * i))
                console.log("---------------------------------")
            }

        }
    }
    else {
        if (confirm("¿desea hacer el promedio de alumnos?")) {
            let aulas = Number(prompt("ingrese la cantidad de aulas que hay"))
            let suma_alumnos = 0
            if (isNaN(aulas)) {
                alert("ingresa el numero endigitos y no en letras porfavor")
                continue
            }
            else {
                for (let i = 1; i <= aulas; i++) {
                    let alumnos = Number(prompt("ingrese la cantidad de alumnos que hay en el aula ", i))
                    suma_alumnos = suma_alumnos + alumnos
    
                }
                let promedio_alumnos = suma_alumnos / aulas
                console.log("la cantidad de alumnos que hay es de ", suma_alumnos, " y la cantidad de aulas es de ", aulas, " , entonces el promedio es de un total de ", promedio_alumnos)
                console.log("----------------------------------")
            }
        }
    }



    // Debemos preguntarle al usuario si quiere salir (siempre siempre de alguna forma necesitamos salir del bucle)
    let salir = confirm('Desea salir del sistema?')

    // Debemos condicionar la respuesta del usuario
    // El usuario quiere salir? [true/false]
    if (salir) {
        console.log("usted a salido con exito del programa")
        break
    }

    // Como no podemos cambiar la condicion del while, que sentencia usarias para salir del bucle?

}