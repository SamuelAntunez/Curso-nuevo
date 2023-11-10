// Metodos de Cadenas

// Concat()
let cadena = 'cadena de prueba';
let cadena2 = 'cadena ';

resultado = cadena.concat(cadena2);
document.write(resultado);

// startwith() nos devuelve true o false si una cadena empieza con los mismos caracteres que la otra 
// endWith() alrevez que startWith
// includes() busca si forma parte de una cadena
// indexOf() busca la posicion de la primera letra de la palabra buscada / lastIndexOf() lo contrario
// padStart() rellena la cadena al principio con tantos caracteres padstart(10, 'ab') / padEnd() / repeat(x) repite la cadena la cantidad 
// split() divide buscando el espacio dentro del parametro
// substring(0,2) nos muestra los strings 
// toLowerCase() toUpperCase() toString() convertir a string, trim() elimina espacios en blanco 
// resultado.lenght muestra la cantidad de caracteres
// lenght()

resultado1 = cadena.startsWith(cadena2);
document.write(resultado1.lenght);

// METODOS ARRAY

let nombres = ['pedro', 'maria', 'jorge']

// let resultado = nombres.pop() elimina el ultimo, shift() elimina el primero
// push() agrega al array unshift() agrega uno mas elemntos al inicio, sort() ordena alfabeticamente
// splice() elimina los elementos dos parametros

// METODOS ACCESORES


