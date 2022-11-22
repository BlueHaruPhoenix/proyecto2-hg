var num1; //Numero entero
var cent;
var mil;
num1 = parseInt(prompt("ingresar cantidad de mtros","")); 

cent = ((num1)* 100);
mil = ((num1)* 1000);

//document.write("Resultado");

document.write("Hola " + num1 + "metro(s) en Centimetro: " + cent);

document.write("y " + num1 + "metro(s) en Milimetros: " + mil);






