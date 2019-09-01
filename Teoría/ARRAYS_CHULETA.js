//Formas de crear un Array

//Existen dos formas de crear un Array y son las siguientes:
//1º
    var colores =  new Array(); 
    var colores = new Array(10); 
    var colores = new Array("rojo", "azul", "verde"); 

//2º
    var colores = ["rojo", "azul", "verde"] ; 
    var nombres = []; 

/*Nota.- De usar una coma sin indicar el valor a tomar al siguiente dato, entonces puede ocurrir algún tipo de error dependiendo el 
navegador que estés usando, así que deberíamos evitarlo.  El siguiente es un ejemplo de lo que NO debes hacer:
*/
    var valores = [1,2 , ];

//Acceder a los elementos de un Array

/*A través del nombre establecido junto a dos corchetes, entre ellos la posición del elemento, de la siguiente manera:
*/
    var colores = ["rojo", "azul ", " verde "] ; 
    colores[1]; 
    "azul"

//Métodos en los Arrays

//Método length --> Si queremos conocer el número de elementos del array colores se establece a través de length, de la siguiente manera: 

    colores.length; 
    3

//También podemos re establecer la cantidad de elementos del array, en el caso de colores sería:

    colores.length = 2; 
    ["rojo", "azul"]

//Si queremos darle otra utilidad a este método, pues podríamos usarlo para agregar elementos al final del array, el cual sería:

    colores[colores.length] = "amarillo"; //La posición a agregar coincide con el número total de elemento, "amarillo", iría a la última posición del array.

//Método toString();

    colores.toString(); 

//Métodos Stack
/*
Un array puede actuar como una pila, que te permite en un grupo de datos apilar y desapilar estos. A esta pila se conoce como el tipo LIFO
(Last in, First out) último en entrar - primero en salir, lo que significa que el elemento más recientemente añadido es el primero en ser 
eliminado. La inserción (push) y remoción (pop).
*/
//Método Push en Array. Transforma un array añadiendo los elementos proporcionados y devolviendo la nueva longitud del array.
    var colores = ["rojo", "azul", "verde", "amarillo"];

//El método push acepta cualquier número de argumentos y los agrega al final del array y sería: 
    colores.push ( "negro", "blanco"); 
    ["rojo", "azul", "verde", "amarillo", "negro", "blanco"]

//Método Pop en Array. Este método permite eliminar el último elemento del array, disminuyendo la longitud de dicho array, veamos:
    colores.pop(); 
    ["rojo", "azul", "verde", "amarillo", "negro"]

//Métodos adicionales en los Arrays
    var colores = [“rojo”, “azul”, “verde”, “amarillo”];

//Shift, este método nos permite obtener el primer elemento de un array, como lo veremos a continuación:

    colores.shift(); //Nos devuelve el string “rojo”.

//Unshift, el método con el cual puedes agregar elementos al inicio del array, puede contener más de un argumento, esto quiere decir que puedes agregar en la misma sentencia más de un elemento.

    colores.unshift(“anaranjado”); 
    [“anaranjado”, “rojo”, “azul”, “verde”, “amarillo”]

//Reverse, método que establece que el array invierte sus elementos:

    colores.reverse();
    ["amarillo", "verde", "azul", "rojo", "anaranjado"] //Veremos que nos devuelve todos los datos invertidos.

//Sort, este método es muy útil cuando tengamos un array con elementos string, pues estos serán ordenados alfabéticamente. En el caso de nuestro array:

    colores.sort();
    ["amarillo", "anaranjado", "azul", "rojo", "verde"] //Lo ordenará alfabéticamente. De usarse este método en elementos de tipo numéricos nos devolverá datos incorrectos.

//Slice, método que puede contener uno o dos argumentos, que indiquen el inicio y parada de posiciones, pues devuelve los elementos contenidos en el array, de acuerdo a los argumentos indicados, por ejemplo si a colores, le agregamos colores.slice(1,3); obtendremos los que se encuentran en la posición 1, 2 que son:

    colores =  ["amarillo", "anaranjado", "azul", "rojo", "verde"]
    colores.slice(1,3);
    ["anaranjado", "azul"]

//Si solo se indica un argumento se tomará como inicio ese argumento y como final la última posición, entonces si usamos:

    colores.slice(2);
    ["azul", "rojo", "verde"]

//Splice, cambia el contenido de un array removiendo elementos existentes y/o agregando nuevos elementos, hay tres maneras distintas de utilizar este método. 

    //Supresión: Cualquier número de elementos puede ser eliminado de la matriz especificando sólo dos argumentos: la posición del primer elemento que desea eliminar y el número de elementos a eliminar. Por ejemplo,

    colores =  ["amarillo", "anaranjado", "azul", "rojo", "verde"]
    colores.splice(0, 2);
    ["azul", "rojo", "verde"] //Entonces, suprime los dos primeros elementos.

//Inserción: Se puede insertar elementos en el array en una posición específica, proporcionando tres argumentos: la posición donde deseas agregar elementos,el número de elementos que desea eliminar y el elemento a insertar. Opcionalmente, se puede especificar una cuarta, quinta, o cualquier número de otros parámetros a insertar. Por ejemplo,

    var colores =  ["amarillo", "anaranjado", "azul", "rojo", "verde"];
    colores.splice(1,0,'pepe');
    ["amarillo", "pepe", "anaranjado", "azul", "rojo", "verde"]

//Si recuerdas en inserción, podemos optar como segundo parámetro el número de elementos a eliminar veamos cómo se comporta de agregar un número mayor a cero. 

    var colores =  ["amarillo", "anaranjado", "azul", "rojo", "verde"];
    colores.splice(1,2,'pepe');
    ["amarillo", "pepe", "rojo", "verde"]

//Vemos que se inserto el elemento establecido pero también se eliminó dos elementos a partir de la posición indicada a insertar.

//Reemplazar: Se comportaría como insertar en una posición específica al eliminar simultáneamente, para esto se tiene que especificar tres argumentos: la posición donde insertar, el número de elementos a borrar, y cualquier número de elementos a insertar. El número de elementos a insertar no tiene que coincidir necesariamente con el número de elementos que desea eliminar. Por ejemplo: 

    var colores =  ["amarillo", "anaranjado", "azul", "rojo", "verde"];
    colores.splice(2, 1, "morado", " violeta");
    ["amarillo", "anaranjado", "morado", " violeta", "rojo", "verde"]

//Elimina un elemento en la posición 2 y luego inserta las cadenas"rojo" y "verde" en la matriz en la posición 2.