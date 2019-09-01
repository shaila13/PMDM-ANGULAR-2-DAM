//Podemos crear un dato nosotros
type alfanumerico = string | number;

//String
//let cadena: string ="Shaila"; //si dejaba esta línea me cascaba
//number
let numero: number = 12;

//Boleano
let verdadero_falso: boolean = true;

//Any --> permite meter cualquier valor
let cualquiera: any = "hola";

//Arrays 
var lenguajes: Array<string> = ["PHP","PEPITO","MANOLITO"];

let years: number[] = [12,13,15]

//Otra posibilidad
let cadenita : string | number ="Shaila";

cadenita = 12;

let cadena: alfanumerico ="Elfo";
console.log(cadenita, years, cadena, numero, verdadero_falso, cualquiera, lenguajes);
//Diferencia entre var y let, solo es el alcance --> nivel global
//let vs var
var numero1 = 10;
var numero2 = 13;

if(numero1 == 10){
	let numero1 = 44;
	var numero2 = 55;
//Aqui mostramos 44,55
	console.log(numero1,numero2);
}
//Aqui mostramos 10,55
console.log(numero1,numero2);