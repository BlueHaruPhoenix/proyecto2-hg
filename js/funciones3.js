/*
Para conversacion en bloque
*/
//Coemntario de una sola linea
//variable
//Cadena

//programa 1 ingresar el nombre y mostrar el promedio
var nombre;
var nota1;
var nota2;
var nota3;
var resultado;
nombre = prompt( "Ingresar nombre","");
nota1 = parseInt(prompt("ingresar nota1","")); 
nota2 = parseInt(prompt("ingresar nota2"));
nota3 = parseInt(prompt("ingresar nota3"));
resultado= ((nota1+nota2+nota3)/3);
//document.write("Resultado");
document.write("Hola " + nombre + " tu promedio es: " + resultado);


//Ejercicio:
//var num1 = 10;
//var num2 = 20;
//var promedio = (num1+num2)/2;

//alert(promedio);
//console.log (nombre + "" + promedio)

//para escribir en la pagina web
//document. querySelctor("body")