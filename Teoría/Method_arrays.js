// Si JavaScript no proporciona un método first() de forma nativa,
// agrega un nuevo método que devuelve el primer elemento de una matriz.

if (!Array.prototype.first) {
  Array.prototype.first = function() {
    return this[0];
  }
}
Array.prototype.length  //Refleja el número de elementos en un array.
var clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
// expected output: 4

-----------------------------------------------------------------------------------------------------------------
concat() 		//Joins two or more arrays, and returns a copy of the joined arrays
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

-----------------------------------------------------------------------------------------------------------------
copyWithin() 	//Copies array elements within the array, to and from specified positions
var array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

-----------------------------------------------------------------------------------------------------------------
entries() 		//Returns a key/value pair Array Iteration Object
var array1 = ['a', 'b', 'c'];

var iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

-----------------------------------------------------------------------------------------------------------------
every() 		//Checks if every element in an array pass a test
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

-----------------------------------------------------------------------------------------------------------------
fill() 			//Fill the elements in an array with a static value
var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

-----------------------------------------------------------------------------------------------------------------
filter() 		//Creates a new array with every element in an array that pass a test
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
-----------------------------------------------------------------------------------------------------------------
find() 			//Returns the value of the first element in an array that pass a test
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12
-----------------------------------------------------------------------------------------------------------------
findIndex() 	//Returns the index of the first element in an array that pass a test
var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

-----------------------------------------------------------------------------------------------------------------
flat() //Crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

var newArray = arr.flat([depth]);

var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

-----------------------------------------------------------------------------------------------------------------
flatMap() //primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. Es idéntico a un map seguido de un flatten de profundidad 1, pero flatMap es a menudo útil y la fusión de ambos en un método es ligeramente más eficiente.

var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// solo un nivel es aplanado
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]

-----------------------------------------------------------------------------------------------------------------
forEach() 		//Calls a function for each array element
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"

-----------------------------------------------------------------------------------------------------------------
from() 			//Creates an array from an object
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
-----------------------------------------------------------------------------------------------------------------
includes() 		//Check if an array contains the specified element
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
-----------------------------------------------------------------------------------------------------------------
indexOf() 		//Search the array for an element and returns its position
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
-----------------------------------------------------------------------------------------------------------------
isArray() 		//Checks whether an object is an array

-----------------------------------------------------------------------------------------------------------------
join() 			//Joins all elements of an array into a string
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: "Fire,Wind,Rain"

console.log(elements.join(''));
// expected output: "FireWindRain"

console.log(elements.join('-'));
// expected output: "Fire-Wind-Rain"
-----------------------------------------------------------------------------------------------------------------
keys() 			//Returns a Array Iteration Object, containing the keys of the original array
var array1 = ['a', 'b', 'c'];
var iterator = array1.keys(); 
  
for (let key of iterator) {
  console.log(key); // expected output: 0 1 2
}

-----------------------------------------------------------------------------------------------------------------
lastIndexOf() 	//Search the array for an element, starting at the end, and returns its position
var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
-----------------------------------------------------------------------------------------------------------------
map() 			//Creates a new array with the result of calling a function for each array element
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
-----------------------------------------------------------------------------------------------------------------
pop() 			//Removes the last element of an array, and returns that element
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

-----------------------------------------------------------------------------------------------------------------
push() 			//Adds new elements to the end of an array, and returns the new length
var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]

-----------------------------------------------------------------------------------------------------------------
reduce() 		//Reduce the values of an array to a single value (going left-to-right)
var array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

var reversed = array1.reverse(); 
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */ 
console.log('array1: ', array1);
// expected output: Array ['three', 'two', 'one']
-----------------------------------------------------------------------------------------------------------------
reduceRight()  	//Reduce the values of an array to a single value (going right-to-left)
[0,1,2,3,4].reduceRight(function(valorPrevio, valorActual, indice, array){
  return valorPrevio + valorActual;
});

// First call
valorPrevio = 4, valorActual = 3, indice = 3

// Second call
valorPrevio = 7, valorActual = 2, indice = 2

// Third call
valorPrevio = 9, valorActual = 1, indice = 1

// Fourth call
valorPrevio = 10, valorActual = 0, indice = 0

// el array sobre el que se llama a reduceRight siempre es el objeto [0,1,2,3,4] 

// Valor Devuelto: 10
-----------------------------------------------------------------------------------------------------------------
reverse() 		//Reverses the order of the elements in an array

var array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

var reversed = array1.reverse(); 
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */ 
console.log('array1: ', array1);
// expected output: Array ['three', 'two', 'one']
-----------------------------------------------------------------------------------------------------------------
shift() 		//Removes the first element of an array, and returns that element
var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];

console.log('miPescado antes: ' + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

var eliminado = miPescado.shift(); 

console.log('miPescado después: ' + miPescado); 
// "miPescado after: payaso,mandarín,cirujano" 

console.log('Elemento eliminado: ' + eliminado); 
// "Elemento eliminado: ángel"
-----------------------------------------------------------------------------------------------------------------
slice() 		//Selects a part of an array, and returns the new array
var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']

-----------------------------------------------------------------------------------------------------------------
some() 			//Checks if any of the elements in an array pass a test

var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true
-----------------------------------------------------------------------------------------------------------------
sort() 			//Sorts the elements of an array
var frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

var puntos = [1, 10, 2, 21]; 
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

var cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.

-----------------------------------------------------------------------------------------------------------------
splice() 		//Adds/Removes elements from an array

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
-----------------------------------------------------------------------------------------------------------------
toString() 		//Converts an array to a string, and returns the result
var array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
var localeString = array1.toLocaleString('en', {timeZone: "UTC"});

console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary

-----------------------------------------------------------------------------------------------------------------
toSource() //Devuelve un string representando el código fuente de un arreglo.
var alpha = new Array('a', 'b', 'c');

alpha.toSource();
//devuelve ['a', 'b', 'c']
-----------------------------------------------------------------------------------------------------------------
unshift() 		//Adds new elements to the beginning of an array, and returns the new length

var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
-----------------------------------------------------------------------------------------------------------------
valueOf() 		//Returns the primitive value of an array

var a = ['w', 'y', 'k', 'o', 'p']; 
var iterator = a.values();

console.log(iterator.next().value); // w 
console.log(iterator.next().value); // y 
console.log(iterator.next().value); // k 
console.log(iterator.next().value); // o 
console.log(iterator.next().value); // p
-----------------------------------------------------------------------------------------------------------------
pop() 			//Removes the last element of an array, and returns that element
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

-----------------------------------------------------------------------------------------------------------------
push() 			//Adds new elements to the end of an array, and returns the new length
var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]

-----------------------------------------------------------------------------------------------------------------

