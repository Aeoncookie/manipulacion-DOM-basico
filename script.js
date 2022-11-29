const h1 = document.querySelector('h1');//es un funcion qeu selecciona el elemento html desde js.
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#resultado');

//form.addEventListener ('submit', sumarInputsValues);  // este comando nos sirve para escuchar lo que sucede con el html segun lo que haga el usuario
//si llamamos a una funcion no hace falta el parentesis (accion a escuchar, funcion a llamar)


//function sumarInputsValues (event) { 
//    console.log({event})
//    event.preventDefault();
//    const sumaInputs = input1.value + input2.value; //el parseInt es un comando que convierte la variable que entra en tipo int
//    pResult.innerText = "Resultado " + sumaInputs;
//}


//--------------------------------------------------------------
//Otra fforma de resolver el problema del form que se actualizaba

btn.addEventListener ('click', sumarInputsValues);  // este comando nos sirve para escuchar lo que sucede con el html segun lo que haga el usuario
//si llamamos a una funcion no hace falta el parentesis (accion a escuchar, funcion a llamar)


function sumarInputsValues (event) { 
//    console.log({event})
//    event.preventDefault();
    const sumaInputs = input1.value + input2.value; //el parseInt es un comando que convierte la variable que entra en tipo int
    pResult.innerText = "Resultado " + sumaInputs;
}
