const resultado2 = document.getElementById("resultado2");
const btnEnviar2 = document.getElementById("btnEjercicio2")

var nombre;
var sueldo1;
var sueldo2;
var sueldo3;

nombre = prompt( "Ingresar nombre","");
sueldo1 = parseInt(prompt("ingresar sueldo para el 10%","")); 
sueldo2 = parseInt(prompt("ingresar sueldo para el 12%","")); 
sueldo3 = parseInt(prompt("ingresar sueldo para el 15%","")); 

resultado1= ((sueldo1) * 0.10);
resultado2= ((sueldo2) * 0.12);
resultado3= ((sueldo3) * 0.15);


btnEnviar2.onclick = function(){
    let sb = 1800;
    let descuento = sb * 0.05;
    let neto = sb - descuento;

    resultado2.innerText = neto.toFixed(2);
}

document.write("Hola " + nombre + " tu sueldo a pagar es: " + resultado1 + resultado2 + resultado3);

const resultado2 = document.getElementById("resultado3");
const btnEnviar2 = document.getElementById("btnEjercicio3")

var nombre;
var nota1;
var nota2;
var nota3;

nombre = prompt( "Ingresar nombre","");
nota1 = parseInt(prompt("ingresar nota del primer examen para el 30%","")); 
nota2 = parseInt(prompt("ingresar nota del segundo examen 30%","")); 
nota3 = parseInt(prompt("ingresar nota del tercer examen 40%","")); 

resultado1= ((nota1) * 0.3);
resultado2= ((nota2) * 0.3);
resultado3= ((nota3) * 0.4);


btnEnviar2.onclick = function(){
    let sb = 1800;
    let descuento = sb * 0.05;
    let neto = sb - descuento;

    resultado2.innerText = neto.toFixed(2);
}

document.write("Hola " + nombre + " Calificación final del curso es " + resultado1 + resultado2 + resultado3);





























