//String
//let cadena: string ="Shaila"; //si dejaba esta línea me cascaba
//number
var numero = 12;
//Boleano
var verdadero_falso = true;
//Any --> permite meter cualquier valor
var cualquiera = "hola";
//Arrays 
var lenguajes = ["PHP", "PEPITO", "MANOLITO"];
var years = [12, 13, 15];
//Otra posibilidad
var cadenita = "Shaila";
cadenita = 12;
var cadena = "Elfo";
console.log(cadenita, years, cadena, numero, verdadero_falso, cualquiera, lenguajes);
//Diferencia entre var y let, solo es el alcance --> nivel global
//let vs var
var numero1 = 10;
var numero2 = 13;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    //Aqui mostramos 44,55
    console.log(numero1_1, numero2);
}
//Aqui mostramos 10,55
console.log(numero1, numero2);
