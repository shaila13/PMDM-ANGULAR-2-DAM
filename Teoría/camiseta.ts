//Interface
interface CamisetaBase{
	setColor(color);
	getColor();
}

//Decorador
function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function():void{
			console.log("Camiseta estampada con el logo de: "+logo);
		}
	}
}

//Clase (molde del objeto) //debe empezar por mayusculas y llamarse igual que el fichero
@estampar('Gucci') //no se cierra con punto y coma
class Camiseta implements CamisetaBase{
//Propiedades (características del objeto)
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

//Constructor
	constructor(color,modelo,marca,talla,precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

//Métodos (funciones o acciones del objeto)
	public setColor(color){
		this.color=color;
	}

	public getColor(){
		return this.color;
	}
}

//var camisetilla = new Camiseta("rojo","Manga Larga","Nike","M",26);
//camisetilla.setColor("Azul");
//camisetilla.getColor();

//camisetilla.color="Rojo";
//camisetilla.modelo="Manga Larga";
//camisetilla.marca="Nike";
//camisetilla.talla="M";
//camisetilla.precio=50;

//Clase hija

class Sudadera extends Camiseta{
	public capucha: boolean;

	setCapucha(capucha:boolean){
		this.capucha=capucha;
	}
	getCapucha():boolean{
		return this.capucha;
	}
}
var camisetilla = new Camiseta("color","modelo","marca","talla",50);
camisetilla.estampacion();
console.log(camisetilla);

var sudadera_nike = new Sudadera("color","modelo","marca","talla",50);
sudadera_nike.setCapucha(true);
console.log(sudadera_nike);
//console.log(camisetilla);
