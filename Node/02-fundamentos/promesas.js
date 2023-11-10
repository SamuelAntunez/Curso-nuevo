const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Pepe'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
]
const salarios = [
    {
        id: 1,
        nombre: 1000
    },
    {
        id: 2,
        nombre: 2000
    },
    {
        id: 3,
        nombre: 3000
    }
];

const getEmpleado = (id) => {
    return new Promise( ( resolve, reject ) => {
        const empleado = empleados.find( (e) => {
            return e.id === id
        })?.nombre;
    
        if (empleado){
            resolve(empleado);
        } else {
            reject(`Empleado con id ${id} no existe`)
        }
    })
};

const getSalario = (id) => {
    return new Promise( ( resolve, reject ) => {
        const salario = salarios.find( (e) => e.id === id)?.nombre;
    (salario)
        ? resolve(salario)
        : reject( `El salario con id ${id} no existe`);
    });
}

const id = 1;

getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch( err => console.log(err))

getSalario(id)
    .then(salario => console.log(salario))
    .catch( err => console.log(err))