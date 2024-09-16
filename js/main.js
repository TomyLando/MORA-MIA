let usuario = prompt("ingrese su nombre");
let dia = prompt("¿Como le va en su dia?")
let apellido = prompt("ingrese su apellido");
let edad = Number(prompt("ingrese su edad"));

let datos = {
    usuario,
    apellido,
    edad   
}

function objeto(){
    console.log("buenas, estos son sus datos:")
    console.log(datos.usuario);
    console.log(datos.apellido);
    console.log(datos.edad);

}

while (true) {

    let opcion = Number(prompt("ponga 1 si quiere multiplicar \nponga 2 si quiere hacer el promedio"));
    
    if (opcion == 1) {
        
        objeto()
        
        let numero = Number(prompt("¿Que numero desea multiplicar?"));

        while (isNaN(numero)) {
            alert("ingrese un numero porfavor y no se haga el chistozo")
            numero = Number(prompt("¿Que numero desea multiplicar?"));
        }

        for (let i = 1; i <= 10; i++) {

            let resultado = (numero + " x " + i + " = " + (i * numero))
            console.log(resultado)
        
        }
    }
    else if (opcion == 2) {
        objeto()
        let aulas = Number(prompt("ingrese la cantidad de aulas que hay en su colegio"));
        let suma = 0
        for (let i = 1; i <= aulas; i++) {
            let alumnos = Number(prompt("ingrese la cantidad de alumnos que hay en el aula " + i));
            suma = suma + alumnos
        }
        promedio = Math.round(suma / aulas)
        console.log("este es su promedio " + promedio)
    }
    else{
        alert("no se haga el chistoso que se donde vive❤️")
        continue
    }

    let salir = confirm('Desea salir del sistema?')

    if (salir) {
        console.log("usted a salido con exito del programa")
        break
    }

}