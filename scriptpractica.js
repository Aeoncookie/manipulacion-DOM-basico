// h1 {color: red}
// .parrafito {...}
//#pid {...}
//De la manera en la que llamas en css, se usa de la misma forma en js


const h1 = document.querySelector('h1');//es un funcion qeu selecciona el elemento html desde js.
const p = document.querySelector('p'); //esta funcion busca al primer elemento que se encuentre, en caso de ser querySelectorAll seleccionara todos los "p" en este caso, indistintamente si tienen uan etiqueta o clase.
const parrafito = document.querySelector('parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
 h1,
 p,
 parrafito,
 pid,
 input,
});

//cada propiedad tiene modificadores que al verlo en la consola podemos ver que interaccion tiene el usuario con la pagina. 

h1.innerHTML = 'Patito <br> feo'; //interpreta lo que esta escrito en codigo html
h1.innerText = 'Patito <br> feo';//interpreta lo que esta escrito en solo texto
//console.log(h1.getAttribute('class')); //es la forma en la que se llama a una clase y se muesta en la consola
//h1.setAttribute('class', 'rojo');//sirve para modificar los atributos de nuestro html.

h1.classList.add('rojo');// el .add añade una clase al atributo
h1.classList.remove('verde');//el . remover remueve o quita la clase
// h1.classlist.contains('verde'); retorna true o false dependiendo de que si la clase tiene el atributo deseado

input.value = "456" //modifica el input desde js

const img = document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/7741615/pexels-photo-7741615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

console.log(img);

pid.append(img); //hasta aca creamos un imagen, en donde se va  a meter en un contenedor. 


//------------------------------------------------------------

const h1 = document.querySelector('h1');//es un funcion qeu selecciona el elemento html desde js.
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('btncalcular');
const pResult = document.querySelector('#resultado');

btn.addEventListener('click',buttonOnclick)// este comando nos sirve para escuchar lo que sucede con el html segun lo que haga el usuario
//si llamamos a una funcion no hace falta el parentesis (accion a escuchar, funcion a llamar)


function buttonOnclick () { 
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value); //el parseInt es un comando que convierte la variable que entra en tipo int
    pResult.innerText = "Resultado " + sumaInputs;
}
