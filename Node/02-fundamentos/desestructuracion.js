
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool. apellido;
// const poder = deadpool.poder;

function imprimeHeroe( heroe ) {
    const { nombre, apellido, poder, edad = 0} = deadpool;
    console.log(nombre, apellido, poder, edad); 
}

imprimeHeroe( deadpool);

function imprimeHeroe1( {nombre, apellido, poder, edad = 0} ) {
    console.log(nombre, apellido, poder, edad); 
}

imprimeHeroe1( deadpool);

// const { nombre, apellido, poder, edad = 0} = deadpool;
// console.log(nombre, apellido, poder, edad); 

const heroes = ['Deadpool', 'Superman', 'Batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];

const [h1, ,h3] = heroes;

console.log(h1, h3);
